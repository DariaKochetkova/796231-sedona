var button=document.querySelector(".button-find-hotel"),form=document.querySelector(".searching-form"),checkin=form.querySelector("[name=check-in-date]"),checkout=form.querySelector("[name=check-out-date]"),adults=form.querySelector("[name=adults]"),kids=form.querySelector("[name=kids]"),isStorageSupport=!0,storage="";try{storage=localStorage.getItem("check-in-date"),storage=localStorage.getItem("check-out-date"),storage=localStorage.getItem("adults"),storage=localStorage.getItem("kids")}catch(e){isStorageSupport=!1}button.addEventListener("click",function(e){e.preventDefault(),form.classList.toggle("form-show"),checkin.focus()}),form.addEventListener("submit",function(e){checkin.value&&checkout.value&&adults.value&&kids.value?isStorageSupport&&(localStorage.setItem("check-in-date",checkin.value),localStorage.setItem("check-out-date",checkout.value),localStorage.setItem("adults",adults.value),localStorage.setItem("kids",kids.value)):(e.preventDefault(),form.classList.remove("form-error"),form.offsetWidth=form.offsetWidth,form.classList.add("form-error"),console.log("Нужно заполнить все поля"))});
