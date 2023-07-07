const burgerButton = document.getElementById("burger-button");
const modalWrappers = document.querySelectorAll(".modal-wrapper");
const popupMenu = document.getElementById("popup-menu");
const modalCloseButtons = document.querySelectorAll(".modal__close-button");

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
        e.currentTarget.classList.remove("active");
    });
});

modalCloseButtons.forEach(el => {
    el.addEventListener("click", (e) => {
        e.currentTarget.parentElement.parentElement.classList.remove("active");
    });
});

document.getElementById("basket-button").addEventListener("click", () => {
    document.getElementById("modal-register").classList.add("active");
});
