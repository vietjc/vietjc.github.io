'use strict';

window.onload = () => {
  'use strict';

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('./serviceWorker.js');
  }
}

var constraints = {
  video: true
};

var video = document.querySelector('video');

function handleSuccess(stream) {
  window.stream = stream; // only to make stream available to console
  video.srcObject = stream;
}

function handleError(error) {
  console.log('getUserMedia error: ', error);
}

//navigator.mediaDevices.getUserMedia(constraints).then(handleSuccess).catch(handleError);
navigator.getUserMedia = (navigator.getUserMedia ||
    navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia ||
    navigator.msGetUserMedia ||
    false);
navigator.getUserMedia({ video: true, audio: false }, handleSuccess, handleError);