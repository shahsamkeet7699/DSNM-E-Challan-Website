var firebaseConfig = 
{
    apiKey: "AIzaSyDjZQzAc7EcgaiqvnXKGNaAQ2HNGLRNZMA",
    authDomain: "fir-temp-ed4e5.firebaseapp.com",
    databaseURL: "https://fir-temp-ed4e5.firebaseio.com",
    projectId: "fir-temp-ed4e5",
    storageBucket: "fir-temp-ed4e5.appspot.com",
    messagingSenderId: "484451362232",
    appId: "1:484451362232:web:038d32e19708eea2c15b4d",
    measurementId: "G-85DCWT20RP"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  firebase.auth.Auth.Persistence.LOCAL;

  $("#submit").click(function()
  {
      var email = $("#uname").val();
      var password = $("#psw").val();

      if(email!="" && password!="")
      {
          var result = firebase.auth().signInWithEmailAndPassword(email,password);

          result.catch(function(error)
          {
            var errorCode = error.code;
            var errorMessage = error.message;

            console.log(errorCode);
            console.log(errorMessage);

            window.alert("Message : " + errorMessage);
          });
      }
      else 
      {
          window.alert("Form is not complete. Please fill up all fields to proceed.")
      }
  });

