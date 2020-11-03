const overlayImagePopup = document.querySelector('.overlay_image-popup');
const imagePopup = document.querySelector('.overlay-figure__image');
const buttonCloseImagePopup = overlayImagePopup.querySelector('.overlay__close-icon');
const overlayFigureCaption = document.querySelector('.overlay-figure__caption');
const photoGrid = document.querySelector('.places');
const elementPhoto = photoGrid.querySelectorAll('.place__image');

const openPopup = (evt) => {
  imagePopup.src = evt.target.currentSrc;
  overlayFigureCaption.innerText = evt.target.alt;
  overlayImagePopup.classList.add('overlay_opened');
  document.body.addEventListener('keydown', closePopupOnEsc);
}

const closePopup = (popup) => {
  popup.classList.remove('overlay_opened');
  document.body.removeEventListener('keydown', closePopupOnEsc);
}

const closePopupOnEsc = (evt) => {
  const activePopup = document.querySelector('.overlay_opened');
  if (evt.key === 'Escape') {
    closePopup(activePopup);
  }
};

const closeOnOverlayClick = (evt, popup) => {
  if(evt.target !== evt.currentTarget) {
    return;
  }
  closePopup(popup);
}

elementPhoto.forEach((element) => {
  element.addEventListener('click', openPopup);
});

buttonCloseImagePopup.addEventListener('click', () => {
  closePopup(overlayImagePopup);
})

overlayImagePopup.addEventListener('click', (evt) => closeOnOverlayClick(evt, overlayImagePopup));
