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


/* TextBooks Data Structure With Path & Algorithms for selection */
const subjectsData = {
  class5: {
    math: 'path/to/class1_math.pdf',
    science: 'path/to/class1_science.pdf',
    english: 'path/to/class1_english.pdf',
    hindi: 'path/to/class1_history.pdf',
    assamese: 'path/to/class1_history.pdf',
    socialㅤScience: 'path/to/class1_history.pdf',
    computer: 'path/to/class1_history.pdf',
  },

  class6: {
    math: 'path/to/class2_math.pdf',
    science: 'path/to/class2_science.pdf',
    english: 'path/to/class2_english.pdf',
    hindi: 'path/to/class1_history.pdf',
    assamese: 'path/to/class1_history.pdf',
    socialㅤScience: 'path/to/class1_history.pdf',
    computer: 'path/to/class1_history.pdf',
  },

  class7: {
    math: 'path/to/class3_math.pdf',
    science: 'path/to/class3_science.pdf',
    english: 'path/to/class3_english.pdf',
    hindi: 'path/to/class1_history.pdf',
    assamese: 'path/to/class1_history.pdf',
    socialㅤScience: 'path/to/class1_history.pdf',
    computer: 'path/to/class1_history.pdf',
  },

  class8: {
    math: 'path/to/class3_math.pdf',
    science: 'path/to/class3_science.pdf',
    english: 'path/to/class3_english.pdf',
    hindi: 'path/to/class1_history.pdf',
    assamese: 'path/to/class1_history.pdf',
    socialㅤScience: 'path/to/class1_history.pdf',
    computer: 'path/to/class1_history.pdf',
  },

  class9: {
    math: 'path/to/class3_math.pdf',
    science: 'path/to/class3_science.pdf',
    english: 'path/to/class3_english.pdf',
    hindi: 'path/to/class1_history.pdf',
    assamese: 'path/to/class1_history.pdf',
    socialㅤScience: 'path/to/class1_history.pdf',
    computer: 'path/to/class1_history.pdf',
    advancedㅤMathematics: 'path/to/class1_history.pdf',
  }
,
  class10: {
    math: 'path/to/class3_math.pdf',
    science: 'path/to/class3_science.pdf',
    english: 'path/to/class3_english.pdf',
    hindi: 'path/to/class1_history.pdf',
    assamese: 'path/to/class1_history.pdf',
    socialㅤScience: 'path/to/class1_history.pdf',
    advancedㅤMathematics: 'path/to/class1_history.pdf',
  },
};


function populateSubjects(classValue) {
  const subjectSelect = document.getElementById('subjectSelect');
  subjectSelect.innerHTML = '<option value="">Select Subject&#8628;</option>';

  if (classValue && subjectsData.hasOwnProperty(classValue)) {
    const subjects = Object.keys(subjectsData[classValue]);
    subjects.forEach(subject => {
      const option = document.createElement('option');
      option.value = subject;
      option.text = subject.charAt(0).toUpperCase() + subject.slice(1); 
      subjectSelect.appendChild(option);
    });
  }
}

document.getElementById('classSelect').addEventListener('change', function() {
  const classValue = this.value;
  populateSubjects(classValue);
});

document.getElementById('downloadBtn').addEventListener('click', function() {
  const classValue = document.getElementById('classSelect').value;
  const subjectValue = document.getElementById('subjectSelect').value;
  
  if (classValue && subjectValue && subjectsData[classValue]?.[subjectValue]) {
    window.location.href = subjectsData[classValue][subjectValue];
  } else {
    alert('Please select a valid class and subject!');
  }
});