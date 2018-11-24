(function() {
  const app = window.app;

  const Label = props => {
    let label = document.createElement("span");
    label.innerHTML = props.title;
    label.id = props.id;

    return label;
  };

  app.Label = Label;
})();
