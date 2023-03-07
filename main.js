
// ---------------SEARCH DROPDOWN---------------------
    const searchBar =document.querySelector(".searchDropdown");
    const searchIcon = document.querySelector(".searchIcon");
    searchIcon.addEventListener("click",()=>{
        searchBar.classList.add("active");
    });
    
    const overlay = document.querySelector(".overlay");
    overlay.addEventListener("click",()=>{
        searchBar.classList.remove("active")
    });

// ---------------SEARCH DROPDOWN---------------------
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



