'use strict';
(function () {

  var AVATAR_MIN = 1;
  var AVATAR_MAX = 6;

  var LIKES_MIN = 15;
  var LIKES_MAX = 200;

  var getName = function () {
    var name = window.data.NAMES[window.util.getRandomBetween(0, window.data.NAMES.length - 1)];
    return name;
  };

  var getAvatar = function () {
    var avatar = 'img/avatar-' + window.util.getRandomBetween(AVATAR_MIN, AVATAR_MAX) + '.svg';
    return avatar;
  };

  var getLikes = function () {
    var likes = window.util.getRandomBetween(LIKES_MIN, LIKES_MAX);
    return likes;
  };

  window.guest = {
    getName: getName,
    getAvatar: getAvatar,
    getLikes: getLikes
  };

})();
