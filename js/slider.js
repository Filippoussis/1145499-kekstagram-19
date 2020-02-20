'use strict';

(function () {
  var formEditPicture = document.querySelector('.img-upload__overlay');
  var imagePreview = formEditPicture.querySelector('.img-upload__preview img');
  var levelPinValue = document.querySelector('.effect-level__value');
  var linePin = document.querySelector('.effect-level__line');
  var levelPin = document.querySelector('.effect-level__pin');
  var levelDepth = document.querySelector('.effect-level__depth');
  var MAX_BLUR = 3;
  var MIN_BRIGHTNESS = 1;
  var MAX_BRIGHTNESS = 3;

  levelPin.addEventListener('mousedown', function (evt) {
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

      var newX = levelPin.offsetLeft - shift.x;

      if (newX < 0) {
        newX = 0;
      }

      if (newX > linePin.offsetWidth) {
        newX = linePin.offsetWidth;
      }

      levelPin.style.left = (newX) + 'px';

      var koef = newX / linePin.offsetWidth;
      levelPinValue.value = Math.round(koef * 100);

      levelDepth.style.width = koef * 100 + '%';

      if (imagePreview.className === 'effects__preview--chrome') {
        imagePreview.style.filter = 'grayscale(' + koef + ')';
      } else if (imagePreview.className === 'effects__preview--sepia') {
        imagePreview.style.filter = 'sepia(' + koef + ')';
      } else if (imagePreview.className === 'effects__preview--marvin') {
        imagePreview.style.filter = 'invert(' + koef + ')';
      } else if (imagePreview.className === 'effects__preview--phobos') {
        imagePreview.style.filter = 'blur(' + koef * MAX_BLUR + 'px)';
      } else if (imagePreview.className === 'effects__preview--heat') {
        imagePreview.style.filter = 'brightness(' + (MIN_BRIGHTNESS + koef * (MAX_BRIGHTNESS - 1)) + ')';
      }
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
