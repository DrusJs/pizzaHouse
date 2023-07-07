const burgerButton = document.getElementById("burger-button");
const popupMenu = document.getElementById("popup-menu");
burgerButton.addEventListener("click", ()=>{
    burgerButton.classList.toggle("active");
    if (burgerButton.classList.contains("active")) {
        popupMenu.classList.add("active");
    } else {
        popupMenu.classList.remove("active");
    }
});
