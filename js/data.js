'use strict';
(function () {

  var URL = 'https://js.dump.academy/kekstagram/data';

  var StatusCode = {
    OK: 200
  };

  var getData = function (gallery) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    var getGallery = function () {
      if (xhr.status === StatusCode.OK) {
        gallery(xhr.response);
      }
    };

    xhr.addEventListener('load', getGallery);

    xhr.open('GET', URL);
    xhr.send();

  };

  window.data = {
    get: getData
  };

})();
