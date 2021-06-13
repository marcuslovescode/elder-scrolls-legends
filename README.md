# Elder Scrolls Legends

This project was bootstrapped using Create React App.

## Prerequisites

### Git

It is recommended that you have the Git CLI installed in order to download the source code. See [this](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) link for Git installation instructions.

### Node & NPM

After installing this project your local machine must have NPM and Node installed. See [this](https://nodejs.org/en/download/) link for installation instructions. (Note: when downloading Node, NPM will also automatically be downloaded.)

## Installation

### Download the Source Code

From your terminal, run `git clone <repository> <directory>` replacing `<repository>` with the URL that points to the location of this repository and replacing `<directory>` with the name of the directory you wish to store the downloaded repository in (optional).

### Install Dependencies

After you have installed the repository, `cd` into directory you have stored it in on your local machine and run `npm install`. This will install all the dependencies required for the application to run. This step may take several minutes.

## Run & Build

In order to run this application, navigate to the root directory of this project and run `npm run`. This will run the project in development mode. If you wish to build this project, then run `npm build`. (Note: you will have to set up a server that serves the build folder.)

## Requirements

In this section I will briefly explain what was expected of me and how I fulfilled those expectations.

### Show results in a card grid format with the image prominently displayed

The results, returned from the API, are displayed in a card grid format in my solution. This was done by making a card component, which displayed the image and other data associated with a card, and a container component, that rendered the grid along with the card. Additionally, the image is initially the only thing that the user sees, until they hover over the card, making it the most prominent figure.

### Each card displays: Image, Name, Text, Set Name, and Type. Additional fields are optional.

Along with the fields that are already displayed on the front of the card in the image, when a user hovers over a card, they are presented with the specified fields. This was done to allow the user to focus on the playing cards when browsing, furthermore, hiding the text behind the cards prevents white space pollution.

### Display a loading indicator when communicating with the API.

The loading indicator was made into a functional component so that it may be used in multiple locations, throughout the application, with ease. The loading indicator appears right before a request is sent out and disappears when that request is fulfilled. Additionally, a loading indicator was added to card components to signify that the image is being loaded. Similar to the preceding loading indicator, this loading indicator appears before the image has loaded and disappears after the image has loaded.

### Use a responsive design that accommodates, at minimum, desktop and mobile.

The application looks visually pleasing on all mobile screen resolutions and on desktop. This was accomplished by using grid-box, media queries, and relative sizing.

### Initially, fetch and display the first 20 results returned by the API.

Results are acquired in sets of 20. This was done by adding a `pageSize` parameter, and setting it equal to 20, in the query string. This logic behind this can be seen in the `getResults()` function inside of `App.js`.

### As the user scrolls down the page, load and append additional cards using “infinite scroll.”

After the initial load of 20 cards, the application tracks the amount the user has scrolled and decides whether or not it needs to fetch more results. If it needs to, a request is sent to the API to get the next set of results and then the results are appended to the already received results. The logic for this feature can be seen in the `handleScroll()` function inside of `App.js`.

### Retrieve additional pages of results as-needed but do not load more than 20 cards with each request.

This requirement was covered by covering the two preceding requirements.

### Allow the user to search for cards by Name.

The user is given access to a search bar at the top of the page. By entering the name (or a portion of the name) of the card they wish to search for, they are able to narrow down the results to find the designated card. The Search component encapsulates the content that represents the search functionality and can be seen in `Search.js`. 

### Use modern open-source web technologies to implement your solution (React, Backbone, Angular, Vue, Underscore, etc.).

This project was built using React!

### Provide instructions for prerequisites, installation, and application setup and build in a README file.

These instructions are provided above.
