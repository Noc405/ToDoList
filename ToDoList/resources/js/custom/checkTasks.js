window.addEventListener('load', () => {
    let check = document.querySelector('.roundedDiv');

    check.addEventListener('click', () => {
        check.classList.toggle('isChecked')
    });
})
