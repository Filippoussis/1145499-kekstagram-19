'use strict';
(function () {

  var GALLERY = document.querySelector('.pictures');
  var PICTURE_TEMPLATE = document.querySelector('#picture').content;

  var renderPhoto = function (picture) {

    var pictureCloneElement = PICTURE_TEMPLATE.cloneNode(true);

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

    GALLERY.appendChild(fragment);

    window.preview.set(pictures);

  };

  window.gallery = {
    get: renderGallery
  };

})();
