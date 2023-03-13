let openMenu = getElement('#influencer--header-open-menu');
let closeMenu = getElement('#influencer--header-close-menu');
let mainMenu = getElement('#influencer--header-main-menu');

console.log(openMenu, closeMenu)

addListener(openMenu, 'click', function () {
    closeMenu.style.display = 'block';
    mainMenu.style.top = '0';
})

addListener(closeMenu, 'click', function () {
    closeMenu.style.display = 'none';
    mainMenu.style.top = '-100%';
})
function getElement(id) {
    return document.querySelector(id);
}

function addListener(element, eventType, callBack) {
    element.addEventListener(eventType, callBack);
}