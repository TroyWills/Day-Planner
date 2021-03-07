var currentDate = moment().format('MM-DD-YYYY');
printedDate.innerText = ("Current Date:" + "  " + currentDate);

// saveButton on click event to store calendar time and event into local storage 
$(".saveButton").on("click", function() {

// putting taskinput and time into variables to later save in local storage
    var time = $(this).parent().attr("id")
    var taskInput = ($(this).siblings(".eventInput").val().trim());

    // saving user input and time into local storage
    localStorage.setItem(time, taskInput);

  });

  $(document).ready(function() {

// RELOAD data from local storage upon page reload 

    // Print data from local storage for 8AM
    var eightAM = localStorage.getItem("8AM");
    document.getElementById("eightAM").innerHTML = eightAM;  

    // Print data from local storage for 9AM
    var nineAM = localStorage.getItem("9AM");
    document.getElementById("nineAM").innerHTML = nineAM;  
   
    // Print data from local storage for 10AM
    var nineAM = localStorage.getItem("10AM");
    document.getElementById("tenAM").innerHTML = nineAM; 

    // Print data from local storage for 11AM
    var nineAM = localStorage.getItem("11AM");
    document.getElementById("elevenAM").innerHTML = nineAM; 

    // Print data from local storage for 12AM
    var nineAM = localStorage.getItem("12PM");
    document.getElementById("twelvePM").innerHTML = nineAM; 

    // Print data from local storage for 1PM
    var nineAM = localStorage.getItem("1PM");
    document.getElementById("onePM").innerHTML = nineAM; 

    // Print data from local storage for 2PM
    var nineAM = localStorage.getItem("2PM");
    document.getElementById("twoPM").innerHTML = nineAM; 

    // Print data from local storage for 3PM
    var nineAM = localStorage.getItem("3PM");
    document.getElementById("threePM").innerHTML = nineAM; 

    // Print data from local storage for 4PM
    var nineAM = localStorage.getItem("4PM");
    document.getElementById("fourPM").innerHTML = nineAM; 

    // Print data from local storage for 5PM
    var nineAM = localStorage.getItem("5PM");
    document.getElementById("fivePM").innerHTML = nineAM; 
  });
  


