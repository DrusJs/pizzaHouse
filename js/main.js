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

function CloseModalPizza() {
    document.getElementById("modal-pizza").classList.remove("active");
    document.body.classList.remove("noscroll");
    pizzaSelect.classList.add("modal-act");
    pizzaBtn.innerHTML = `<div class="cart-btn__inc minus" onclick="Dec(this)">&ndash;</div>
                            <div>1</div>
                            <div class="cart-btn__inc plus" onclick="Inc(this)">+</div>
                            <div class="cart-btn__multy">x<span>1</span></div>`;
}
function Inc(e) {
    let inc = e.previousElementSibling.innerHTML;
    e.previousElementSibling.innerHTML = +inc + 1;
}
function Dec(e) {
    let inc = e.nextElementSibling.innerHTML;
    if (+inc > 1) {e.nextElementSibling.innerHTML = inc - 1;}
}

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
try {
document.querySelectorAll(".mobile-menu__list").forEach(el => {
    el.addEventListener("click", (e) => {
        document.querySelector(".mobile-menu__list.active").classList.remove("active");
        e.currentTarget.classList.add("active");
    })
})
} catch {}
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
   el.addEventListener("click", () => {
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
let pizzaSelect, pizzaBtn;
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
let intSlider;

function setIntervalSlider() {
    intSlider = setInterval(()=>{
        if (window.matchMedia('(max-width: 750px)').matches) {return}
        document.getElementById("main-next").click()
    }, 3500)
}

function setActionsCards() {
    document.querySelectorAll(".card-pizza_cart-btn").forEach(el => {
        el.addEventListener("click", (e) => {
            if (e.target.classList.contains("card-pizza_cart-btn") && !e.currentTarget.parentElement.parentElement.classList.contains("modal-act")){
                if (e.currentTarget.parentElement.parentElement.classList.contains("card-pizza") && window.matchMedia('(max-width: 750px)').matches) {return;}
                e.currentTarget.classList.add("active");
                document.querySelector(".header__basket").classList.remove("empty");
                document.querySelector(".header__basket-amount").innerHTML = +document.querySelector(".header__basket-amount").innerHTML + 1;
            }
        });
    });
    document.querySelectorAll(".card-pizza .card-pizza_cart-btn").forEach(el => {
        el.addEventListener("click", (e) => {
            if (window.matchMedia('(max-width: 750px)').matches && !e.currentTarget.parentElement.parentElement.classList.contains("modal-act")) {
                document.getElementById("modal-pizza").classList.add("active");
                document.body.classList.add("noscroll");
                pizzaSelect = ""; pizzaBtn = "";
                pizzaSelect = e.currentTarget.parentElement.parentElement;
                pizzaBtn = e.currentTarget;
                document.getElementById("modalbtn").classList.remove("active");
                e.currentTarget.classList.remove("active");
                return;
                
            }
            if (e.target.classList.contains("card-pizza_cart-btn") && !e.currentTarget.parentElement.parentElement.classList.contains("modal-act")){
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
    document.querySelectorAll(".card-pizza__focus_btn").forEach(el => {
        el.addEventListener("click", (e)=>{
            if (!e.currentTarget.classList.contains("actuve")) {
            e.currentTarget.classList.add("active");
            e.currentTarget.nextElementSibling.classList.remove("active");   
            }  
        })
    })
    document.querySelectorAll(".card-pizza__select_btn").forEach(el => {
        el.addEventListener("click", (e)=>{
            if (!e.currentTarget.classList.contains("actuve")) {
            e.currentTarget.classList.add("active");
            e.currentTarget.previousElementSibling.classList.remove("active");
            }     
        })
    })
}
try {
setActionsCards();
} catch {}
try {
setIntervalSlider();
} catch {}
try {
let pg = 0;
let slider = document.querySelector(".slider__container");
slider.addEventListener('scroll', function() {
    let w = document.querySelector(".slider__container").clientWidth - 60;
    if (Math.trunc(slider.scrollLeft / w) != pg) {
        pg = Math.trunc(slider.scrollLeft / w);
        document.querySelector(".slidepag .dot-page.active").classList.remove("active");
        document.querySelectorAll(".slidepag .dot-page")[pg].classList.add("active");
    }
});
let pg2 = 0;
let slider2 = document.querySelector(".novelty-slider");
slider2.addEventListener('scroll', function() {
    if (Math.trunc(slider2.scrollLeft / 100) != pg2) {
        pg2 = Math.trunc(slider2.scrollLeft / 100);
        document.querySelector(".novelty-pages .pages-mobile .dot-page.active").classList.remove("active");
        document.querySelectorAll(".novelty-pages .pages-mobile .dot-page")[pg2].classList.add("active");
    }
});
document.getElementById("main-next").addEventListener("click", () => {
    let act = document.querySelector(".pagination__slide-button.active");
    let actSlide = document.querySelector(".slider__slide.active");
    act.classList.remove("active");
    actSlide.classList.remove("active");
    if (actSlide.dataset.slide == "6") {
        slider.firstElementChild.classList.add("active");
        document.querySelector(".pagination__slide").firstElementChild.classList.add("active");
    } else {
        actSlide.classList.add("right");
        actSlide.nextElementSibling.classList.add("active");
        act.nextElementSibling.classList.add("active");
    }
    setTimeout(()=>{actSlide.classList.remove("right")}, 600)
    clearInterval(intSlider);
    setIntervalSlider() 
})
document.getElementById("main-prev").addEventListener("click", () => {
    let act = document.querySelector(".pagination__slide-button.active");
    let actSlide = document.querySelector(".slider__slide.active");
    act.classList.remove("active");
    actSlide.classList.remove("active");
    if (actSlide.dataset.slide == "1") {
        slider.lastElementChild.classList.add("active");
        document.querySelector(".pagination__slide").lastElementChild.classList.add("active");
    } else {
        actSlide.previousElementSibling.classList.add("active");
        act.previousElementSibling.classList.add("active");
    }
    clearInterval(intSlider);
    setIntervalSlider() 
})
let novelty = document.querySelector(".novelty-slider")
document.getElementById("novelty-next").addEventListener("click", () => {
    let actSlide = document.querySelector(".novelty-slide.active");
    actSlide.classList.remove("active");
    if (actSlide.dataset.slide == "2") {
        novelty.firstElementChild.classList.add("active");
        document.querySelector(".pagination__slide").firstElementChild.classList.add("active");
        document.querySelector(".pages-desc").firstElementChild.classList.add("active");
        document.querySelector(".pages-desc").lastElementChild.classList.remove("active");
    } else {
        actSlide.nextElementSibling.classList.add("active");
        document.querySelector(".pages-desc").firstElementChild.classList.remove("active");
        document.querySelector(".pages-desc").lastElementChild.classList.add("active");
    }

})
document.getElementById("novelty-prev").addEventListener("click", () => {
    let actSlide = document.querySelector(".novelty-slide.active");
    actSlide.classList.remove("active");
    if (actSlide.dataset.slide == "1") {
        novelty.lastElementChild.classList.add("active");
        document.querySelector(".pagination__slide").lastElementChild.classList.add("active");
        document.querySelector(".pages-desc").lastElementChild.classList.add("active");
        document.querySelector(".pages-desc").firstElementChild.classList.remove("active");
    } else {
        actSlide.previousElementSibling.classList.add("active");
        document.querySelector(".pages-desc").lastElementChild.classList.remove("active");
        document.querySelector(".pages-desc").firstElementChild.classList.add("active");
    }

})
document.querySelectorAll(".pagination__slide-button").forEach(el => {
    el.addEventListener("click", (e)=>{
        document.querySelector(".pagination__slide-button.active").classList.remove("active");
        e.currentTarget.classList.add("active");
        let mul = e.currentTarget.dataset.slide-1;
        document.querySelector(".slider__slide.active").classList.remove("active");
        document.getElementsByClassName("slider__slide")[mul].classList.add("active");
        clearInterval(intSlider);
        setIntervalSlider()        
    })
})

if (window.matchMedia('(max-width: 750px)').matches) {
    clearInterval(intSlider);
}
} catch {}
try {
const profilenav = document.querySelectorAll(".profile-nav__list");
const profilecontent = document.querySelectorAll(".profile__container-page");
for (let i = 0; i < 2; i++) {
    profilenav[i].addEventListener("click", (e) => {
        document.querySelector(".profile-nav__list.active").classList.remove("active");
        e.currentTarget.classList.add("active");
        document.querySelector(".profile__container-page.active").classList.remove("active");
        profilecontent[i].classList.add("active");
    });
  }

const openAccordBtn = document.querySelectorAll(".show-hide__button");
openAccordBtn.forEach(el => {
    el.addEventListener("click", (e) => {
        e.currentTarget.parentElement.parentElement.parentElement.classList.toggle("active");
    })
})
} catch {}
function setBascketCardAction() {
    document.querySelectorAll(".dark .counter__inc.plus").forEach(el => {
        el.addEventListener("click", (e) => {
            let multy = e.currentTarget.previousElementSibling.innerHTML;
           // e.currentTarget.previousElementSibling.innerHTML = +multy+1;
        });
    });
    document.querySelectorAll(".dark .counter__inc.minus").forEach(el => {
        el.addEventListener("click", (e) => {
            let multy = e.currentTarget.nextElementSibling.innerHTML;
            if (+multy < 1){
                let block = e.currentTarget.parentElement.parentElement.parentElement;
                if (block.parentElement.classList.contains("basket__card")) {
                    block.parentElement.remove();
                    return;
                }
                if (e.currentTarget.parentElement.parentElement.parentElement.classList.contains("basket__card")) {
                    block.remove();
                }
            } else {
                //e.currentTarget.nextElementSibling.innerHTML = +multy-1;
            }
        });
    });
}

try {
    setBascketCardAction()
} catch {}