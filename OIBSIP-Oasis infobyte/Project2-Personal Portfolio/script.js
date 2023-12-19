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


function downloadPDF() {
    // Replace the URL below with the actual path to your PDF file
    var pdfUrl = './AnkitChoubeyResume.pdf';

    // Create a temporary link element
    var link = document.createElement('a');
    link.href = pdfUrl;
    link.target = '_blank';
    link.download = 'AnkitChoubeyResume.pdf';

    // Append the link to the document and trigger a click event
    document.body.appendChild(link);
    link.click();

    // Remove the link from the document
    document.body.removeChild(link);
}


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});




