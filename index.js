document.querySelector('.dropdown__button').addEventListener('click', function () {
    document.querySelector('.dropdown__list').classList.toggle('dropdown__list_visible');
});

document.querySelectorAll('.dropdown__list-item').forEach(function(listItem) {
    listItem.addEventListener('click', function (event) {
        event.stopPropagation ();
        document.querySelector('.dropdown__button').innerText = this.innerText;
        document.querySelector('.dropdown__button').classList.add('dropdown__button_active');
        document.querySelector('.dropdown__list').classList.remove('dropdown__list_visible');
    })
});

document.addEventListener('click', function (event){
    if (event.target !== document.querySelector('.dropdown__button')) {
        document.querySelector('.dropdown__list').classList.remove('dropdown__list_visible');
    }
});

document.addEventListener('click', function(event) {
    let refund = document.querySelector('.dropdown__refund');
    if (event.target == refund) {
        document.querySelector('.dropdown__button').innerText = innerText = 'Куда хотите ехать';
        document.querySelector('.dropdown__button').classList.remove('dropdown__button_active');
    }
});

window.onscroll = function showMenu () {
    let menu = document.querySelector('.header-block__menu');
    let links = document.querySelectorAll('.site-sections__section-link');
    let linksHover = document.querySelectorAll('.site-sections__section-link');
    let logo = document.querySelector('.your-tur__img');
    let telephone = document.querySelector('.phone-number__reference-number');


    if (window.pageYOffset > 450) {
        menu.classList.add('header-block__menu_scroll');
        links.forEach((link)=>link.style.color = '#1B1F2B');
        linksHover.forEach((l)=>l.classList.add('site-sections__section-link_scrool'));
        logo.classList.add('your-tur__img_scrool');
        telephone.classList.add('phone-number__reference-number_scrool');
    }
    
    else {
        menu.classList.remove('header-block__menu_scroll');
        links.forEach((link)=>link.style.color = 'white');
        linksHover.forEach((l)=>l.classList.remove('site-sections__section-link_scrool'));
        logo.classList.remove('your-tur__img_scrool');
        telephone.classList.remove('phone-number__reference-number_scrool');
    }
}

const sections = document.querySelectorAll('a[href*="#"]')
for (let section of sections) {
    section.addEventListener('click', function(event) {
        event.preventDefault();
        const blockID = section.getAttribute('href');
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
}