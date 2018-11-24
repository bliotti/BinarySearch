(function() {
  const app = window.app;

  const Title = text => {
    let h1 = document.createElement("h1");
    h1.innerHTML = text;
    h1.style.textAlign = "center";

    return h1;
  };

  app.Title = Title;
})();
