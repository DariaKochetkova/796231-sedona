var button = document.querySelector(".button-find-hotel");

var form = document.querySelector(".searching-form");

var checkin = form.querySelector("[name=check-in-date]");
var checkout = form.querySelector("[name=check-out-date]");
var adults = form.querySelector("[name=adults]");
var kids = form.querySelector("[name=kids]");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("check-in-date");
  storage = localStorage.getItem("check-out-date");
  storage = localStorage.getItem("adults");
  storage = localStorage.getItem("kids");
} catch (err) {
  isStorageSupport = false;
}

button.addEventListener("click", function (evt) {
  evt.preventDefault();
  form.classList.toggle("form-show");
  checkin.focus();
});
form.addEventListener("submit", function (evt) {
  if (!checkin.value || !checkout.value || !adults.value || !kids.value) {
    evt.preventDefault();
    form.classList.remove("form-error");
    form.offsetWidth = form.offsetWidth;
    form.classList.add("form-error");
    console.log("Нужно заполнить все поля");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("check-in-date", checkin.value);
        localStorage.setItem("check-out-date", checkout.value);
        localStorage.setItem("adults", adults.value);
        localStorage.setItem("kids", kids.value);
    }
  }
});
