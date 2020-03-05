'use strict';
(function () {

  var mockData = function (quantity, description, likes, comments) {

    var pictures = [];
    for (var i = 0; i < quantity; i++) {

      pictures[i] = {
        url: 'photos/' + (i + 1) + '.jpg',
        description: description[i],
        likes: likes(),
        comments: comments()
      };
    }
    return pictures;
  };

  window.pictures = {
    get: mockData
  };

})();
