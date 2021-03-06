'use strict';
(function () {

  var renderComment = function (picture, commentIndex) {

    var commentTemplate = document.querySelector('#comment').content;
    var cloneComment = commentTemplate.cloneNode(true);

    cloneComment.querySelector('.social__picture').src = picture.comments[commentIndex].avatar;
    cloneComment.querySelector('.social__picture').alt = picture.comments[commentIndex].name;
    cloneComment.querySelector('.social__text').textContent = picture.comments[commentIndex].message;

    return cloneComment;
  };

  var renderComments = function (picture) {

    var fragment = document.createDocumentFragment();
    for (var commentIndex = 0; commentIndex < picture.comments.length; commentIndex++) {
      fragment.appendChild(renderComment(picture, commentIndex));
    }
    return fragment;
  };

  window.social = {
    renderComments: renderComments
  };

})();
