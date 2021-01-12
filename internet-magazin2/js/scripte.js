"use strict";


/////////////Если много попап окон и вызываем второй попап из первого

const popupToggle = document.querySelectorAll(".open-popup");
const popupClose = document.querySelectorAll(".close");

popupToggle.forEach(function (item) {
  item.addEventListener("click", function (e) {
    e.preventDefault();
    const popupName = item.getAttribute("data-popup");
    document.getElementById(popupName).style.display = "block";
    //чтоб первый попап закрылся и не накладывались враперы и потом не пришлось отдельно закрывать первый попап
    const popup = item.closest(".modal-wrapper");
    popup.style.display = "none";
  });
});

popupClose.forEach(function (item) {
  item.addEventListener("click", function (e) {
    e.preventDefault();
    const popup = item.closest(".modal-wrapper");
    popup.style.display = "none";
  });
});
//при нажатии на область вокруг попапа закрывает все
//Но если пишу e.preventDefault(); то не работают все ссылки для перехода
window.addEventListener("click", function (e) {
  // e.preventDefault();
  if (e.target.classList.contains("modal-wrapper")) {
    e.target.style.display = "none";
  }
});

//////////////форма с валидацией

const values = {};
document.forms.registr.addEventListener("submit", function (e) {
  e.preventDefault();
  values.username = this.elements.username.value.trim();
  values.login = this.elements.login.value.trim();
  values.password = this.elements.password.value.trim();
  values.password2 = this.elements.password2.value.trim();

  if (values.username === "") {
    setErrorFor(this.elements.username, "Username cannot be blank");
  } else if (!isName(values.username)) {
    setErrorFor(this.elements.username, "Username must be only letter");
  } else {
    setSuccessFor(this.elements.username);
  }

  if (values.login === "") {
    setErrorFor(this.elements.login, "Login cannot be blank");
  } else if (!isLogin(values.login)) {
    setErrorFor(this.elements.login, "Login must be beetween 3 and 12 symbols");
  } else {
    setSuccessFor(this.elements.login);
  }

  if (values.password === "") {
    setErrorFor(this.elements.password, "Password cannot be blank");
  } else if (!isPassword(values.password)) {
    setErrorFor(
      this.elements.password,
      "Password must be beetween 5 and 20 symbols"
    );
  } else {
    setSuccessFor(this.elements.password);
  }

  if (values.password2 === "") {
    setErrorFor(this.elements.password2, "Password2 cannot be blank");
  } else if (values.password !== values.password2) {
    setErrorFor(this.elements.password2, "Password does not match");
  } else {
    setSuccessFor(this.elements.password2);
  }
});

function setErrorFor(input, message) {
  // const formControl = input.parentElement;
  const formControl = input.closest(".form-control"); //.form-control
  const small = formControl.querySelector("small");

  small.innerText = message;

  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  // const formControl = input.parentElement;
  const formControl = input.closest(".form-control");
  formControl.className = "form-control success";
}

function isLogin(login) {
  //проходят все буквы, цифры, символы, от 3до12 символов
  return /^[a-zA-Z0-9.\-_$@*!?+/]{3,12}$/g.test(login);
}
function isPassword(password) {
  //проходят все буквы, цифры от 5до20 символов
  return /^[a-zA-Z0-9]{5,20}$/g.test(password);
}
function isName(username) {
  //минимум 1 буква, без символов и цифр
  // (?=.*?[a-z]) - По крайней мере одна строчная буква
  return /^(?=.*[a-z])[a-zA-Z]{0,}$/.test(username);
}

//-----Корзина Пока не работает полностью
let cart = {
  art: {
    name: "Xuping",
    count: "3",
    price: "6",
  },
  art2: {
    name: "Gold",
    count: "5",
    price: "16",
  },
};

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("plus")) {
    //contains проверяет наличие класса у элемента и если это = true
    plusFunction(e.target.dataset.id); //то запаустить эту функцию
  }
  if (e.target.classList.contains("minus")) {
    minusFunction(e.target.dataset.id);
  }
});
//увеличение кол-ва товара
const plusFunction = (id) => {
  cart[id]["count"]++;
  renderCard();
};
//уменьшение кол-ва товара
const minusFunction = (id) => {
  if (cart[id]["count"] - 1 == 0) {
    delFunction(id);
    return true;
  }
  cart[id]["count"]--;
  renderCard();
};

const delFunction = (id) => {
  delete cart[id];
  renderCard();
};

const renderCard = () => {
  // console.log(cart);
};
renderCard();

// ----------slider

// $('.sales-slider').slick({
//     dots:true,
//     arrows:true,
//     slidesToShow: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
// });

//-------Search

// document.querySelector(".search-input").oninput = function() {
//     let val = this.value.trim();
//     let elasticItems = document.querySelectorAll(".elastic li");
//     if(val != "") {
//         elasticItems.forEach(function(elem) {
//             if(elem.innerText.search(val) == -1) {
//                 elem.classList.add("hide");
//                 elem.innerHTML = elem.innerText;
//             } else {
//                 elem.classList.remove("hide");
//                 let str = elem.innerText;
//                 elem.innerHTML = insertMark(str, elem.innerText.search(val), val.length);
//             }
//         });
//     } else {
//         elasticItems.forEach(function(elem) {
//             elem.classList.remove("hide");
//             elem.innerHTML = elem.innerText;
//         });
//     }
// }

// function insertMark(string, pos, len) {
//     return string.slice(0, pos) + '<mark>' + string.slice(pos, pos + len) + '</mark>' + string(pos + len);
// }

//--------------------Accordion

const accord = document.getElementsByClassName("accordion-block");

for (let i = 0; i < accord.length; i++) {
  accord[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}
