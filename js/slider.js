'use strict';

(function () {

  var MAX_BLUR = 3;
  var MIN_BRIGHTNESS = 1;
  var MAX_BRIGHTNESS = 3;

  var FORM_EDIT_PICTURE = document.querySelector('.img-upload__overlay');
  var IMAGE_PREVIEW = FORM_EDIT_PICTURE.querySelector('.img-upload__preview img');

  var EFFECT_LEVEL = FORM_EDIT_PICTURE.querySelector('.effect-level');

  var EFFECT_LEVEL_PIN = EFFECT_LEVEL.querySelector('.effect-level__pin');
  var EFFECT_LEVEL_DEPTH = EFFECT_LEVEL.querySelector('.effect-level__depth');

  var EFFECT_LEVEL_VALUE = EFFECT_LEVEL.querySelector('.effect-level__value');
  var EFFECT_LEVEL_LINE = EFFECT_LEVEL.querySelector('.effect-level__line');


  EFFECT_LEVEL_PIN.addEventListener('mousedown', function (evt) {
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

      var classEffect = {
        'effects__preview--chrome': 'grayscale(' + koef + ')',
        'effects__preview--sepia': 'sepia(' + koef + ')',
        'effects__preview--marvin': 'invert(' + koef + ')',
        'effects__preview--phobos': 'blur(' + koef * MAX_BLUR + 'px)',
        'effects__preview--heat': 'brightness(' + (MIN_BRIGHTNESS + koef * (MAX_BRIGHTNESS - 1)) + ')'
      };

      IMAGE_PREVIEW.style.filter = classEffect[IMAGE_PREVIEW.className];
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });
})();
