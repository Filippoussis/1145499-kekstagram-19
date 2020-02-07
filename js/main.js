'use strict';

var PICTURES = 25;
var LIKES_MIN = 15;
var LIKES_MAX = 200;
var PICTURE_COMMENTS_MAX = 2;

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
  'Девушка с распцщенной косой',
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

for (var i = 0; i < PICTURES; i++) {
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

var bigPicture = document.querySelector('.big-picture');
bigPicture.classList.remove('hidden');
document.querySelector('body').classList.add('modal-open');
bigPicture.querySelector('.social__comments-loader').classList.add('hidden');
bigPicture.querySelector('.social__comment-count').classList.add('hidden');

bigPicture.querySelector('.big-picture__img img').src = pictures[0].url;
bigPicture.querySelector('.likes-count').textContent = pictures[0].likes;
bigPicture.querySelector('.social__caption').textContent = pictures[0].description;

var socialText = bigPicture.querySelectorAll('.social__text');
for (var b = 0; b < socialText.length; b++) {
  socialText[b].textContent = pictures[0].comments[b];
}

bigPicture.querySelector('.comments-count').textContent = socialText.length;
