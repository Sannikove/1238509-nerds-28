var btnFirst = document.querySelector('.indicator-button:first-child');
var btnSecond = document.querySelector('.indicator-button:nth-child(2)');
var btnThird = document.querySelector('.indicator-button:nth-child(3)');

var firstSlide = document.querySelector('.first-slide');
var secondSlide = document.querySelector('.second-slide');
var thirdSlide = document.querySelector('.third-slide');

var popupBtn = document.querySelector('.feedback-button');
var popup = document.querySelector('.pop-up');
var close = document.querySelector('.close-popup');

var login = popup.querySelector("[name=name]");
var form = popup.querySelector("form");
var mail = popup.querySelector("[name=email]");

if (firstSlide) {
  btnFirst.addEventListener("click", function (evt) {
    evt.preventDefault();
    firstSlide.classList.add("current-slide");
    secondSlide.classList.remove("current-slide");
    thirdSlide.classList.remove("current-slide");

    btnFirst.classList.add("current-btn");
    btnSecond.classList.remove("current-btn");
    btnThird.classList.remove("current-btn");
  })
}

if (secondSlide) {
  btnSecond.addEventListener("click", function (evt) {
    evt.preventDefault();
    secondSlide.classList.add("current-slide");
    firstSlide.classList.remove("current-slide");
    thirdSlide.classList.remove("current-slide");

    btnFirst.classList.remove("current-btn");
    btnSecond.classList.add("current-btn");
    btnThird.classList.remove("current-btn");
  })
}

if (thirdSlide) {
  btnThird.addEventListener("click", function (evt) {
    evt.preventDefault();
    thirdSlide.classList.add("current-slide");
    firstSlide.classList.remove("current-slide");
    secondSlide.classList.remove("current-slide");

    btnFirst.classList.remove("current-btn");
    btnSecond.classList.remove("current-btn");
    btnThird.classList.add("current-btn");
  })
}


//   popup

try {
  storage = localStorage.getItem("login");
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
    if (storage) {
      login.value = storage;
    }
  }
})

close.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.add('hide');
  popup.classList.remove('error');

  setTimeout(function () {
    popup.classList.remove("show-pop-up");
  }, 600);

})

form.addEventListener("submit", function (evt) {
  if (!login.value || !mail.value) {
    evt.preventDefault();
    popup.classList.remove("error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("login", login.value);
    }
  }
})

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("show-pop-up")) {
      popup.classList.add("hide");
      popup.classList.remove("error");
      setTimeout(function () {
        popup.classList.remove("show-pop-up");
      }, 600);
    }
  }
});
