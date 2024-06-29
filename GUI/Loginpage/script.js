const signInBtnLink = document.querySelector('.signInBtn-link'); // Corrected class name
const signUpBtnLink = document.querySelector('.signUpBtn-link'); // Corrected class name
const wrapper = document.querySelector('.wrapper');

signUpBtnLink.addEventListener('click', () => {
    wrapper.classList.toggle('active');
});

signInBtnLink.addEventListener('click', () => {
    wrapper.classList.toggle('active');
});
