document.addEventListener('DOMContentLoaded', function() {
    const yearSpan = document.querySelector('.current-year');
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;
});
