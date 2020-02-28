'use strict';

(function () {

  var PICTURE_LIST = document.querySelectorAll('.picture');

  var BIG_PICTURE = document.querySelector('.big-picture');
  var PICTURE_COMMENT = BIG_PICTURE.querySelector('.social__footer-text');
  var SOCIAL_TEXT_LIST = BIG_PICTURE.querySelectorAll('.social__text');
  var CLOSE_BUTTON = BIG_PICTURE.querySelector('.big-picture__cancel');

  var onBigPictureEscPress = function (evt) {
    if (evt.key === window.util.ESC_KEY && PICTURE_COMMENT !== document.activeElement) {
      closeBigPicture();
    }
  };

  var closeBigPicture = function () {
    BIG_PICTURE.classList.add('hidden');
    document.removeEventListener('keydown', onBigPictureEscPress);
  };

  var onPicturePress = function (item, image) {

    var openPicture = function (evt) {
      evt.preventDefault();
      document.querySelector('body').classList.add('modal-open');
      BIG_PICTURE.classList.remove('hidden');
      BIG_PICTURE.querySelector('.big-picture__img img').src = image.url;
      BIG_PICTURE.querySelector('.likes-count').textContent = image.likes;
      BIG_PICTURE.querySelector('.social__caption').textContent = image.description;
      for (var i = 0; i < SOCIAL_TEXT_LIST.length; i++) {
        SOCIAL_TEXT_LIST[i].textContent = image.comments[i];
      }
      // временно скрыто согласно заданию
      BIG_PICTURE.querySelector('.social__comments-loader').classList.add('hidden');
      BIG_PICTURE.querySelector('.social__comment-count').classList.add('hidden');

      // закрытие картинки ESC
      document.addEventListener('keydown', onBigPictureEscPress);
    };

    item.addEventListener('click', openPicture);
  };

  (function () {
    for (var i = 0; i < PICTURE_LIST.length; i++) {
      onPicturePress(PICTURE_LIST[i], window.pictures.items[i]);
    }
  })();

  CLOSE_BUTTON.addEventListener('click', closeBigPicture);
})();
