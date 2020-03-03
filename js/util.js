'use strict';
(function () {

  var ESC_KEY = 'Escape';

  var getRandomBetween = function (min, max) {
    // случайное число от min до (max включительно)
    var rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  };

  var getRandomItem = function (arr) {
    return arr[getRandomBetween(0, arr.length - 1)];
  };

  window.util = {
    ESC_KEY: ESC_KEY,
    getRandomBetween: getRandomBetween,
    getRandomItem: getRandomItem
  };

})();
