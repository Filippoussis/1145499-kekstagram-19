'use strict';
(function () {

  var PICTURE_LIST = document.querySelectorAll('.picture');

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

  var onPicturePress = function (item, picture, index) {

    var openPicture = function (evt) {
      evt.preventDefault();
      document.querySelector('body').classList.add('modal-open');
      BIG_PICTURE.classList.remove('hidden');
      PREVIEW_PHOTO.src = picture.url;
      PREVIEW_PHOTO.alt = picture.description;
      PREVIEW_PHOTO_DESCRIPTION.textContent = picture.description;
      PREVIEW_PHOTO_LIKES.textContent = picture.likes;

      SOCIAL_COMMENTS.appendChild(window.social.getComments(index));

      document.addEventListener('keydown', onBigPictureEscPress);

      // временно по заданию скрываем счетчик и загручик
      SOCIAL_COMMENT_COUNT.classList.add('hidden');
      COMMENTS_LOADER.classList.add('hidden');
    };

    item.addEventListener('click', openPicture);
  };

  (function () {
    for (var i = 0; i < PICTURE_LIST.length; i++) {
      onPicturePress(PICTURE_LIST[i], window.pictures.getPictures[i], i);
    }
  })();

  CLOSE_BUTTON.addEventListener('click', closeBigPicture);

})();
