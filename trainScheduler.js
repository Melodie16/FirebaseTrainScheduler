//Go to Firebase, create a new project Connect
var config = {
    apiKey: "AIzaSyAmKB5kmLhWiNMlZrSDawnYURwMcUgyXHw",
    authDomain: "trainscheduler-8f4d6.firebaseapp.com",
    databaseURL: "https://trainscheduler-8f4d6.firebaseio.com",
    projectId: "trainscheduler-8f4d6",
    storageBucket: "trainscheduler-8f4d6.appspot.com",
    messagingSenderId: "829029729915"
  };
  
//Pull the config info and initialize Firebase
 firebase.initializeApp(config);

//Create a variable for the firebase database
var database = firebase.database();

//Create a click event to get the train info
$("#add-train-btn").on("click", function(event) {
    event.preventDefault();
  
//Create variables to hold the input data into an object
var trainName = $("#train-name-input").val().trim();
var trainDestination = $("#destination-input").val().trim();
var firstTraintime = moment($("#train-time-input").val().trim(), 'HH,mm');
var trainFrequency = $("frequency-input").val().trim();

// Creates local "temporary" object for holding train info
  var newTrain = {
    name: trainName,
    destination: trainDestination,
    time: firstTraintime,
    frequency: trainFrequency
  };

// Upload train info into the database
database.ref().push(newTrain);
 
//Logs everything to console log
//  console.log(newTrain.name);
//   console.log(newTrain.destination);
//   console.log(newTrain.firstTraintime);
//   console.log(newTrain.trainFrequency);

// //Create an alert to confirm the new train info was added
// alert("New Train successfully added");

//  // Clears all of the text-boxes
 $("#train-name-input").val("");
 $("#destination-input").val("");
 $("#train-time-input").val("");
 $("#frequency-input").val("");
});

// // Create Firebase event for adding a train to the database and a row in the html when a user adds an entry
 database.ref().on("child_added", function(childSnapshot) {
  // console.log(childSnapshot.val());

//     // Store everything into a variable.
    var trainName = childSnapshot.val().name;
    var trainDestination = childSnapshot.val().destination;
    var firstTraintime = childSnapshot.val().time;
    var trainFrequency = childSnapshot.val().frequency;

//   // Train Info
  // console.log(trainName);
  // console.log(trainDestination);
  // console.log(firstTraintime);
  // console.log(trainFrequency);
 });