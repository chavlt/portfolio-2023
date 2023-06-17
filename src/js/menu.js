let buttonOpenMenu = document.querySelector('.header__menu-icon');
let menuContent = document.querySelector('.header__menu-nav.menu');
let buttonCloseMenu = document.querySelector('.menu__close');
let linksNav = document.querySelectorAll('.menu__link');

buttonOpenMenu.addEventListener('click', function(){
    menuContent.classList.add('active');

    let delay = 200;
    linksNav.forEach(function(linkNav){
        setTimeout(() => {
            linkNav.classList.add('display');
        }, delay)

        delay += 200;
    })
})

buttonCloseMenu.addEventListener('click', function(){
    menuContent.classList.remove('active');
    linksNav.forEach(function(linkNav){
        linkNav.classList.remove('display');
    })

})