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
});


const add=document.querySelector('.add')
const sub=document.querySelector('.sub')
const display=document.querySelector('.display')
add.addEventListener('click', () =>{
if(display.value>=0){
    display.value++;
}
});

sub.addEventListener('click', () =>{
if(display.value<=0){
    display.value=0;
}
else{
    display.value=parseInt(display.value-1);
}
});



