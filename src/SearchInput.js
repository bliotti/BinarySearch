(function() {
  const app = window.app;

  const SearchInput = () => {
    let input = document.createElement("input");
    input.type = "number";
    input.id = "search-value";

    return input;
  };

  app.SearchInput = SearchInput;
})();
