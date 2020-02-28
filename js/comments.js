'use strict';
(function () {

  var PICTURE_COMMENTS_MAX = 2;

  var getRandomComments = function () {
    var pictureComments = [];
    for (var i = 0; i < PICTURE_COMMENTS_MAX; i++) {
      pictureComments[i] = window.data.COMMENTS[window.util.getRandomBetween(0, window.data.COMMENTS.length - 1)];
    }
    return pictureComments;
  };

  window.comments = {
    getRandomComments: getRandomComments
  };

})();
