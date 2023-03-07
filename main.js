
// ---------------SEARCH DROPDOWN---------------------
const searchBar = document.querySelector(".searchDropdown");
const searchIcon = document.querySelector(".searchIcon");
searchIcon.addEventListener("click", () => {
    searchBar.classList.add("active");
});

const overlay = document.querySelector(".overlay");
overlay.addEventListener("click", () => {
    searchBar.classList.remove("active")
});
// ---------------SEARCH DROPDOWN---------------------

// ---------------Cart slider---------------------



// ---------------Cart slider---------------------
const cartSlider = document.querySelector(".cart-slider");
const cartIcon = document.querySelector(".cartIcon");
const toClick = document.querySelector('.LogIn')
const toBlock = document.querySelector('.log__overlay')
const toActive = document.querySelector('.login-page')
const clickYes = document.querySelector('.yes')
const clickNo = document.querySelector('.no')
const addhidden = document.querySelector('#age-verify')
const towindow = document.querySelector('.window')
window.addEventListener("load", () => {
    towindow.classList.add("active")
});
clickYes.addEventListener('click', () => {
    addhidden.classList.add("hidden")
});
clickNo.addEventListener('click', () => {
    addhidden.classList.add("")
});
toClick.addEventListener('click', () => {
    toBlock.style.display = "block";
    toActive.classList.add("open");
});
toBlock.addEventListener('click', () => {
    toBlock.style.display = "none";
    toActive.classList.remove("open");
    cartSlider.classList.remove("active")
});
cartIcon.addEventListener("click", () => {
    cartSlider.classList.add("active")
    toBlock.style.display = "block";
});


const add = document.querySelector('.add')
const sub = document.querySelector('.sub')
const display = document.querySelector('.display')
add.addEventListener('click', () => {
    if (display.value >= 0) {
        display.value++;
    }
});

sub.addEventListener('click', () => {
    if (display.value <= 0) {
        display.value = 0;
    }
    else {
        display.value = parseInt(display.value - 1);
    }
});



