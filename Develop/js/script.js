// Todays date
$("#currentDay").text(moment().format("dddd, MMMM Do"));


// Color changes on time change
var currentTime = moment().format("h");
//console.log(currentTime);


//Change textarea background color based on time       https://stackoverflow.com/questions/62462599/how-can-i-change-elements-style-based-on-the-time-of-day
var checkTime = function () {

    //Get Current time
    var currentTime = moment().format('H');

    //get all elements with class "taskarea"
    var timeBlockElements = $(".textarea");

    //loop through taskarea classes
    for (var i = 0 ; i < timeBlockElements.length ; i++) {

        //Get element i's ID as a string
        var elementID = timeBlockElements[i].id;

        //get element by ID
        var manipID = document.getElementById(timeBlockElements[i].id)

        //remove any old classes from element
        $(timeBlockElements[i].id).removeClass(".present .past .future");

        // apply new class if task is present/past/future
        if (elementID < currentTime) {
            $(manipID).addClass("past");
        } else if (elementID > currentTime) {
            $(manipID).addClass("future");
        } else {
            $(manipID).addClass("present");
        }
    }
}

// checkTime every 5 minutes
setInterval(checkTime(), (1000 * 60) * 5);



var tasks = document.querySelector('.textarea');


// saving into local storage  TODO
  $('#save-btn').click(function() {
      localStorage.setItem("tasks", JSON.stringify(currentTime))
  });