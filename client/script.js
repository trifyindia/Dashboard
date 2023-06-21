console.log("start")
	  // Import the functions you need from the SDKs you need
	  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-app.js";
	  // TODO: Add SDKs for Firebase products that you want to use
	  // https://firebase.google.com/docs/web/setup#available-libraries

	  // Your web app's Firebase configuration here (Do not use the existing configuration)
	  const firebaseConfig = {
	    apiKey: "AIzaSyCBwzdcUZBpxz9rrZgNR6679XE44OCUwYA",

  authDomain: "espdata-46d8e.firebaseapp.com",

  databaseURL: "https://espdata-46d8e-default-rtdb.firebaseio.com",

  projectId: "espdata-46d8e",

  storageBucket: "espdata-46d8e.appspot.com",

  messagingSenderId: "244539192053",

  appId: "1:244539192053:web:00f658b86f49769acfcbbc"
	  };

	  // Initialize Firebase
	  firebase.initializeApp(firebaseConfig);


	  // getting reference to the database
	  var database = firebase.database();

	  //getting reference to the data we want
	  var dataRef2 = database.ref('Battery_1');

	  //fetch the data
	   dataRef2.on('value', function(getdata2){
	  	var temp = getdata2.val();
	  	document.getElementById('temperature').innerHTML = "Temperature : " + temp.Temp + "&#8451;";
		console.log(temp);
	  })