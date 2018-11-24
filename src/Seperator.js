(function() {
  const app = window.app;

  const Seperator = margin => {
    let div = document.createElement("div");
    div.innerHTML = "&#160";
    div.style.margin = margin || 0;

    return div;
  };

  app.Seperator = Seperator;
})();
