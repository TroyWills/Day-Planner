var currentDate = moment();
console.log(currentDate);


function displayTime() {
    document.write(currentDate);
}

// window.onload = displayTime;

var 8AM = [];

// saveButton on click event to store calendar time and event into local storage 
$(".saveButton").on("click", function() {

    // setting the variables for time and event from save button 
    val event = $(this).("eventInput").val().trim();
    val time - $(this).("timeSaved").val().trim();

    // storing event & time in local storage
    localStorage.setItem(event, time);
  });