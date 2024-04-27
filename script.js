document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.menu').classList.toggle('active');
    document.querySelector('.menu-toggle').classList.toggle('active');
});