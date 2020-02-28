'use strict';

(function () {
  var pictureTemplate = document.querySelector('#picture').content;
  var getCloneElement = function (picture) {
    var pictureElement = pictureTemplate.cloneNode(true);
    pictureElement.querySelector('.picture__img').src = picture.url;
    pictureElement.querySelector('.picture__img').alt = picture.description;
    pictureElement.querySelector('.picture__likes').textContent = picture.likes;
    pictureElement.querySelector('.picture__comments').textContent = picture.comments;
    return pictureElement;
  };

  window.element = {
    getCloneElement: getCloneElement
  };
})();
