var sliderButtons = document.querySelectorAll('.indicator-button');
var slides = document.querySelectorAll('.slide');

var popupBtn = document.querySelector('.feedback-button');
var popup = document.querySelector('.pop-up');
var close = document.querySelector('.close-popup');

var login = popup.querySelector('[name=name]');
var form = popup.querySelector('form');
var mail = popup.querySelector('[name=email]');
var textarea = popup.querySelector('[name=message]');

var isStorageSupport = true;
var storage = '';

if(slides){
  for(let i = 0; i < sliderButtons.length; i++) {
    sliderButtons[i].addEventListener('click', function(evt){
      slides[i].classList.add('current-slide');
      sliderButtons[i].classList.add('current-btn');
      for (let j = 0; j < slides.length; j++) {
        if (j !== i) {
          slides[j].classList.remove('current-slide');
          sliderButtons[j].classList.remove('current-btn');
        }
      }
    })  
  }
  
}

//   popup

try {
  storage = localStorage.getItem('login');
} catch (err) {
  isStorageSupport = false;
}

popupBtn.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.add('show-pop-up');
  popup.classList.remove('hide');
  if (storage) {
    login.value = storage;
    mail.focus();
  } else {
    login.focus();
  }
})

close.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.add('hide');
  popup.classList.remove('error');

  setTimeout(function () {
    popup.classList.remove('show-pop-up');
  }, 500);

})

form.addEventListener('submit', function (evt) {
  if (!login.value || !mail.value || !textarea.value) {
    evt.preventDefault();
    popup.classList.remove('error');
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add('error');
  } else {
    if (isStorageSupport) {
      localStorage.setItem('login', login.value);
    }
  }
})

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains('show-pop-up')) {
      popup.classList.add('hide');
      popup.classList.remove('error');
      setTimeout(function () {
        popup.classList.remove('show-pop-up');
      }, 500);
    }
  }
});
