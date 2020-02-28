'use strict';

(function () {
  var PICTURES_COUNT = 25;

  var picturesList = document.querySelector('.pictures');

  var fragment = document.createDocumentFragment();
  for (var i = 0; i < PICTURES_COUNT; i++) {
    fragment.appendChild(window.element.getCloneElement(window.pictures.items[i]));
  }
  picturesList.appendChild(fragment);
})();
