'use strict';
(function () {

  var Avatar = {
    MIN: 1,
    MAX: 6
  };

  var Comments = {
    MIN: 0,
    MAX: 5
  };

  var Likes = {
    MIN: 15,
    MAX: 200
  };

  var PICTURES_QUANTITY = 25;
  var GALLERY = document.querySelector('.pictures');


  var description = window.data.DESCRIPTIONS;

  var message = function () {
    return window.util.getRandomItem(window.data.COMMENTS);
  };

  var name = function () {
    return window.util.getRandomItem(window.data.NAMES);
  };

  var avatar = function () {
    return 'img/avatar-' + window.util.getRandomBetween(Avatar.MIN, Avatar.MAX) + '.svg';
  };

  var quantityComments = function () {
    return window.util.getRandomBetween(Comments.MIN, Comments.MAX);
  };

  var likes = function () {
    return window.util.getRandomBetween(Likes.MIN, Likes.MAX);
  };

  var comments = function () {
    return window.comments.get(quantityComments, message, name, avatar);
  };

  var pictures = window.pictures.get(PICTURES_QUANTITY, description, likes, comments);
  GALLERY.appendChild(window.gallery.get(pictures));

  var pictureNodeList = document.querySelectorAll('.picture');
  window.preview.set(pictureNodeList, pictures);

})();
