const nav = document.getElementById("header-nav");
const links = document.querySelectorAll(".nav-link");
const mobileLinks = document.getElementById("esquina");
const logoLink = document.getElementById("logo-link");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }

    const home = document.querySelector("[data-link-home]");
    const homeSection = document.getElementById(home.dataset.linkHome);
    console.log(homeSection);

    navLinks.forEach(link => {

        const id = link.getAttribute("data-link");
        const section = document.getElementById(id);

        if (!section) return;
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const scroll = window.scrollY + height / 2;

        if (window.scrollY < homeSection.offsetHeight - nav.offsetHeight) {
            links.forEach(l => l.classList.remove("active"));
            return;
        }

        if (scroll >= top - 50 && scroll < top + height - 50) {
            links.forEach(l => {
                l.classList.remove("active");
            });
            link.classList.add("active");
        }

    })
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