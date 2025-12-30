const modal = document.getElementById("imgModal");
const modalImg = document.getElementById("img01");
const span = document.querySelector(".close");
const contentContainer = document.querySelector('.content');
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.sidebar ul li a');

const images = document.querySelectorAll('.content img');
images.forEach(img => {
    img.addEventListener('click', function() {
        modal.style.display = "block";
        modalImg.src = this.src;
    });
});

const imgButtons = document.querySelectorAll('.img-trigger-btn');
imgButtons.forEach(btn => {
    btn.addEventListener('click', function() {
        modal.style.display = "block";
        modalImg.src = this.getAttribute('data-src');
    });
});


if (span) {
    span.addEventListener('click', () => {
        modal.style.display = "none";
    });
}

modal.addEventListener('click', (event) => {
    if (event.target !== modalImg) {
        modal.style.display = "none";
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === "Escape" && modal.style.display === "block") {
        modal.style.display = "none";
    }
});

contentContainer.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (contentContainer.scrollTop >= (sectionTop - 150)) {
            current = section.getAttribute('id');
        }
    });

    if (contentContainer.scrollTop < 50) {
        current = sections[0].getAttribute('id');
    }

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});