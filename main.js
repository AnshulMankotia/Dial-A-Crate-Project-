

// ---------------Cart slider---------------------
const toClick = document.querySelector('.LogIn')
const toBlock = document.querySelector('.log__overlay')
const toActive = document.querySelector('.login-page')
const menu = document.querySelector(".menu_icon")
const tocloseMenu = document.querySelector(".fa-circle-xmark")
const navSlider = document.querySelector(".tab_nav-container")
const toclosSpirits = document.querySelector("#closespirits")
const clicktosubnav = document.querySelector(".tab_spirits-rel")
const subNav = document.querySelector(".tab_spirits-dropdown")
const scotch = document.querySelector(".arrow_scotch")
const scotchnav = document.querySelector(".tab_sub-drop")
const tequila = document.querySelector(".arrow_tequila")
const tequilaNAv = document.querySelector(".tequila-sub-drop") 
const whiskey = document.querySelector(".arrow_whiskey")
const whiskeyNAv = document.querySelector(".whiskey-sub-drop") 
const closeScotch = document.querySelector("#closescotch")
const closeSTequila = document.querySelector("#closetequila")
const closeWhiskey = document.querySelector("#closewhiskey")


toClick.addEventListener('click', () => {
    toBlock.style.display = "block";
    toActive.classList.add("open");
});

toBlock.addEventListener('click', () => {
    toActive.classList.remove("open");
    toBlock.style.display = "none";
    navSlider.classList.remove("active")
    subNav.classList.remove("active")
    scotchnav.classList.remove("active") 
    tequilaNAv.classList.remove("active")
});
menu.addEventListener('click',()=>{
    navSlider.classList.add("active")
    toBlock.style.display = "block";
});
tocloseMenu.addEventListener('click',()=>{
    navSlider.classList.remove("active")
    toBlock.style.display = "none";
})
clicktosubnav.addEventListener('click',()=>{
    subNav.classList.add("active")
});
toclosSpirits.addEventListener('click',()=>{
    subNav.classList.remove("active")
})
scotch.addEventListener('click',()=>{
    scotchnav.classList.add("active") 
});
tequila.addEventListener('click',()=>{
    tequilaNAv.classList.add("active")
});
whiskey.addEventListener('click',()=>{
    whiskeyNAv.classList.add("active")
});
closeScotch.addEventListener('click',()=>{
    scotchnav.classList.remove("active") 
});
closeSTequila.addEventListener('click',()=>{
    tequilaNAv.classList.remove("active")
})
closeWhiskey.addEventListener('click',()=>{
    whiskeyNAv.classList.remove("active")
})



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

// ACCORDION
const accordion = document.getElementsByClassName('accordion');

for (i=0; i<accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    this.classList.toggle('active')
  })
}



