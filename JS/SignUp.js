const firebaseApp = firebase.initializeApp({ /* Firebase config */ });
const database = firebaseApp.firestore();
const auth = firebaseApp.auth();


const registerForm = document.getElementById('register-form');
const redirectToLogin = document.getElementById('redirect-to-login');

redirectToLogin.addEventListener('click', () => {
  window.location.href = 'LogIn.html';
})

registerForm.addEventListener("submit", (event) => {
  event.preventDefault(); // ngăn sự kiện tải lại mặc định cho trình duyệt
  const dataRegistration = {
    username: registerForm.Username.value,
    password: registerForm.Password.value,
    confirmPassword: registerForm.Confirmpassword.value,
    email: registerForm.Email.value,
  }

  location.href = '../HTML/LogIn.html'

  
})
