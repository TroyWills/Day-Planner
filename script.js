// var currentDate = moment();
// console.log(currentDate);

// function displayTime() {
//     document.write(currentDate);
// }

// saveButton on click event to store calendar time and event into local storage 
$(".saveButton").on("click", function() {

// putting taskinput and time into variables to later save in local storage
    var time = $(this).parent().attr("id")
    var taskInput = ($(this).siblings("#eventInput").val().trim());
    console.log(time);
    console.log(taskInput);

    // saving user input and time into local storage
    localStorage.setItem(time, taskInput);
});
