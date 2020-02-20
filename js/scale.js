'use strict';

(function () {
  var DEFAULT_SCALE = 100;
  var MAX_SCALE = 100;
  var MIN_SCALE = 25;
  var STEP_SCALE = 25;
  var currentValue = DEFAULT_SCALE;
  var scalePicture = document.querySelector('.scale');
  var buttonMinus = scalePicture.querySelector('.scale__control--smaller');
  var buttonPlus = scalePicture.querySelector('.scale__control--bigger');
  var scaleValue = scalePicture.querySelector('.scale__control--value');
  var formEditPicture = document.querySelector('.img-upload__overlay');
  var imagePreview = formEditPicture.querySelector('.img-upload__preview img');

  var changeScaleValue = function () {
    scaleValue.value = currentValue + '%';
    imagePreview.style.transform = 'scale(' + currentValue / 100 + ')';
  };

  buttonMinus.addEventListener('click', function () {

    if (currentValue > MIN_SCALE) {
      currentValue -= STEP_SCALE;
      changeScaleValue();
    }
  });

  buttonPlus.addEventListener('click', function () {

    if (currentValue < MAX_SCALE) {
      currentValue += STEP_SCALE;
      changeScaleValue();
    }
  });
})();
