// Todays date
$("#currentDay").text(moment().format("dddd, MMMM Do"));


// Color changes on time change
var currentTime = moment().format("h");
//console.log(currentTime);


//Change textarea background color based on time       
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



// Local storage
 var tasks = document.querySelector('.textarea');
//var tasks = $(".textarea");

  $('#save-btn').click(function(setDailyTasks) {

    dailyTasks = tasks.value;
      
      localStorage.setItem("tasks", JSON.stringify(dailyTasks))
      //console.log(localStorage);
  });


function getTasks() {
    var tasksFromLocal = JSON.parse(window.localStorage.getItem("tasksFromLocal")) || [];
    tasksFromLocal.sort(function (a, b) {
        return b.score - a.score;
    });

    for (var i = 0; i < tasksFromLocal.length; i++) {
        let pText = document.createElement("P");
        pText.innerHTML = tasksFromLocal[i]
    }
}


// document.body.addEventListener('click', textArea);


//   // EVENT DELEGATION!!! - THIS IS TARGETING TEXT AREA
//   function textArea(e){
//      if(e.target.classList.contains('textarea'))
//       console.log('hello');

//   };


// document.body.addEventListener('click', saveButtonClick)

// function saveButtonClick(e){
//     if(e.target.classList.contains('saveBtn'))
//     var tasks = $(".textarea");
//     dailyTasks = tasks.value;
//     localStorage.setItem("tasks", JSON.stringify(dailyTasks))
//     console.log('button click')
// }










// //Grabbing task IDs for time slots
// var tasks9AM = document.getElementById("09");
// var tasks10AM = document.getElementById("10");
// var tasks11AM = document.getElementById("11");
// var tasks12PM = document.getElementById("12");
// var tasks1PM = document.getElementById("13");
// var tasks2PM = document.getElementById("14");
// var tasks3PM = document.getElementById("15");
// var tasks4PM = document.getElementById("16");
// var tasks5PM = document.getElementById("17");



// var localStorageSave = function() {
//     var timeBlockElements = $(".textarea");

//     //loop through taskarea classes
//     for (var i = 0 ; i < timeBlockElements.length ; i++) {

//         //Get element i's ID as a string
//         var elementID = timeBlockElements[i].id;

//         //get element by ID
//         var manipID = document.getElementById(timeBlockElements[i].id)
// }
// };
//   $('#save-btn').click(function() {

//     dailyTasks = tasks.value;
      
//       localStorage.setItem("tasks", JSON.stringify(localStorageSave))
//       console.log(localStorage);
//   });