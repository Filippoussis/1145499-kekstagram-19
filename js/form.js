'use strict';
(function () {

  var FORM_EDIT_PICTURE = document.querySelector('.img-upload__overlay');
  var COMMENTS = FORM_EDIT_PICTURE.querySelector('.text__description');
  var HASHTAGS = FORM_EDIT_PICTURE.querySelector('.text__hashtags');
  var CLOSE_BUTTON = FORM_EDIT_PICTURE.querySelector('#upload-cancel');

  var UPLOAD_FILE = document.querySelector('#upload-file');

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
  CLOSE_BUTTON.addEventListener('click', closeForm);

})();
