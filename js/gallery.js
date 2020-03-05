'use strict';
(function () {

  var renderPhoto = function (picture) {
    var pictureTemplate = document.querySelector('#picture').content;
    var pictureCloneElement = pictureTemplate.cloneNode(true);

    pictureCloneElement.querySelector('.picture__img').src = picture.url;
    pictureCloneElement.querySelector('.picture__img').alt = picture.description;
    pictureCloneElement.querySelector('.picture__likes').textContent = picture.likes;
    pictureCloneElement.querySelector('.picture__comments').textContent = picture.comments.length;

    return pictureCloneElement;
  };

  var renderGallery = function (pictures) {

    var fragment = document.createDocumentFragment();

    pictures.forEach(function (it) {
      fragment.appendChild(renderPhoto(it));
    });

    return fragment;
  };

  window.gallery = {
    get: renderGallery
  };

})();
