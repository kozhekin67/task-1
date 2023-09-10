document.querySelector('.dropdown_button').addEventListener('click', function () {
    document.querySelector('.dropdown_list').classList.toggle('dropdown_list--visible');
});

document.querySelectorAll('.dropdown_list-item').forEach(function(listItem) {
    listItem.addEventListener('click', function (event) {
        event.stopPropagation ();
        document.querySelector('.dropdown_button').innerText = this.innerText;
        document.querySelector('.dropdown_button').classList.add('dropdown_button--active');
        document.querySelector('.dropdown_list').classList.remove('dropdown_list--visible');
    })
});

document.addEventListener('click', function (event){
    if (event.target !== document.querySelector('.dropdown_button')) {
        document.querySelector('.dropdown_list').classList.remove('dropdown_list--visible');
    }
});

window.onscroll = function showMenu () {
    let menu = document.querySelector('.menu');
    let links = document.querySelectorAll('.nav-link');
    let linksHover = document.querySelectorAll('.nav-link');
    let logo = document.querySelector('.header-logo');
    let telephone = document.querySelector('.telephone');


    if (window.pageYOffset > 450) {
        menu.classList.add('menu_scroll');
        links.forEach((link)=>link.style.color = '#1B1F2B');
        linksHover.forEach((l)=>l.classList.add('nav-link__scrool'));
        logo.classList.add('header-logo__scrool');
        telephone.classList.add('telephone__scrool');
    }
    else {
        menu.classList.remove('menu_scroll');
        links.forEach((link)=>link.style.color = 'white');
        linksHover.forEach((l)=>l.classList.remove('nav-link__scrool'));
        logo.classList.remove('header-logo__scrool');
        telephone.classList.remove('telephone__scrool');
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