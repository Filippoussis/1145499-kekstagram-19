'use strict';

(function () {
  var effects = document.querySelector('.effects');
  var controls = effects.querySelectorAll('.effects__radio');
  var effectLevel = document.querySelector('.effect-level');
  var formEditPicture = document.querySelector('.img-upload__overlay');
  var imagePreview = formEditPicture.querySelector('.img-upload__preview img');
  var levelPin = document.querySelector('.effect-level__pin');
  var levelDepth = document.querySelector('.effect-level__depth');

  var changeEffect = function (control) {

    control.addEventListener('change', function () {
      var newEffect = 'effects__preview--' + control.value;
      if (control.value !== 'none') {
        effectLevel.classList.remove('hidden');
      } else {
        effectLevel.classList.add('hidden');
      }
      imagePreview.className = newEffect;
      imagePreview.style.filter = '';
      levelPin.style.left = '';
      levelDepth.style.width = '';
    });
  };

  for (var z = 0; z < controls.length; z++) {
    changeEffect(controls[z]);
  }
})();
