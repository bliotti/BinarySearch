(function() {
  const app = window.app;

  const SearchInputContainer = function(SearchInput, Label) {
    let searchInput = SearchInput();

    let searchInputLabel = Label({
      title: "Search for item"
    });

    searchInput.style.marginLeft = 10;

    let searchInputContainer = document.createElement("div");
    searchInputContainer.style.margin = "0 auto";
    searchInputContainer.style.width = 400;

    searchInputContainer.appendChild(searchInputLabel);
    searchInputContainer.appendChild(searchInput);

    return searchInputContainer;
  };

  app.SearchInputContainer = SearchInputContainer;
})();
