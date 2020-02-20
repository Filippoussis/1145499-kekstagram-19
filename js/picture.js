'use strict';

(function () {
  var bigPicture = document.querySelector('.big-picture');
  var pictureItem = document.querySelectorAll('.picture');
  var bigPictureComment = bigPicture.querySelector('.social__footer-text');
  var closeButtonBigPicture = bigPicture.querySelector('.big-picture__cancel');

  var onBigPictureEscPress = function (evt) {
    if (evt.key === window.util.ESC_KEY && bigPictureComment !== document.activeElement) {
      closeBigPicture();
    }
  };

  var closeBigPicture = function () {
    bigPicture.classList.add('hidden');
    document.removeEventListener('keydown', onBigPictureEscPress);
  };

  closeButtonBigPicture.addEventListener('click', closeBigPicture);

  var openBigPicture = function (item, picture) {

    item.addEventListener('click', function (evt) {
      evt.preventDefault();
      document.querySelector('body').classList.add('modal-open');
      bigPicture.classList.remove('hidden');
      bigPicture.querySelector('.big-picture__img img').src = picture.url;
      bigPicture.querySelector('.likes-count').textContent = picture.likes;
      bigPicture.querySelector('.social__caption').textContent = picture.description;
      bigPicture.querySelector('.social__comments-loader').classList.add('hidden');
      bigPicture.querySelector('.social__comment-count').classList.add('hidden');

      var socialText = bigPicture.querySelectorAll('.social__text');
      bigPicture.querySelector('.comments-count').textContent = socialText.length;
      for (var b = 0; b < socialText.length; b++) {
        socialText[b].textContent = picture.comments[b];
      }

      document.addEventListener('keydown', onBigPictureEscPress);
    });
  };

  for (var w = 0; w < pictureItem.length; w++) {
    openBigPicture(pictureItem[w], window.gallery.pictures[w]);
  }
})();
