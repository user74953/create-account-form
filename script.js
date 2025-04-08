function validateForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const message = document.getElementById("message");
  
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailPattern.test(email);
    const isValidPassword = password.length >= 6;
    const isMatchingPasswords = password === confirmPassword;
  
    if (!name) {
      showMessage('Name is required.', 'red');
    } else if (!isValidEmail) {
      showMessage('Invalid email format.', 'red');
    } else if (!isValidPassword) {
      showMessage('Password must be at least 6 characters.', 'red');
    } else if (!isMatchingPasswords) {
      showMessage('Passwords do not match.', 'red');
    } else {
      showMessage('Account successfully created!', 'green');
    }
  }
  
  function showMessage(text, color) {
    const message = document.getElementById("message");
    message.style.color = color;
    message.innerText = text;
  }
  
  function togglePassword(id) {
    const input = document.getElementById(id);
    const toggle = input.nextElementSibling;
    if (input.type === "password") {
      input.type = "text";
      toggle.textContent = "Hide Password";
    } else {
      input.type = "password";
      toggle.textContent = "Show Password";
    }
  }
  