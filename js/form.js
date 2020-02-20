'use strict';

(function () {
  var formEditPicture = document.querySelector('.img-upload__overlay');
  var uploadFile = document.querySelector('#upload-file');
  var closeButton = formEditPicture.querySelector('#upload-cancel');
  var formComments = document.querySelector('.text__description');
  var formHashtags = document.querySelector('.text__hashtags');

  var onFormEscPress = function (evt) {
    if (evt.key === window.util.ESC_KEY && formComments !== document.activeElement && formHashtags !== document.activeElement) {
      closeForm();
    }
  };

  var openForm = function () {
    formEditPicture.classList.remove('hidden');
    document.addEventListener('keydown', onFormEscPress);
  };

  var closeForm = function () {
    formEditPicture.classList.add('hidden');
    document.removeEventListener('keydown', onFormEscPress);
    uploadFile.value = '';
  };

  uploadFile.addEventListener('change', openForm);
  closeButton.addEventListener('click', closeForm);
})();
