document.querySelectorAll('.__question').forEach((item) => {
    item.addEventListener('click', (event) => {
        item.classList.toggle('open');
        //Showing content
        item.nextElementSibling.classList.toggle('open');
    });
});