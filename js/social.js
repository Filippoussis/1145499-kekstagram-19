'use strict';
(function () {

  var getCloneComment = function (item, index) {

    var commentTemplate = document.querySelector('#comment').content;
    var cloneComment = commentTemplate.cloneNode(true);

    cloneComment.querySelector('.social__picture').src = window.pictures.getPictures[item].comments[index].avatar;
    cloneComment.querySelector('.social__picture').alt = window.pictures.getPictures[item].comments[index].name;
    cloneComment.querySelector('.social__text').textContent = window.pictures.getPictures[item].comments[index].message;

    return cloneComment;
  };

  var getComments = function (item) {

    var fragment = document.createDocumentFragment();
    for (var i = 0; i < window.pictures.getPictures[item].comments.length; i++) {

      fragment.appendChild(getCloneComment(item, i));
    }
    return fragment;
  };

  window.social = {
    getComments: getComments
  };

})();
