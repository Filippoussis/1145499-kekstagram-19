'use strict';
(function () {

  var FORM_EDIT_PICTURE = document.querySelector('.img-upload__overlay');

  var EFFECTS = FORM_EDIT_PICTURE.querySelector('.effects');
  var CONTROLS_LIST = EFFECTS.querySelectorAll('.effects__radio');

  var EFFECT_LEVEL = FORM_EDIT_PICTURE.querySelector('.effect-level');
  var EFFECT_LEVEL_PIN = EFFECT_LEVEL.querySelector('.effect-level__pin');
  var EFFECT_LEVEL_DEPTH = EFFECT_LEVEL.querySelector('.effect-level__depth');

  var IMAGE_PREVIEW = FORM_EDIT_PICTURE.querySelector('.img-upload__preview img');

  var setEffect = function (control) {

    var getNewEffect = function () {

      var newEffect = 'effects__preview--' + control.value;

      if (control.value !== 'none') {
        EFFECT_LEVEL.classList.remove('hidden');
      } else {
        EFFECT_LEVEL.classList.add('hidden');
      }

      IMAGE_PREVIEW.className = newEffect;
      IMAGE_PREVIEW.style.filter = '';
      EFFECT_LEVEL_PIN.style.left = '';
      EFFECT_LEVEL_DEPTH.style.width = '';
    };

    control.addEventListener('change', getNewEffect);
  };

  (function () {
    for (var i = 0; i < CONTROLS_LIST.length; i++) {
      setEffect(CONTROLS_LIST[i]);
    }
  })();

})();
