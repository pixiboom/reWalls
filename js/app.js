// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyC_QUV2OVoS1JCGAP0GMCZLc9ujcJpKfw4",
  authDomain: "rjtds-dev.firebaseapp.com",
  databaseURL:
    "https://rjtds-dev-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "rjtds-dev",
  storageBucket: "rjtds-dev.appspot.com",
  messagingSenderId: "329951349457",
  appId: "1:329951349457:web:00897b79ab3148f964d3f0",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.auth.Auth.Persistence.LOCAL;

$("#btn-login").click(function () {
  var email = $("#email").val();
  var password = $("#password").val();

  var result = firebase.auth().signInWithEmailAndPassword(email, password);

  result.catch(function (error) {
    var errorCode = error.code;
    var errorMessage = error.message;

    console.log(errorCode);
    console.log(errorMessage);
  });
});

$("#btn-logout").click(function () {
  firebase.auth().signOut();
});

function switchView(view) {
  $.get({
    url: view,
    cache: false,
  }).then(function (data) {
    $("#container").html(data);
  });
}
