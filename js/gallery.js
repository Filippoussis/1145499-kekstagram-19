'use strict';
(function () {

  var getCloneElement = function (picture) {
    var pictureTemplate = document.querySelector('#picture').content;
    var pictureCloneElement = pictureTemplate.cloneNode(true);

    pictureCloneElement.querySelector('.picture__img').src = picture.url;
    pictureCloneElement.querySelector('.picture__img').alt = picture.description;
    pictureCloneElement.querySelector('.picture__likes').textContent = picture.likes;
    pictureCloneElement.querySelector('.picture__comments').textContent = picture.comments.length;

    return pictureCloneElement;
  };

  var getGallery = function (pictures) {

    var fragment = document.createDocumentFragment();

    pictures.forEach(function (it) {
      fragment.appendChild(getCloneElement(it));
    });

    return fragment;
  };

  window.gallery = {
    get: getGallery
  };

})();
