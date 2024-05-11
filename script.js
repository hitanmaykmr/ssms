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


document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});



document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent default form submission

  // Get input values
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Reset previous error message
  document.getElementById('errorMsg').innerText = '';

  // Check if username and password are correct (sample check)
  if (username === 'admin' && password === 'password') {
    // Redirect to admin dashboard or perform other actions
    window.location.href = '/path/to/admin.html'; // Update the path accordingly
  } else {
    // Display error message
    document.getElementById('errorMsg').innerText = 'Invalid username or password.';
  }
});




/* Disable F12 key press */
window.addEventListener('keydown', function (event) {
  if (event.keyCode === 123) { 
      console.log('F12 key was pressed.'); 
      event.preventDefault(); 
      return false;
  }
});


/* Disable Ctrl+U (View Page Source) */
document.onkeydown = function (event) {
  event = event || window.event;
  if (event.ctrlKey && event.keyCode == 85) { 
      return false;
  }
};