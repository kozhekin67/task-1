const dropdownList = document.querySelector('.dropdown__list');
const dropdownButton = document.querySelector('.dropdown__button');
const refund = document.querySelector('.dropdown__refund');
const menu = document.querySelector('.header-block__menu');
const links = document.querySelectorAll('.site-sections__section-link');
const linksHover = document.querySelectorAll('.site-sections__section-link');
const logo = document.querySelector('.your-tur__img');
const telephone = document.querySelector('.phone-number__reference-number');

const dropdownListVisible = () => {
    dropdownList.classList.toggle('dropdown__list_visible');
}
dropdownButton.addEventListener('click', dropdownListVisible);

const choosingTour = (listItem) => {
    listItem.addEventListener('click', function (event) {
        event.stopPropagation ();
        dropdownButton.innerText = this.innerText;
        dropdownButton.classList.add('dropdown__button_active');
        dropdownList.classList.remove('dropdown__list_visible');
    })
};
document.querySelectorAll('.dropdown__list-item').forEach((listItem) => choosingTour(listItem));

const ExitTheDropDownList = (event) => {
    if (event.target !== dropdownButton) {
        dropdownList.classList.remove('dropdown__list_visible');
    }
}
document.addEventListener('click', (event) => ExitTheDropDownList(event));

const resetСhoosingTour = () => {
    dropdownButton.innerText = 'Куда хотите ехать';
    dropdownButton.classList.remove('dropdown__button_active');
}
refund.onclick = resetСhoosingTour;

const showMenu = () => {
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
window.onscroll = showMenu;

const sections = document.querySelectorAll('a[href*="#"]')
sections.forEach((section) => {
    section.addEventListener('click', function(event) {
        event.preventDefault();
        const blockID = section.getAttribute('href');
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
})
