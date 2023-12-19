// Get the .navContainer element
var navContainer = document.querySelector('.navContainer');

// Function to handle scroll event
function handleScroll() {
    // Add the 'scrolled' class to .navContainer when scrolling down, remove it when scrolling up
    if (window.scrollY > 0) {
        navContainer.classList.add('scrolled');
    } else {
        navContainer.classList.remove('scrolled');
    }
}

// Listen for the scroll event and call the handleScroll function
window.addEventListener('scroll', handleScroll);


document.getElementById('downloadLink').addEventListener('click', function () {
    // Replace the URL below with the actual path to your PDF file
    var pdfUrl = './Project2-Personal Portfolio/AnkitChoubeyResume.pdf';
    
    // Open a new window/tab with the PDF file
    window.open(pdfUrl, '_blank');
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});




