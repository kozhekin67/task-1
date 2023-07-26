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
    console.log('Document Click');
    if (event.target !== document.querySelector('.dropdown_button')) {
        document.querySelector('.dropdown_list').classList.remove('dropdown_list--visible');
    }
});

window.onscroll = function showMenu () {
    let menu = document.querySelector('.menu');
    let links = document.querySelectorAll('.nav-link');
    let linksHover = document.querySelectorAll('.nav-link');
    let logo = document.querySelector('.header-logo');


    if (window.pageYOffset > 450) {
        menu.classList.add('menu_scroll');
        links.forEach((link)=>link.style.color = '#1B1F2B');
        linksHover.forEach((l)=>l.style.borderBottomColor = '#1B1F2B');
        logo.classList.add('header-logo__scrool');
    }
    else {
        menu.classList.remove('menu_scroll');
        links.forEach((link)=>link.style.color = 'white');
        linksHover.forEach((linksHover)=>linksHover.style.borderBottomColor = 'white');
        logo.classList.remove('header-logo__scrool');
    }
    
}