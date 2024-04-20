// Get the button and dialog container elements
  const openDialogBtn = document.getElementById('openDialogBtn');
  const dialogContainer = document.getElementById('dialogContainer');
  const closeDialogBtn = document.getElementById('closeDialogBtn');
  const icon = document.getElementById('icon');

  // Add event listener to open dialog when button is clicked
  openDialogBtn.addEventListener('click', function() {
    dialogContainer.style.display = 'block';
    // Change icon after button press
    icon.textContent = 'menu_open'; // Change to 'close' icon
  });

  // Close dialog when close icon is clicked
  closeDialogBtn.addEventListener('click', function() {
    dialogContainer.style.display = 'none';
    // Reset icon when dialog is closed
    icon.textContent = 'menu'; // Reset to 'search' icon
  });


 // Function to scroll to the top of the page smoothly
 function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Show/hide scroll-to-top button based on scroll position
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scrollBtn").style.display = "block";
  } else {
    document.getElementById("scrollBtn").style.display = "none";
  }
}



