(function() {
  const app = window.app;

  const ValuesInput = () => {
    let input = document.createElement("input");
    input.id = "search-items";

    return input;
  };

  app.ValuesInput = ValuesInput;
})();
