(function() {
  const app = window.app;

  const SearchButtonContainer = function(SearchButton, props) {
    let searchButton = SearchButton();
    let container = document.createElement("div");

    searchButton.addEventListener("click", event => {
      props.onClick(event);
    });

    container.appendChild(searchButton);
    container.style.textAlign = "center";

    return container;
  };

  app.SearchButtonContainer = SearchButtonContainer;
})();
