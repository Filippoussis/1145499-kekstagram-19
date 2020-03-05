'use strict';
(function () {

  var BIG_PICTURE = document.querySelector('.big-picture');
  var PICTURE_COMMENT = BIG_PICTURE.querySelector('.social__footer-text');
  var CLOSE_BUTTON = BIG_PICTURE.querySelector('.big-picture__cancel');

  var PREVIEW_PHOTO = BIG_PICTURE.querySelector('.big-picture__img img');
  var PREVIEW_PHOTO_DESCRIPTION = BIG_PICTURE.querySelector('.social__caption');
  var PREVIEW_PHOTO_LIKES = BIG_PICTURE.querySelector('.likes-count');

  var SOCIAL_COMMENTS = document.querySelector('.social__comments');

  var SOCIAL_COMMENT_COUNT = BIG_PICTURE.querySelector('.social__comment-count');
  var COMMENTS_LOADER = BIG_PICTURE.querySelector('.social__comments-loader');

  var onBigPictureEscPress = function (evt) {
    if (evt.key === window.util.ESC_KEY && PICTURE_COMMENT !== document.activeElement) {
      closeBigPicture();
    }
  };

  var closeBigPicture = function () {
    BIG_PICTURE.classList.add('hidden');
    document.removeEventListener('keydown', onBigPictureEscPress);
    SOCIAL_COMMENTS.textContent = '';
  };

  var onPicturePress = function (nodeItem, item) {

    var openPicture = function (evt) {
      evt.preventDefault();

      BIG_PICTURE.classList.remove('hidden');
      PREVIEW_PHOTO.src = item.url;
      PREVIEW_PHOTO.alt = item.description;
      PREVIEW_PHOTO_DESCRIPTION.textContent = item.description;
      PREVIEW_PHOTO_LIKES.textContent = item.likes;

      SOCIAL_COMMENTS.appendChild(window.social.renderComments(item));

      document.addEventListener('keydown', onBigPictureEscPress);

      // временно по заданию скрываем счетчик и загручик
      SOCIAL_COMMENT_COUNT.classList.add('hidden');
      COMMENTS_LOADER.classList.add('hidden');
    };

    nodeItem.addEventListener('click', openPicture);
  };

  var setPicture = function (pictureNodeList, pictures) {
    for (var i = 0; i < pictureNodeList.length; i++) {
      onPicturePress(pictureNodeList[i], pictures[i]);
    }
  };

  CLOSE_BUTTON.addEventListener('click', closeBigPicture);

  window.preview = {
    set: setPicture
  };

})();
