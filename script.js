function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// Select the navbar element
const navbar = document.getElementById('desktop-nav');

// Function to add/remove 'scrolled' class based on scroll position
function changeNavbarOnScroll() {
    if (window.scrollY > 50) { // When you scroll 50px from the top
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

// Listen for the scroll event and apply the function
window.addEventListener('scroll', changeNavbarOnScroll);

// Get the modal
const modal = document.getElementById("myModal");

// Get the image and insert it inside the modal
const img = document.getElementById("profile-pic");
const modalImg = document.getElementById("modalImg");

img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
}

// Get the <span> element that closes the modal
const closeSpan = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
closeSpan.onclick = function() { 
    modal.style.display = "none";
}
