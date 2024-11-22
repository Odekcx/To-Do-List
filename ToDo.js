const statusList = {
    "In Progress": "In Progress",
    "Done": "Done",
    "Wait": "Wait",
};

function checkForAvailability () {
    for (const key in list) {
        return key in list;
    };
};

const list = { };

function changeStatus (task) {
    if (checkForAvailability()) {
        list[task] = statusList["In Progress"];
    } else {

    };

function addTask (task) {
    list[task] = statusList["Wait"];
    };

function compliteTask (task) {
    list[task] = statusList["Done"];
    };

function showList ( ) {

    };
