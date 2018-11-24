const utils = window.app.utils;
const Label = window.app.Label;
const Title = window.app.Title;
const ValuesInput = window.app.ValuesInput;
const SearchInput = window.app.SearchInput;
const SearchInputContainer = window.app.SearchInputContainer;
const Seperator = window.app.Seperator;
const ItemsInputContainer = window.app.ItemsInputContainer;
const SearchButton = window.app.SearchButton;
const SearchButtonContainer = window.app.SearchButtonContainer;

const render = app => {
  let title = Title("Welcome to binary search algorithm");
  let seperator = Seperator(10);

  title.style.margin = "50 0";
  title.style.borderBottom = "1px solid #000";

  app.appendChild(title);
  app.appendChild(ItemsInputContainer(ValuesInput, Label));
  app.appendChild(seperator);
  app.appendChild(SearchInputContainer(SearchInput, Label));
  app.appendChild(seperator);

  app.appendChild(
    SearchButtonContainer(SearchButton, {
      onClick: $event => {
        const messageLabelId = "message-result-label";
        const messageContainer = document.getElementById(messageLabelId);

        if (messageContainer) {
          app.removeChild(messageContainer);
        }

        let itemToSearch = document.getElementById("search-value").value;
        console.log(itemToSearch);
        let items = document
          .getElementById("search-items")
          .value.split(/,\s?/g);
        console.log("items", items);
        let integerItems = items.map(item => {
          console.log("item", item, parseInt(item));
          return parseInt(item);
        });
        console.log(integerItems);

        let result = utils.search(integerItems, parseInt(itemToSearch));
        console.log(result);
        let successMessage = Label({
          title: `The item found`,
          id: messageLabelId
        });

        let faildMessage = Label({
          title: `The item not found`,
          id: messageLabelId
        });

        let finalResultLabel = result ? successMessage : faildMessage;

        app.appendChild(finalResultLabel);
      }
    })
  );
};

render(document.getElementById("app"));
