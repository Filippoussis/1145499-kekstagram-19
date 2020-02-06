'use strict';

var PICTURES = 25;
var LIKES_MIN = 15;
var LIKES_MAX = 200;

var COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
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

var pictures = [];

for (var i = 0; i < PICTURES; i++) {
  var j = i + 1;

  pictures[i] = {
    url: 'photos/' + j + '.jpg',
    description: 'Описание фотографии №' + j,
    likes: rundomInteger(LIKES_MIN, LIKES_MAX),
    comments: COMMENTS[rundomInteger(0, COMMENTS.length - 1)]
  };

  fragment.appendChild(renderPicture(pictures[i]));
}

picturesList.appendChild(fragment);


