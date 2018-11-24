(function() {
  const app = window.app;

  const appUtils = function() {
    const compareFn = (item1, item2) => {
      if (item1 < item2) {
        return -1;
      }

      if (item1 > item2) {
        return 1;
      }

      if (item1 === item2) {
        return 0;
      }

      return -2;
    };

    const binarySearch = (items, item, fn) => {
      if (typeof fn !== "function") {
        fn = compareFn;
      }

      var startingPoint = Math.floor(items.length / 2);
      var endPoint;

      if (items.length === 1 && items[startingPoint] !== item) {
        return false;
      } else if (fn(item, items[startingPoint]) === 0) {
        return true;
      } else if (fn(item, items[startingPoint]) === -1) {
        endPoint = startingPoint;
        startingPoint = 0;
      } else if (fn(item, items[startingPoint]) === 1) {
        endPoint = items.length;
      }

      return binarySearch(items.slice(startingPoint, endPoint), item, fn);
    };

    return {
      search: binarySearch
    };
  };

  app.utils = app.utils || {};
  app.utils = Object.assign(app.utils, appUtils());
})();
