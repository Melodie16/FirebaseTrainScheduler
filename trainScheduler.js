//Go to Firebase, create a new project Connect
var config = {
    apiKey: "AIzaSyAmKB5kmLhWiNMlZrSDawnYURwMcUgyXHw",
    authDomain: "trainscheduler-8f4d6.firebaseapp.com",
    databaseURL: "https://trainscheduler-8f4d6.firebaseio.com",
    // projectId: "trainscheduler-8f4d6",
    storageBucket: "trainscheduler-8f4d6.appspot.com",
    // messagingSenderId: "829029729915"
  };
  
//Pull the config info and initialize Firebase
 firebase.initializeApp(config);

//Create a variable for the firebase database
var database = firebase.database();

//Create a click event to get the train info
$("#Submit").on("click", function(event) {
    event.preventDefault();
  
//Create variables to hold the input data into an object
var trainName = $("#train-name-input").val().trim();
var trainDestination = $("#destination-input").val().trim();
var firstTraintime = moment($("#train-time-input").val().trim(), "MM/DD/YYYY").format("X");
var trainFrequency = $("frequency-input").val().trim();

// Creates local "temporary" object for holding employee data
  var newTrain = {
    name: trainName,
    destination: trainDestination,
    time: firstTraintime,
    frequency: trainFrequency
  };

// Upload train info into the database
database.ref().push(newTrain);

//Logs everything to console log
console.log(newTrain.name);
  console.log(newTrain.destination);
  console.log(newTrain.firstTraintime);
  console.log(newTrain.trainFrequency);

//Create an alert to confirm the new train info was added
alert("New Train successfully added");

 // Clears all of the text-boxes
 $("#train-name-input").val("");
 $("#destination-input").val("");
 $("#train-time-input").val("");
 $("#frequency-input").val("");
});
