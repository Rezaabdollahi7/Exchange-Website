const more = document.querySelector('#more');
const close_x = document.querySelector('#close');
const pop_back = document.querySelector('.pop-up-back');
const pop_up = document.querySelector('.pop-up');

more.addEventListener('click', ()=>{
    pop_back.classList.add('show');
    pop_up.classList.add('show');
})
close_x.addEventListener('click', ()=>{
    pop_back.classList.remove('show');
    pop_up.classList.remove('show');
})