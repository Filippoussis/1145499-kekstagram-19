'use strict';

var PICTURES_COUNT = 25;
var LIKES_MIN = 15;
var LIKES_MAX = 200;
var PICTURE_COMMENTS_MAX = 2;
var ESC_KEY = 'Escape';

var COMMENTS = [
  'Настоящая леди не выставляет грудь напоказ до обеда.',
  'Нервный, застенчивый и добропорядочный. Уж паршивее качеств для мужчины не придумаешь.',
  'Ну почему, чтобы заполучить мужа, нужно строить из себя дуру?',
  'Еще один такой танец, и моя репутация погибнет навсегда.',
  'Еще не родился тот мужчина, которого бы испугалась хоть одна настоящая женщина.',
  'Если вы ничего плохого не делаете, то лишь потому, что вам не представилось возможности.',
  'За опыт, как говорится, сколько ни заплати — не переплатишь.',
  'Никогда не полагайтесь на доброе утро и улыбку вашей свекрови.',
  'Глупцы всегда говорят дольше.',
  'И швец, и жнец, и на дуде игрец.',
  'Не учи ученого.',
  'Не лыком шит.',
  'Одного поля ягоды.',
  'Волка ноги кормят.',
  'Куй железо, пока горячо.',
  'Будешь много знать — скоро состаришься.',
  'В гостях хорошо, а дома лучше.',
  'Язык без костей.',
  'Нет дыма без огня.',
  'Не в бровь, а в глаз.',
  'Кашу маслом не испортишь.',
  'Без царя в голове.',
  'Бумага все терпит.',
  'Взялся за гуж — не говори, что не дюж.',
  'Нет худа без добра.'
];

var DESCRIPTIONS = [
  'Грачи прилетели',
  'Лунная ночь на Днепре',
  'Утро в сосновом лесу',
  'Девочка с персиками',
  'Витязь на распутье',
  'Охотники на привале',
  'Буря на море ночью',
  'Мостик. Саввинская слобода',
  'Переход Суворова через Альпы',
  'Девушка с распущенной косой',
  'Портрет Александра Пушкина',
  'Наполеон на Бородинских высотах',
  'Бурлаки на Волге',
  'Свидание',
  'Мартовское солнце',
  'Купание красного коня',
  'Свобода, ведущая народ',
  'Впечатление. Восходящее солнце',
  'Девушка с жемчужной серёжкой',
  'Последний день Помпеи',
  'Девочка на шаре',
  'Сикстинская мадонна',
  'Ночной дозор',
  'Видение отроку Варфоломею',
  'Турецкие бани'
];

var picturesList = document.querySelector('.pictures');
var pictureTemplate = document.querySelector('#picture').content;

var fragment = document.createDocumentFragment();

var renderPicture = function (picture) {
  var pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = picture.url;
  pictureElement.querySelector('.picture__img').alt = picture.description;
  pictureElement.querySelector('.picture__likes').textContent = picture.likes;
  pictureElement.querySelector('.picture__comments').textContent = picture.comments;
  return pictureElement;
};

var rundomInteger = function (min, max) {
  // случайное число от min до (max включительно)
  var rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

var rundomQuantityComments = function () {
  var pictureComments = [];
  for (var a = 0; a < PICTURE_COMMENTS_MAX; a++) {
    pictureComments[a] = COMMENTS[rundomInteger(0, COMMENTS.length - 1)];
  }
  return pictureComments;
};

var pictures = [];

for (var i = 0; i < PICTURES_COUNT; i++) {
  var j = i + 1;

  pictures[i] = {
    url: 'photos/' + j + '.jpg',
    description: DESCRIPTIONS[i],
    likes: rundomInteger(LIKES_MIN, LIKES_MAX),
    comments: rundomQuantityComments()
  };

  fragment.appendChild(renderPicture(pictures[i]));
}

picturesList.appendChild(fragment);

// Раздел 4. Обработка событий. Глава 9. Личный проект: доверяй, но проверяй (часть 1)

var formEditPicture = document.querySelector('.img-upload__overlay');
var uploadFile = document.querySelector('#upload-file');
var closeButton = formEditPicture.querySelector('#upload-cancel');
var formComments = document.querySelector('.text__description');
var formHashtags = document.querySelector('.text__hashtags');

var onFormEscPress = function (evt) {
  if (evt.key === ESC_KEY && formComments !== document.activeElement && formHashtags !== document.activeElement) {
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

// 4.1 Изменение размера изображения

var scalePicture = document.querySelector('.scale');
var buttonMinus = scalePicture.querySelector('.scale__control--smaller');
var buttonPlus = scalePicture.querySelector('.scale__control--bigger');
var scaleValue = scalePicture.querySelector('.scale__control--value');
var imagePreview = formEditPicture.querySelector('.img-upload__preview img');
var DEFAULT_SCALE = 100;
var MAX_SCALE = 100;
var MIN_SCALE = 25;
var STEP_SCALE = 25;
var currentValue = DEFAULT_SCALE;

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

// 4.2 Перетаскивание

var levelPinValue = document.querySelector('.effect-level__value');
var linePin = document.querySelector('.effect-level__line');
var levelPin = document.querySelector('.effect-level__pin');
var levelDepth = document.querySelector('.effect-level__depth');
var MAX_BLUR = 3;
var MIN_BRIGHTNESS = 1;
var MAX_BRIGHTNESS = 2;

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
    }

    if (imagePreview.className === 'effects__preview--sepia') {
      imagePreview.style.filter = 'sepia(' + koef + ')';
    }

    if (imagePreview.className === 'effects__preview--marvin') {
      imagePreview.style.filter = 'invert(' + koef + ')';
    }

    if (imagePreview.className === 'effects__preview--phobos') {
      imagePreview.style.filter = 'blur(' + koef * MAX_BLUR + 'px)';
    }

    if (imagePreview.className === 'effects__preview--heat') {
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

// 4.3 Наложение эффекта на изображение

var effects = document.querySelector('.effects');
var controls = effects.querySelectorAll('.effects__radio');
var effectLevel = document.querySelector('.effect-level');


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

// 4.4 Валидация хэш-тегов

formHashtags.addEventListener('input', function (evt) {
  var target = evt.target;
  var targetValue = target.value;
  var arr = targetValue.split(' ');
  var arrLetter = [];

  for (var x = 0; x < arr.length; x++) {
    arrLetter[x] = arr[x].split('');
  }

  var arrLetterFilter = arrLetter.filter(function (elem) {
    if (elem.indexOf('#') === 0) {
      return true;
    } else {
      return false;
    }
  });

  if (arrLetterFilter.length !== arrLetter.length) {
    target.setCustomValidity('Хеш-тег должен начинаться с символа #');
  } else {
    target.setCustomValidity('');
  }

  if (arr.length > 3) {
    target.setCustomValidity('Не более 3 хеш-тегов. Пробел в конце последнего не ставится');
  }
});

// Раздел 4. Обработка событий. Глава 9. Личный проект: доверяй, но проверяй (часть 2)

var bigPicture = document.querySelector('.big-picture');
var pictureItem = document.querySelectorAll('.picture');
var bigPictureComment = bigPicture.querySelector('.social__footer-text');
var closeButtonBigPicture = bigPicture.querySelector('.big-picture__cancel');

var onBigPictureEscPress = function (evt) {
  if (evt.key === ESC_KEY && bigPictureComment !== document.activeElement) {
    closeBigPicture();
  }
};

var closeBigPicture = function () {
  bigPicture.classList.add('hidden');
  document.removeEventListener('keydown', onBigPictureEscPress);
};

closeButtonBigPicture.addEventListener('click', closeBigPicture);

var openBigPicture = function (item, picture) {

  item.addEventListener('click', function (evt) {
    evt.preventDefault();
    document.querySelector('body').classList.add('modal-open');
    bigPicture.classList.remove('hidden');
    bigPicture.querySelector('.big-picture__img img').src = picture.url;
    bigPicture.querySelector('.likes-count').textContent = picture.likes;
    bigPicture.querySelector('.social__caption').textContent = picture.description;
    bigPicture.querySelector('.social__comments-loader').classList.add('hidden');
    bigPicture.querySelector('.social__comment-count').classList.add('hidden');

    var socialText = bigPicture.querySelectorAll('.social__text');
    bigPicture.querySelector('.comments-count').textContent = socialText.length;
    for (var b = 0; b < socialText.length; b++) {
      socialText[b].textContent = picture.comments[b];
    }

    document.addEventListener('keydown', onBigPictureEscPress);
  });
};

for (var w = 0; w < pictureItem.length; w++) {
  openBigPicture(pictureItem[w], pictures[w]);
}
