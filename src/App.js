// The app component wraps all other components in this applciation.

import Cards from './components/Cards/Cards';
import Loading from './components/Loading/Loading';
import React, { Component } from 'react';
import Search from './components/Search/Search';

import './reset.css';
import './App.css';

export default class App extends Component {

  constructor(props) {

    super(props);

    this.state = {
      loading: false, // Boolean indicating whether or not the cards are being loaded
      results: {
        cards: [], // The cards returned by the API.
        page: 1, // The current page that has been loaded.
        isLastPage: false, // Boolean indicating whether or not the current page is the last page.
      },
      query: "", // The query entered by the user

    };

    this.getResults = this.getResults.bind(this);
    this.setQuery = this.setQuery.bind(this);
    this.handleScroll = this.handleScroll.bind(this);

  }

  componentDidMount() {

    this.getResults(null);
    const app = document.getElementById('app');
    requestAnimationFrame(this.handleScroll);

  }

  // Set's the query field in state.
  setQuery(event) {

    this.setState({ query: event.currentTarget.value });

  }

  // Fetches results from the API. The last two parameters modify how the results are fetched.
  getResults(event, isSearch = false, isPageLoad = false) {

    const { query, results } = { ...this.state };
    let { page } = results;

    if(isSearch) page = 1;

    if(isPageLoad) page += 1;

    // Endpoint for cards.
    let uri = `https://api.elderscrollslegends.io/v1/cards?pageSize=20&page=${page}`;

    if(query) uri += `&name=${query}`; // Add query to query string.


    this.setState({ loading: true }); // Will render loading indicator.

    fetch(uri)
    .then(response => {

      response.json()
      .then(jsonResponse => {

          this.setState(state => {

            const results = { ...state.results };

            if(isPageLoad) {

              results.cards = results.cards.concat(jsonResponse.cards);

            } else {

              results.cards = jsonResponse.cards;

            }

            results.page = page;

            if (jsonResponse.cards.length < 20) results.isLastPage = true;

            return { results };

          });

      });

    })

  }

  handleScroll() {

    const app = document.getElementById('app');
    const { isLastPage } = this.state;

    if(!isLastPage && window.scrollY > 0 && window.scrollY == (app.scrollHeight - window.innerHeight)) {

      this.getResults(null, false, true);
      setTimeout(function() {

        requestAnimationFrame(this.handleScroll);

      }.bind(this), 500);

    } else {

      requestAnimationFrame(this.handleScroll);

    }


  }

  render() {

    const { query, isLoading, results } = this.state;

    return(
      <div id="app">
        <header id='app-header'>
          <img id="app-logo" src="./icons/dragon.png" alt="dragon"/>
          <h1 id="app-name">Elder Scrolls Legends</h1>
          <div></div>
        </header>
        <Search
          getResults={this.getResults}
          setQuery={this.setQuery}
          query={query}
        />
        {results.cards.length > 0 &&
          <Cards
            results={results}
          />
        }
        {isLoading && <Loading />}
        {results.isLastPage &&
          <h3 id="showing-all-results">Showing All Results</h3>
        }
      </div>
    );

  }

}
