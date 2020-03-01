'use strict';
(function () {

  var Scale = {
    DEFAULT: 100,
    MAX: 100,
    MIN: 25,
    STEP: 25
  };

  var SCALE_IMAGE = document.querySelector('.scale');
  var BUTTON_MINUS = SCALE_IMAGE.querySelector('.scale__control--smaller');
  var BUTTON_PLUS = SCALE_IMAGE.querySelector('.scale__control--bigger');
  var SCALE_VALUE = SCALE_IMAGE.querySelector('.scale__control--value');

  var IMAGE_PREVIEW = document.querySelector('.img-upload__preview img');

  var currentValue = Scale.DEFAULT;

  var setScale = function () {
    SCALE_VALUE.value = currentValue + '%';
    IMAGE_PREVIEW.style.transform = 'scale(' + currentValue / 100 + ')';
  };

  var onButtonMinusPress = function () {
    if (currentValue > Scale.MIN) {
      currentValue -= Scale.STEP;
      setScale();
    }
  };

  var onButtonPlusPress = function () {
    if (currentValue < Scale.MAX) {
      currentValue += Scale.STEP;
      setScale();
    }
  };

  BUTTON_MINUS.addEventListener('click', onButtonMinusPress);
  BUTTON_PLUS.addEventListener('click', onButtonPlusPress);

})();
