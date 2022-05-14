const popupLinks = document.querySelectorAll('.popup-opener');
const popups = document.querySelectorAll('.popup__full-area');
const body = document.querySelectorAll('body');
const lockPadding = document.querySelectorAll('.lock-padding');

let scrollingUnlocked = true;

const animationInterval = 800;

const popupLinkNamePrefix = "opener-of-";

popupLinks.forEach((link) => link.addEventListener('click', (event) => {
    const popupId = event.target.getAttribute('name').slice(popupLinkNamePrefix.length);
    openPopup(popupId);
}));

popups.forEach((popup) => {    
    const closingTool = popup.querySelector('.popup__closing-tool');
    const backgroundAsClosingTool = popup.querySelector('.popup__background-as-closing-tool');

    closingTool.addEventListener('click', () => closePopup(popup));
    backgroundAsClosingTool.addEventListener('click', () => closePopup(popup));
});

function openPopup(popupId) {
    const popup = document.getElementById(popupId);
    popup.classList.add('active');
}

function closePopup(popupElement) {
    popupElement.classList.remove('active');
}
