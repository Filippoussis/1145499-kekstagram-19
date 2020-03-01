'use strict';
(function () {

  var COMMENTS_MIN = 0;
  var COMMENTS_MAX = 5;

  var getContent = function () {
    var contentComments = window.data.COMMENTS[window.util.getRandomBetween(0, window.data.COMMENTS.length - 1)];
    return contentComments;
  };

  var getFullComment = function () {
    var fullComment = {
      message: getContent(),
      name: window.guest.getName(),
      avatar: window.guest.getAvatar()
    };
    return fullComment;
  };

  var getPictureComments = function () {
    var pictureComments = [];
    var randomQuantityComments = window.util.getRandomBetween(COMMENTS_MIN, COMMENTS_MAX);
    for (var i = 0; i < randomQuantityComments; i++) {
      pictureComments[i] = getFullComment();
    }
    return pictureComments;
  };

  window.comments = {
    getPictureComments: getPictureComments
  };

})();
