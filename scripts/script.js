
document.getElementById("main-actions-button").onclick = function () {
    // не работает( не пойму почему, я реализовал переход по href: #products, но функция не работает, от этого нет и плавного перехода befavior, подскажите почему
    document.getElementById("products").scrollIntoView({behavior: "smooth"});
}

let links = document.querySelectorAll(".menu__item > a");

for (let i = 0; i < links.length; i++) {
    links[i].onclick = function () {
        document.getElementById(links[i].getAttribute("data-link")).scrollIntoView({behavior: "smooth"});
    }
}

let buttons = document.getElementsByClassName("products__button");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        document.getElementById("order").scrollIntoView({behavior: "smooth"});
    }
}

let burger = document.getElementById("burger")
let name = document.getElementById("name")
let phone = document.getElementById("phone")

document.getElementById("order-actions").onclick = function () {
    let hasError = false;

    [burger, name, phone].forEach(item => {
        if (!item.value) {
            item.parentElement.style.background = "red"
            hasError = true;
        } else {
            item.parentElement.style.background = ""
        }
    });

    if (!hasError) {
        [burger, name, phone].forEach(item => {
            item.value = "";
        });
        alert('Спасибо за заказ мы скоро свяжемся с вами, а здесь будет popup)')
        //добавить popup
    }
}

let prices = document.getElementsByClassName("products__item-price");

document.getElementById("change-currency").onclick = function (e) {
    let currentCurrency = e.target.innerText;

    let newCurrency = "$";
    let coefficient = 1;

    if(currentCurrency === "$") {
        newCurrency = "₽";
        coefficient = 76; //добавить курс валюты изменяющийся

    } else if (currentCurrency === "₽") {
        newCurrency = "BYN";
        coefficient = 3;
    } else if (currentCurrency === "BYN") {
        currentCurrency = "$";
        coefficient = 0.33;
    }
    e.target.innerText = newCurrency;

    for ( let i = 0; i < prices.length; i++) {
        prices[i].innerText = +(prices[i].getAttribute("data-base-price") * coefficient).toFixed(1) + " " + newCurrency;
    }
}
