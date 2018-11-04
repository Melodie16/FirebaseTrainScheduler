//Go to Firebase, create a new project Connect
var config = {
    apiKey: "AIzaSyAmKB5kmLhWiNMlZrSDawnYURwMcUgyXHw",
    authDomain: "trainscheduler-8f4d6.firebaseapp.com",
    databaseURL: "https://trainscheduler-8f4d6.firebaseio.com",
    projectId: "trainscheduler-8f4d6",
    storageBucket: "trainscheduler-8f4d6.appspot.com",
    messagingSenderId: "829029729915"
  };
  
  firebase.initializeApp(config);

  var database = firebase.database();
  
  // 2. Button for adding Employees
  $("#add-train-btn").on("click", function(event) {
    event.preventDefault();
  
    // Grabs user input
    var trainName = $("#train-name-input").val().trim();
    var trainDestination = $("#destination-input").val().trim();
    var firstTrainTime = ("#train-time-input").val().trim();
    var trainFrequency = $("#frequency-input").val().trim();
  
    // Creates local "temporary" object for holding employee data
    var newTrain = {
      name: trainName,
      destination: trainDestination,
      firstTime: firstTrainTime,
      frequency: trainFrequency
    };
  
    // Uploads employee data to the database
    database.ref().push(newTrain);
  
    // Logs everything to console
    console.log(newTrain.name);
    console.log(newTrain.destination);
    console.log(newTrain.firstTime);
    console.log(newTrain.frequency);
  
    alert("New Train successfully added");
  
    // Clears all of the text-boxes
    $("#train-name-input").val("");
    $("#destination-input").val("");
    $("#train-time-input").val("");
    $("#frequency-input").val("");
  });
  
  // 3. Create Firebase event for adding trains to the database and a row in the html when a user adds an entry
  database.ref().on("child_added", function(childSnapshot) {
    console.log(childSnapshot.val());
  
    // Store everything into a variable.
    var trainName = childSnapshot.val().name;
    var trainDestination = childSnapshot.val().destination;
    var firstTrainTime = childSnapshot.val().firstTime;
    var trainFrequency = childSnapshot.val().frequency;
  
    // Train Info
    console.log(trainName);
    console.log(trainDestination);
    console.log(firstTrainTime);
    console.log(trainFrequency);
  
    // Calculate next arrival variable
    var nextArrival = ("3:30");
  
   //Calculate minutes away
    var minutesAway = ("3");
  
    // Create the new row
    var newRow = $("<tr>").append(
      $("<td>").text(trainName),
      $("<td>").text(trainDestination),
      $("<td>").text(trainFrequency),
      $("<td>").text(nextArrival),
      $("<td>").text(minutesAway),
    );
  
    // Append the new row to the table
    $("#train-table > tbody").append(newRow);
  });
  