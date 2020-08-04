let menu_open = document.querySelector('.header__menu-list-title')
let menu_close = document.querySelector('.nav__menu-list-title')
let nav__menu = document.querySelector('.nav__menu')
let nav__link = document.querySelectorAll('.nav__list-href')

console.log(nav__link)
menu_open.addEventListener('click', () => {
    nav__menu.classList.add('nav__menu-active')
})
menu_close.addEventListener('click', () => {
    nav__menu.classList.remove('nav__menu-active')
})
for (let i=0; i<nav__link.length; i++){
    nav__link[i].addEventListener('click', () => {
        nav__menu.classList.remove('nav__menu-active')
    })
}
