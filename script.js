const hamMenu = document.querySelector('.ham-menu')
const copy = document.getElementById('copyright')

const offScreenMenu = document.querySelector('.off-screen-menu')

hamMenu.addEventListener('click', ()=> {
  hamMenu.classList.toggle('active');
  offScreenMenu.classList.toggle('active');
})

const currentYear = new Date().getFullYear();

copy.innerText += currentYear;