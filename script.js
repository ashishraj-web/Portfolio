document.addEventListener('DOMContentLoaded', () => {
    console.log("Portfolio Loaded Successfully");

    const links = document.querySelectorAll('.nav-links a');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            console.log(`Navigating to ${link.getAttribute('href')}`);
        });
    });
});

window.onscroll = function () {
    const nav = document.querySelector('.navbar');
    if (window.pageYOffset > 50) {
        nav.style.background = "#070b14";
        nav.style.boxShadow = "0 2px 10px rgba(0,0,0,0.5)";
    } else {
        nav.style.background = "rgba(15, 23, 42, 0.9)";
        nav.style.boxShadow = "none";
    }
};