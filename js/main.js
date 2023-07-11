const burgerButton = document.getElementById("burger-button");
const popupMenu = document.getElementById("popup-menu");

const modalWrappers = document.querySelectorAll(".modal-wrapper");
const modalCloseButtons = document.querySelectorAll(".modal__close-button");

const locationBlock = document.getElementById("location");
const locationSelect = document.getElementById("location-select");
const locationField = document.getElementById("location-select-value");
const locationOptions = document.querySelectorAll(".location-select__list");

const navBlock = document.getElementById("nav");
const navSelect = document.getElementById("nav-select");
const navOptions = document.querySelectorAll(".nav-select__list");


navBlock.addEventListener("mouseover", () => {
    navSelect.classList.add("active");
});
navSelect.addEventListener("mouseover", () => {
    navSelect.classList.add("active");
});
navBlock.addEventListener("mouseout", () => {
    navSelect.classList.remove("active");
});
navSelect.addEventListener("mouseout", () => {
    navSelect.classList.remove("active");
});
navOptions.forEach(el => {
   el.addEventListener("click", (e) => {
        navField.innerHTML = e.currentTarget.innerHTML;
        navSelect.classList.remove("active");
   });
});

burgerButton.addEventListener("click", ()=>{
    burgerButton.classList.toggle("active");
    if (burgerButton.classList.contains("active")) {
        popupMenu.classList.add("active");
        document.body.classList.add("noscroll");
    } else {
        popupMenu.classList.remove("active");
        document.body.classList.remove("noscroll");
    }
});

modalWrappers.forEach(el =>{
    el.addEventListener("click", (e) => {
        if (e.target.classList.contains("modal-wrapper")){
            e.currentTarget.classList.remove("active");
            document.body.classList.remove("noscroll");
        }
    });
});

document.querySelectorAll(".mobile-menu__list").forEach(el => {
    el.addEventListener("click", (e) => {
        document.querySelector(".mobile-menu__list.active").classList.remove("active");
        e.currentTarget.classList.add("active");
        console.log(1);
    })
})

modalCloseButtons.forEach(el => {
    el.addEventListener("click", (e) => {
        e.currentTarget.parentElement.parentElement.classList.remove("active");
        document.body.classList.remove("noscroll");
    });
});


try{
    document.getElementById("constructor-open").addEventListener("click", () => {
        document.getElementById("modal-constructor").classList.add("active");
    });
} catch {}

// locationBlock.addEventListener("click", (e) => {
//     if (e.target.classList.contains("location") || e.target.classList.contains("location-select-value")){
//         locationSelect.classList.add("active");
//     } else {
//         locationSelect.classList.remove("active");
//     }
// });
locationBlock.addEventListener("mouseover", () => {
    locationSelect.classList.add("active");
});
locationSelect.addEventListener("mouseover", () => {
    locationSelect.classList.add("active");
});
locationBlock.addEventListener("mouseout", () => {
    locationSelect.classList.remove("active");
});
locationSelect.addEventListener("mouseout", () => {
    locationSelect.classList.remove("active");
});
locationOptions.forEach(el => {
   el.addEventListener("click", (e) => {
        locationSelect.classList.remove("active");
   });
});


document.querySelectorAll(".menu__filter-list").forEach(el => {
    el.addEventListener("click", (e) => {
        document.querySelector(".menu__filter-list.active").classList.remove("active");
        e.currentTarget.classList.add("active");
    });
});

function setActionModal() {
    document.querySelector(".container-info__user").addEventListener("click", () => {
        document.getElementById("modal-login").classList.add("active");
        document.body.classList.add("noscroll");
    });
    document.querySelector(".modal__link.login").addEventListener("click", () => {
        document.querySelector(".modal-wrapper.active").classList.remove("active");
        document.getElementById("modal-login").classList.add("active");
        document.body.classList.add("noscroll");
    });
    document.querySelector(".modal__link.register").addEventListener("click", () => {
        document.querySelector(".modal-wrapper.active").classList.remove("active");
        document.getElementById("modal-register").classList.add("active");
        document.body.classList.add("noscroll");
    });
    document.querySelector(".modal__link.remind").addEventListener("click", () => {
        document.querySelector(".modal-wrapper.active").classList.remove("active");
        document.getElementById("modal-remind").classList.add("active");
        document.body.classList.add("noscroll");
    });
    document.querySelectorAll(".reset-btn").forEach(el => {
        el.addEventListener("click", () => {
            document.querySelector(".modal-wrapper.active").classList.remove("active");
            document.body.classList.remove("noscroll");
        });
    });
}

setActionModal();

document.addEventListener("DOMContentLoaded", function () {
    var eventCalllback = function (e) {
        var el = e.target,
        clearVal = el.dataset.phoneClear,
        pattern = el.dataset.phonePattern,
        matrix_def = "+7 (___) ___-__-__",
        matrix = pattern ? pattern : matrix_def,
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = e.target.value.replace(/\D/g, "");
        if (clearVal !== 'false' && e.type === 'blur') {
            if (val.length < matrix.match(/([\_\d])/g).length) {
                e.target.value = '';
                return;
            }
        }
        if (def.length >= val.length) val = def;
        e.target.value = matrix.replace(/./g, function (a) {
            return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
        });
    }
    var phone_inputs = document.querySelectorAll('[data-phone-pattern]');
    for (let elem of phone_inputs) {
        for (let ev of ['input', 'blur', 'focus']) {
            elem.addEventListener(ev, eventCalllback);
        }
    }
});

function setActionsCards() {
    document.querySelectorAll(".card-pizza_cart-btn").forEach(el => {
        el.addEventListener("click", (e) => {
            if (e.target.classList.contains("card-pizza_cart-btn")){
                e.currentTarget.classList.add("active");
                document.querySelector(".header__basket").classList.remove("empty");
                document.querySelector(".header__basket-amount").innerHTML = +document.querySelector(".header__basket-amount").innerHTML + 1;
            }
        });
    });
    document.querySelectorAll(".cart-btn__inc.plus").forEach(el => {
        el.addEventListener("click", (e) => {
            let multy = e.currentTarget.nextElementSibling.firstElementChild.innerHTML;
            e.currentTarget.nextElementSibling.firstElementChild.innerHTML = +multy+1;
        });
    });
    document.querySelectorAll(".cart-btn__inc.minus").forEach(el => {
        el.addEventListener("click", (e) => {
            let multy = e.currentTarget.nextElementSibling.nextElementSibling.firstElementChild.innerHTML;
            if (+multy < 2){
                let cart = +document.querySelector(".header__basket-amount").innerHTML;
                e.currentTarget.parentElement.classList.remove("active");
                document.querySelector(".header__basket-amount").innerHTML = cart - 1;
                if (+document.querySelector(".header__basket-amount").innerHTML < 1) {
                    document.querySelector(".header__basket").classList.add("empty");
                }
            } else {
                e.currentTarget.nextElementSibling.nextElementSibling.firstElementChild.innerHTML = +multy-1;
            }
        });
    });
    document.querySelectorAll(".card-pizza__btn").forEach(el => {
        el.addEventListener("click", (e) => {
            if (e.target.classList.contains("card-pizza__btn")){
                document.getElementById("modal-ingredients").classList.add("active");
                document.body.classList.add("noscroll");
            }
        });
    });
    document.querySelectorAll(".counter__inc.plus").forEach(el => {
        el.addEventListener("click", (e) => {
            let value = e.currentTarget.previousElementSibling.innerHTML;
            +value++;
            e.currentTarget.previousElementSibling.innerHTML = value;
            if (value == 1) {
                e.currentTarget.parentElement.classList.remove("empty");
            }
        });
    });
    document.querySelectorAll(".counter__inc.minus").forEach(el => {
        el.addEventListener("click", (e) => {
            let value = e.currentTarget.nextElementSibling.innerHTML;
            if (value == 0) {return;}
            +value--;
            e.currentTarget.nextElementSibling.innerHTML = value;
            if (value < 1) {
                e.currentTarget.parentElement.classList.add("empty");
            }
        });
    });
    document.querySelector(".reset-ingredients").addEventListener("click", () => {
        document.querySelectorAll(".cntr__ingredient").forEach(el => {
            el.classList.remove("empty");
            el.classList.add("empty");
            el.firstElementChild.nextElementSibling.innerHTML = 0;
        });
    });
}

setActionsCards();

