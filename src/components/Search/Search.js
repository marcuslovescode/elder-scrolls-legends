// The Search component as seen at the top of the page.

import './Search.css';

export default function Search(props) {

  const { query, setQuery, getResults } = props;

  return (
    <div id="search">
      <div id="search-bar">
        <button id="search-bttn" type="button" onClick={e => getResults(e, true)}>
          <img id="search-icon" src="./icons/search.png" alt="Magnifying glass."/>
        </button>
        <input
          id="search-input"
          type="text"
          value={query}
          onChange={setQuery}
          placeholder="Card Name"
          onKeyPress={e => e.key === "Enter" && getResults(e, true)}
        />
      </div>
    </div>
  );

}
