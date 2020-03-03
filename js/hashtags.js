'use strict';
(function () {

  var formHashtags = document.querySelector('.text__hashtags');
  formHashtags.addEventListener('input', function (evt) {
    var target = evt.target;
    var targetValue = target.value;
    var arr = targetValue.split(' ');

    var arrLetter = arr.map(function (elem) {
      return elem.split('');
    });

    var arrLetterFilter = arrLetter.filter(function (elem) {
      return elem.indexOf('#') === 0;
    });

    if (arrLetterFilter.length !== arrLetter.length) {
      target.setCustomValidity('Хеш-тег должен начинаться с символа #');
    } else {
      target.setCustomValidity('');
    }

    if (arr.length > 3) {
      target.setCustomValidity('Не более 3 хеш-тегов. Пробел в конце последнего не ставится');
      return;
    }
  });
})();
