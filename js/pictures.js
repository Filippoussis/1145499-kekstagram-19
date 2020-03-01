'use strict';
(function () {

  var PICTURES_COUNT = 25;

  var getPictures = function () {

    var pictures = [];
    for (var i = 0; i < PICTURES_COUNT; i++) {

      pictures[i] = {
        url: 'photos/' + (i + 1) + '.jpg',
        description: window.data.DESCRIPTIONS[i],
        likes: window.guest.getLikes(),
        comments: window.comments.getPictureComments()
      };
    }
    return pictures;
  };

  window.pictures = {
    getPictures: getPictures()
  };

})();
