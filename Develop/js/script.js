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
 //var tasks = document.querySelector('.textarea');
//var tasks = $(".textarea");


$(".saveBtn").click(function () {
    let hour = $(this).parent().attr("id");
    let description = $(this).parent().children("textarea").val();
    localStorage.setItem(hour, description);
    //console.log(localStorage);
  });
getTasksFromLocal();


function getTasksFromLocal() {
    //let getTask = localStorage.getItem('value');
    // document.querySelector('.textarea').innerHTML = getTask; 
    //$(this).parent().children("textarea").text.Content = getTask;
$("#hour9 .textarea").val(localStorage.getItem("hour9"));
$("#hour10 .textarea").val(localStorage.getItem("hour10"));
$("#hour11 .textarea").val(localStorage.getItem("hour11"));
$("#hour12 .textarea").val(localStorage.getItem("hour12"));
$("#hour13 .textarea").val(localStorage.getItem("hour13"));
$("#hour14 .textarea").val(localStorage.getItem("hour14"));
$("#hour15 .textarea").val(localStorage.getItem("hour15"));
$("#hour16 .textarea").val(localStorage.getItem("hour16"));
$("#hour17 .textarea").val(localStorage.getItem("hour17"));
};

