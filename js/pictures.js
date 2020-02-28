'use strict';

(function () {

  var PICTURES_COUNT = 25;
  var LIKES_MIN = 15;
  var LIKES_MAX = 200;

  var pictures = [];

  for (var i = 0; i < PICTURES_COUNT; i++) {

    pictures[i] = {
      url: 'photos/' + (i + 1) + '.jpg',
      description: window.data.DESCRIPTIONS[i],
      likes: window.util.getRandomBetween(LIKES_MIN, LIKES_MAX),
      comments: window.comments.getRandomComments()
    };
  }

  window.pictures = {
    items: pictures
  };

})();
