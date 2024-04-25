document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const toggleLogin = document.getElementById('toggleLogin');
    const toggleSignUp = document.getElementById('toggleSignUp');
  
    // Toggle between login and sign up forms
    toggleLogin.addEventListener('click', function(event) {
      event.preventDefault();
      loginForm.classList.remove('hidden');
      signupForm.classList.add('hidden');
    });
  
    toggleSignUp.addEventListener('click', function(event) {
      event.preventDefault();
      signupForm.classList.remove('hidden');
      loginForm.classList.add('hidden');
    });
  
    // Login form submission
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const username = loginForm.username.value;
      const password = loginForm.password.value;
      // Here you would typically send a request to the server to authenticate the user
      // For demonstration, we'll just alert the entered credentials
      alert(`Login submitted!\nUsername: ${username}\nPassword: ${password}`);
    });
  
    // Sign up form submission
    signupForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const newUsername = signupForm.newUsername.value;
      const newPassword = signupForm.newPassword.value;
      // Here you would typically send a request to the server to create a new user
      // For demonstration, we'll just alert the entered credentials
      alert(`Sign Up submitted!\nUsername: ${newUsername}\nPassword: ${newPassword}`);
    });
  });
  