const statusList = {
    "In Progress": "In Progress",
    "Done": "Done",
    "Wait": "Wait",
};

const list = {
    "create a new practice task": "In Progress", 
	"make a bed": "Done",
	"write a post": "To Do",
};

function checkForAvailability (task) {
    return task in list;
};

function showMessage () {
    console.log("Введите правильное имя дела.");
    showList();
};

function changeStatus (task) {
    if (checkForAvailability(task)) {
        list[task] = statusList["In Progress"];
    } else {
        showMessage();
    };
};    

function addTask (task) {
        list[task] = statusList["Wait"];
};

function compliteTask (task) {
    if (checkForAvailability(task)) {
        list[task] = statusList["Done"];
    } else {
        showMessage();
    };
};

function showList () {
    for (const key in list) {
        console.log(key)
    };
};

// console.log(checkForAvailability("make a bed1"));
addTask("--------");
changeStatus("make a bed1");