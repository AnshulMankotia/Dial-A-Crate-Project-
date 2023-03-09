

// ---------------Cart slider---------------------
const toClick = document.querySelector('.LogIn')
const toBlock = document.querySelector('.log__overlay')
const toActive = document.querySelector('.login-page')

toClick.addEventListener('click', () => {
    toBlock.style.display = "block";
    toActive.classList.add("open");
});

toBlock.addEventListener('click', () => {
    toActive.classList.remove("open");
    toBlock.style.display = "none";
});



const cartSlider = document.querySelector(".cart-slider");
const cartIcon = document.querySelector(".cartIcon");
cartIcon.addEventListener("click", () => {
    cartSlider.classList.add("active")
    toBlock.style.display = "block";
});


toBlock.addEventListener('click', () => {
    toBlock.style.display = "none";
    cartSlider.classList.remove("active")
});



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



