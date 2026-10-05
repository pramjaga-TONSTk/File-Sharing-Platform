/* ========================================================
   AUTH / LOGIN CONTROLLER (Client-Side)
======================================================== */
const loginModal = document.getElementById('loginModal');
const btnAuthAction = document.getElementById('btnAuthAction');
const btnCloseModal = document.getElementById('btnCloseModal');
const loginForm = document.getElementById('loginForm');
const inputUsername = document.getElementById('inputUsername');
const inputPassword = document.getElementById('inputPassword');
const usernameText = document.getElementById('usernameText');

// Check if user is already logged in
function checkAuthStatus() {
  const savedUser = localStorage.getItem('currentUser');
  if (savedUser) {
    usernameText.textContent = savedUser;
    btnAuthAction.textContent = 'Log Out';
  } else {
    usernameText.textContent = 'Guest';
    btnAuthAction.textContent = 'Sign In';
  }
}

// Open modal or log out
btnAuthAction.addEventListener('click', () => {
  const savedUser = localStorage.getItem('currentUser');
  if (savedUser) {
    // Log out action
    localStorage.removeItem('currentUser');
    checkAuthStatus();
  } else {
    // Open sign-in popup
    loginModal.classList.remove('hidden');
    inputUsername.focus();
  }
});

btnCloseModal.addEventListener('click', () => {
  loginModal.classList.add('hidden');
});

// Handle form submission
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = inputUsername.value.trim();
  const password = inputPassword.value.trim();

  // Basic validation check (allows any student credentials for presentation)
  if (username && password.length >= 4) {
    localStorage.setItem('currentUser', username);
    checkAuthStatus();
    loginModal.classList.add('hidden');
    loginForm.reset();
  } else {
    document.getElementById('loginError').classList.remove('hidden');
  }
});

// Run on page load
checkAuthStatus();