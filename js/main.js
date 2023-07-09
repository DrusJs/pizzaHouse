const burgerButton = document.getElementById("burger-button");
const popupMenu = document.getElementById("popup-menu");

const modalWrappers = document.querySelectorAll(".modal-wrapper");
const modalCloseButtons = document.querySelectorAll(".modal__close-button");

const locationBlock = document.getElementById("location");
const locationSelect = document.getElementById("location-select");
const locationField = document.getElementById("location-select-value");
const locationOptions = document.querySelectorAll(".location-select__list");

burgerButton.addEventListener("click", ()=>{
    burgerButton.classList.toggle("active");
    if (burgerButton.classList.contains("active")) {
        popupMenu.classList.add("active");
    } else {
        popupMenu.classList.remove("active");
    }
});

modalWrappers.forEach(el =>{
    el.addEventListener("click", (e) => {
        if (e.target.classList.contains("modal-wrapper")){
            e.currentTarget.classList.remove("active");
        }
    });
});

modalCloseButtons.forEach(el => {
    el.addEventListener("click", (e) => {
        e.currentTarget.parentElement.parentElement.classList.remove("active");
    });
});


try{
document.getElementById("cnstr-button").addEventListener("click", () => {
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
        locationField.innerHTML = e.currentTarget.innerHTML;
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
    });
    document.querySelector(".modal__link.login").addEventListener("click", () => {
        document.querySelector(".modal-wrapper.active").classList.remove("active");
        document.getElementById("modal-login").classList.add("active");
    });
    document.querySelector(".modal__link.register").addEventListener("click", () => {
        document.querySelector(".modal-wrapper.active").classList.remove("active");
        document.getElementById("modal-register").classList.add("active");
    });
    document.querySelector(".modal__link.remind").addEventListener("click", () => {
        document.querySelector(".modal-wrapper.active").classList.remove("active");
        document.getElementById("modal-remind").classList.add("active");
    });
    document.querySelectorAll(".reset-btn").forEach(el => {
        el.addEventListener("click", () => {
            document.querySelector(".modal-wrapper.active").classList.remove("active");
        });
    });
}

setActionModal();

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
            }
        });
    });
}

setActionsCards();
