const controller = {}

controller.register = (dataRegister) => {}

const registerAuth = async (data) => {
  try {
    await firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
    firebase.auth().currentUser.sendEmailVerification();
    alert("The Email has been Registed, please check your email");


  }
  catch (err) {
    console.log(err);
    alert(err.message)
  }
}