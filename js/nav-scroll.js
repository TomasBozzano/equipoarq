const nav = document.getElementById("header-nav");
const links = document.querySelectorAll(".nav-link");
const mobileLinks = document.getElementById("esquina");
const logoLink = document.getElementById("logo-link");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
});


logoLink.addEventListener("click", () => {
    links.forEach(l => l.classList.remove("active"));
});

links.forEach(link => {
    link.addEventListener("click", () => {
        links.forEach(l => l.classList.remove("active"));
        link.classList.add("active");
    });
});

// Colocar el nav mobile o pc apartir de resoluciones de pantalla
function handleResize() {
    if (window.innerWidth <= 640) {
        mobileLinks.style.display = "flex";
    } else {
        mobileLinks.style.display = "none";
    }
}

window.addEventListener("resize", handleResize);
window.addEventListener("load", handleResize);