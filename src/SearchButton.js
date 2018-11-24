(function() {
  const app = window.app;

  const SearchButton = function() {
    let button = document.createElement("button");
    button.innerHTML = "Start search for element";

    return button;
  };

  app.SearchButton = SearchButton;
})();
