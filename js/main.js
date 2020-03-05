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

  var getRandomMessage = function () {
    return window.util.getRandomItem(window.data.COMMENTS);
  };

  var getRandomName = function () {
    return window.util.getRandomItem(window.data.NAMES);
  };

  var getRandomAvatar = function () {
    return 'img/avatar-' + window.util.getRandomBetween(Avatar.MIN, Avatar.MAX) + '.svg';
  };

  var getRandomCommentsCount = function () {
    return window.util.getRandomBetween(Comments.MIN, Comments.MAX);
  };

  var getRandomLikesCount = function () {
    return window.util.getRandomBetween(Likes.MIN, Likes.MAX);
  };

  var getRandomComments = function () {
    return window.comments.get(getRandomCommentsCount, getRandomMessage, getRandomName, getRandomAvatar);
  };

  var pictures = window.pictures.get(PICTURES_QUANTITY, description, getRandomLikesCount, getRandomComments);
  GALLERY.appendChild(window.gallery.get(pictures));

  var pictureNodeList = document.querySelectorAll('.picture');
  window.preview.set(pictureNodeList, pictures);

})();
