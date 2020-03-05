'use strict';
(function () {

  var MAX_BLUR = 3;

  var Brightness = {
    MIN: 1,
    MAX: 3
  };

  var FORM_EDIT_PICTURE = document.querySelector('.img-upload__overlay');
  var IMAGE_PREVIEW = FORM_EDIT_PICTURE.querySelector('.img-upload__preview img');

  var EFFECT_LEVEL = FORM_EDIT_PICTURE.querySelector('.effect-level');

  var EFFECT_LEVEL_PIN = EFFECT_LEVEL.querySelector('.effect-level__pin');
  var EFFECT_LEVEL_DEPTH = EFFECT_LEVEL.querySelector('.effect-level__depth');

  var EFFECT_LEVEL_VALUE = EFFECT_LEVEL.querySelector('.effect-level__value');
  var EFFECT_LEVEL_LINE = EFFECT_LEVEL.querySelector('.effect-level__line');

  var getGrayscaleValue = function (koef) {
    return 'grayscale(' + koef + ')';
  };

  var getSepiaValue = function (koef) {
    return 'sepia(' + koef + ')';
  };

  var getInvertValue = function (koef) {
    return 'invert(' + koef + ')';
  };

  var getBlurValue = function (koef) {
    return 'blur(' + koef * MAX_BLUR + 'px)';
  };

  var getBrightnessValue = function (koef) {
    return 'brightness(' + (Brightness.MIN + koef * (Brightness.MAX - 1)) + ')';
  };

  var getEffectValue = function (koef) {
    var classEffect = {
      'effects__preview--chrome': getGrayscaleValue(koef),
      'effects__preview--sepia': getSepiaValue(koef),
      'effects__preview--marvin': getInvertValue(koef),
      'effects__preview--phobos': getBlurValue(koef),
      'effects__preview--heat': getBrightnessValue(koef)
    };
    return classEffect[IMAGE_PREVIEW.className];
  };


  var onMouseDown = function (evt) {
    evt.preventDefault();
    var startCoords = {
      x: evt.clientX
    };

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();

      var shift = {
        x: startCoords.x - moveEvt.clientX
      };

      startCoords = {
        x: moveEvt.clientX
      };

      var newX = EFFECT_LEVEL_PIN.offsetLeft - shift.x;

      if (newX < 0) {
        newX = 0;
      }

      if (newX > EFFECT_LEVEL_LINE.offsetWidth) {
        newX = EFFECT_LEVEL_LINE.offsetWidth;
      }

      EFFECT_LEVEL_PIN.style.left = (newX) + 'px';

      var koef = newX / EFFECT_LEVEL_LINE.offsetWidth;
      EFFECT_LEVEL_VALUE.value = Math.round(koef * 100);

      EFFECT_LEVEL_DEPTH.style.width = koef * 100 + '%';

      IMAGE_PREVIEW.style.filter = getEffectValue(koef);
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  };

  EFFECT_LEVEL_PIN.addEventListener('mousedown', onMouseDown);

})();
