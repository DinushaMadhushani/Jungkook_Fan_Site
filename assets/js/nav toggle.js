// Ensure menu toggle works on mobile
document.addEventListener('DOMContentLoaded', function () {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('#navbarNav');

    navbarToggler.addEventListener('click', function () {
        navbarCollapse.classList.toggle('show');
    });
});