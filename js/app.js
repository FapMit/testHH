let wrapper = document.querySelector('.wrapper');
let popup = document.querySelector('.popup');
let openPopupButtons = document.querySelectorAll('.popup__open');
let closePopupButton = document.querySelector('.popup__close'); 

openPopupButtons.forEach((button) => { 
    button.addEventListener('click', (e) => { 
        e.preventDefault(); 
        popup.classList.add('popup__active');
        wrapper.classList.add('wrapper__unactive');
    })
});

closePopupButton.addEventListener('click',() => { 
    popup.classList.remove('popup__active'); 
    wrapper.classList.remove('wrapper__unactive');
});