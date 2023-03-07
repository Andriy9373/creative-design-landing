document.querySelectorAll('.story-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.classList.toggle('change');
        btn.nextElementSibling.classList.toggle('change');
    })
});

document.querySelector('.submit-btn').addEventListener('click', e => {
    e.preventDefault();
});