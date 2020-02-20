'use strict';

(function () {
  var PICTURES_COUNT = 25;
  var LIKES_MIN = 15;
  var LIKES_MAX = 200;
  var PICTURE_COMMENTS_MAX = 2;

  var picturesList = document.querySelector('.pictures');
  var pictureTemplate = document.querySelector('#picture').content;

  var fragment = document.createDocumentFragment();

  var renderPicture = function (picture) {
    var pictureElement = pictureTemplate.cloneNode(true);
    pictureElement.querySelector('.picture__img').src = picture.url;
    pictureElement.querySelector('.picture__img').alt = picture.description;
    pictureElement.querySelector('.picture__likes').textContent = picture.likes;
    pictureElement.querySelector('.picture__comments').textContent = picture.comments;
    return pictureElement;
  };

  var rundomInteger = function (min, max) {
    // случайное число от min до (max включительно)
    var rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  };

  var rundomQuantityComments = function () {
    var pictureComments = [];
    for (var a = 0; a < PICTURE_COMMENTS_MAX; a++) {
      pictureComments[a] = window.data.COMMENTS[rundomInteger(0, window.data.COMMENTS.length - 1)];
    }
    return pictureComments;
  };

  var pictures = [];

  for (var i = 0; i < PICTURES_COUNT; i++) {
    var j = i + 1;

    pictures[i] = {
      url: 'photos/' + j + '.jpg',
      description: window.data.DESCRIPTIONS[i],
      likes: rundomInteger(LIKES_MIN, LIKES_MAX),
      comments: rundomQuantityComments()
    };

    fragment.appendChild(renderPicture(pictures[i]));
  }

  picturesList.appendChild(fragment);

  window.gallery = {
    pictures: pictures
  };
})();
