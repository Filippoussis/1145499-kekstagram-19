'use strict';
(function () {

  var getFullComment = function (message, name, avatar) {
    var fullComment = {
      message: message(),
      name: name(),
      avatar: avatar()
    };
    return fullComment;
  };

  var getPictureComments = function (quantity, message, name, avatar) {
    var pictureComments = [];
    for (var i = 0; i < quantity(); i++) {
      pictureComments[i] = getFullComment(message, name, avatar);
    }
    return pictureComments;
  };

  window.comments = {
    get: getPictureComments
  };

})();
