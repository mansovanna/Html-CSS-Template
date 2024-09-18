// Function to set active navigation item and page
function setActiveNav(index) {
  // Remove active class from all nav items
  document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('add-active-nav'));
  document.querySelectorAll('.nav-button').forEach(button => button.classList.remove('active-button'));
  
  // Hide all pages
  document.querySelectorAll('.page-nav').forEach(page => page.classList.remove('active'));

  // Add active class to the clicked button's parent
  document.querySelectorAll('.nav-item')[index].classList.add('add-active-nav');
  // Set active class to the clicked button
  document.querySelectorAll('.nav-button')[index].classList.add('active-button');
  // Show the corresponding page
  document.querySelector(`.page-nav-${index + 1}`).classList.add('active');
}

// Set default page to Page 1 (index 0)
setActiveNav(0);

// Add click event listeners to each nav button
document.querySelectorAll('.nav-button').forEach((button, index) => {
  button.addEventListener('click', () => {
      setActiveNav(index);
  });
});



// 


document.querySelector('.btn-delete').addEventListener('click', (event) => {
  event.preventDefault(); // Prevent default link behavior

  // Select the input field
  const inputField = document.querySelector('.search-navigate-page');

  // Clear the input field
  inputField.value = '';
});


  