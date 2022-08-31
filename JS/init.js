export const init = () => {

  console.log("Window loaded");

  // Import the functions you need from the SDKs you need
  
  
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyA7jiLf7hzlv_IUMYRRTt3-1d5EUjusk-g",
    authDomain: "encyclopedia-2-d7652.firebaseapp.com",
    projectId: "encyclopedia-2-d7652",
    storageBucket: "encyclopedia-2-d7652.appspot.com",
    messagingSenderId: "1094529649143",
    appId: "1:1094529649143:web:cbfb8b7166aebb7a4786f2",
    measurementId: "G-6FJPSVQYQF"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
};

window.onload = init;