(function() {
  const app = window.app;

  const ItemsInputContainer = function(ValuesInput, Label) {
    let itemsInputLabel = Label({
      title:
        "Insert the items you need to search with comma sperator and sorted"
    });

    let valuesInput = ValuesInput();
    valuesInput.style.marginLeft = 10;

    let itemsInputContainer = document.createElement("div");
    itemsInputContainer.style.margin = "0 auto";
    itemsInputContainer.style.width = 600;

    itemsInputContainer.appendChild(itemsInputLabel);
    itemsInputContainer.appendChild(valuesInput);

    return itemsInputContainer;
  };

  app.ItemsInputContainer = ItemsInputContainer;
})();
