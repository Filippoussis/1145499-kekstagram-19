'use strict';
(function () {

  var FORM_SEND_PICTURE = document.querySelector('.img-upload__form');
  var FORM_EDIT_PICTURE = FORM_SEND_PICTURE.querySelector('.img-upload__overlay');
  var COMMENTS = FORM_EDIT_PICTURE.querySelector('.text__description');
  var HASHTAGS = FORM_EDIT_PICTURE.querySelector('.text__hashtags');
  var CLOSE_BUTTON = FORM_EDIT_PICTURE.querySelector('#upload-cancel');

  var UPLOAD_FILE = document.querySelector('#upload-file');

  var onFormSend = function (evt) {
    evt.preventDefault();
  };

  var onFormEscPress = function (evt) {
    if (evt.key === window.util.ESC_KEY && COMMENTS !== document.activeElement && HASHTAGS !== document.activeElement) {
      closeForm();
    }
  };

  var openForm = function () {
    FORM_EDIT_PICTURE.classList.remove('hidden');
    window.effects.set();
    document.addEventListener('keydown', onFormEscPress);
  };

  var closeForm = function () {
    FORM_EDIT_PICTURE.classList.add('hidden');
    document.removeEventListener('keydown', onFormEscPress);
    UPLOAD_FILE.value = '';
  };

  UPLOAD_FILE.addEventListener('change', openForm);
  FORM_SEND_PICTURE.addEventListener('submit', onFormSend);
  CLOSE_BUTTON.addEventListener('click', closeForm);

})();
