const firebaseApp = firebase.initializeApp({
   /* Firebase config */ 
    
  });
const database = firebaseApp.firestore();
const auth = firebaseApp.auth();


const registerForm = document.getElementById('register-form');
const redirectToLogin = document.getElementById('redirect-to-login');

redirectToLogin.addEventListener('click', () => {
  window.location.href = 'LogIn.html';
})

registerForm.addEventListener("submit", (event) => {
  event.preventDefault(); // ngăn sự kiện tải lại mặc định cho trình duyệt
  const dataRegister = {
    username: registerForm.Username.value,
    password: registerForm.Password.value,
    confirmPassword: registerForm.Confirmpassword.value,
    email: registerForm.Email.value,
  }

  location.href = '../HTML/LogIn.html'

  const register = async (data) => {
    try {
      await firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
      firebase.auth().currentUser.sendEmailVerification();
      alert("The email has been registered, please check your email");
      location.href = "../login.html"
    }
    catch (err) {
      console.log(err);
      alert(err.message);
    }
  }


  // Gọi hàm
  register(dataRegister);

})



