const openDialogBtn = document.getElementById('openDialogBtn');
const closeDialogBtn = document.getElementById('closeDialogBtn');
const dialogContainer = document.getElementById('dialogContainer');

openDialogBtn.addEventListener('click', () => {
  dialogContainer.style.display = 'block';
  setTimeout(() => {
    dialogContainer.style.right = '0';
  }, 50);
});

closeDialogBtn.addEventListener('click', () => {
  dialogContainer.style.right = '-100%';
  setTimeout(() => {
    dialogContainer.style.display = 'none';
  }, 300);
});

// Close menu when clicking outside the dialog container
dialogContainer.addEventListener('click', (e) => {
  if (e.target === dialogContainer) {
    dialogContainer.style.right = '-100%';
    setTimeout(() => {
      dialogContainer.style.display = 'none';
    }, 300);
  }
});

/* Function to scroll to the top of the page smoothly */
 function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

/* Show/hide scroll-to-top button based on scroll position */
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

