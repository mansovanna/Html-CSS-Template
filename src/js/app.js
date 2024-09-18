const buttonMenu = document.getElementById('activeMneu');
const sideBar = document.getElementById('nave-bar');

buttonMenu.addEventListener('click', ()=>{
    sideBar.classList.toggle('active');
})

document.addEventListener('click', (e)=>{
    if(!sideBar.contains(e.target) && !buttonMenu.contains(e.target)){
        sideBar.classList.remove('active');
    }
})