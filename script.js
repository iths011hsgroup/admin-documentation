// Get the modal element
var modal = document.getElementById("imgModal");

// Get the image inside the modal
var modalImg = document.getElementById("img01");

// --- PART 1: Handle regular images in content ---
var images = document.querySelectorAll('.content img');
images.forEach(function(img) {
    img.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src; 
    }
});

// --- PART 2: Handle the new buttons ---
var imgButtons = document.querySelectorAll('.img-trigger-btn');
imgButtons.forEach(function(btn) {
    btn.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.getAttribute('data-src'); 
    }
});

// --- PART 3: Closing logic ---
var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
  modal.style.display = "none";
}
modal.onclick = function(event) {
    if (event.target !== modalImg) {
        modal.style.display = "none";
    }
}

// --- PART 4: Active Sidebar on Scroll (FIXED) ---
const contentContainer = document.querySelector('.content');
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.sidebar ul li a');

contentContainer.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (contentContainer.scrollTop >= (sectionTop - 150)) {
            current = section.getAttribute('id');
        }
    });

    // If at the very top, active the first link
    if (contentContainer.scrollTop < 50) {
        current = sections[0].getAttribute('id');
    }

    navLinks.forEach(link => {
        link.classList.remove('active');
        
        // --- THE FIX IS HERE ---
        // We add '#' to the current ID and check if it EXACTLY matches the href
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});