const hamMenu = document.querySelector('.ham-menu');
const copy = document.getElementById('copyright');
const offScreenMenu = document.querySelector('.off-screen-menu');

const blogPosts = document.querySelectorAll('.blog-post')
const blogExpand = document.getElementById('blog-link');


hamMenu.addEventListener('click', ()=> {
  hamMenu.classList.toggle('active');
  offScreenMenu.classList.toggle('active');
})

const currentYear = new Date().getFullYear();

copy.innerText += currentYear;

if (blogExpand){
  blogExpand.addEventListener('click', (e) => {
  e.preventDefault();
  blogPosts.forEach(post => {
    post.style.display = 'flex';
  })
})}
