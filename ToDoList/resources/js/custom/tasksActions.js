window.addEventListener('load', () => {
    //Check the tasks
    let check = document.querySelectorAll('.roundedDiv');

    check.forEach(element => {        
        element.addEventListener('click', () => {
            element.classList.toggle('isChecked')
        });
    });
})

//See the modal for add a task
$('#btnAddTask').click(function () {
    $('#add-task-modal').modal();
})

//Get the values of the modal
$(document).ready(function(){
	$("#add-task").submit(function(){
		var values = {};
		$.each($('#add-task').serializeArray(), function(i, field) {
			values[field.name] = field.value;
		});

        let donnees = new Array()
        donnees = setDonnees(values);
        console.log(donnees)

		alert("Submitted");
	});
});

function setDonnees(valuesFromForm) {
    //check that the user enter the values
    if(valuesFromForm['name'] != '' && valuesFromForm['date'] != ''){
        let values = new Array();
        //Set the tilte
        values['title'] = valuesFromForm['name'];
        //Set the description
        values['description'] = valuesFromForm['desc'];

        //Set the dates
        let dates = valuesFromForm['date'].split(' - ');
        //If the user select one date
        if(dates.length == 1){
            let separateDate = dates[0].split('/');
            let ordredDate = new Array
            if(valuesFromForm['allDay'] == "on"){
                //If the user don't set the time
                ordredDate['startDate'] = separateDate[2] + "-" + separateDate[0] + "-" + separateDate[1];
                ordredDate['endDate'] = ordredDate['startDate'];
            }else{
                //if the user set the time
                let ordredHour = new Array();

                ordredHour = orderHour(valuesFromForm);

                //Set the date
                ordredDate['startDate'] = separateDate[2] + "-" + separateDate[0] + "-" + separateDate[1];
                ordredDate['endDate'] = ordredDate['startDate'];

                //Add the hour
                ordredDate['startDate'] += "T" + ordredHour['startHour'];
                ordredDate['endDate'] += "T" + ordredHour['endHour']
            }

            values['start'] = ordredDate['startDate'];
            values['end'] = ordredDate['endDate'];
        }
        //If the user select two dates
        else if (dates.length == 2) {
            let separateDateStart = dates[0].split('/');
            let separateDateEnd = dates[1].split('/');
            let ordredDate = new Array
            if(valuesFromForm['allDay'] == "on"){
                //If the user don't set the time
                ordredDate['startDate'] = separateDateStart[2] + "-" + separateDateStart[0] + "-" + separateDateStart[1];
                ordredDate['endDate'] = separateDateEnd[2] + "-" + separateDateEnd[0] + "-" + separateDateEnd[1];
            }else{
                //if the user set the time
                let ordredHour = new Array();

                ordredHour = orderHour(valuesFromForm);

                //Set the date
                ordredDate['startDate'] = separateDateStart[2] + "-" + separateDateStart[0] + "-" + separateDateStart[1];
                ordredDate['endDate'] = separateDateEnd[2] + "-" + separateDateEnd[0] + "-" + separateDateEnd[1];

                //Add the hour
                ordredDate['startDate'] += "T" + ordredHour['startHour'];
                ordredDate['endDate'] += "T" + ordredHour['endHour']
            }

            values['start'] = ordredDate['startDate'];
            values['end'] = ordredDate['endDate'];
        }

        //Set the icon
        values['icon'] = valuesFromForm['icon'];
        //Set the group
        //Get the url
        var URLvalues = new Array();
        let groupName;
        URLvalues = orderSearch();
        groupName = GetGroupName(URLvalues);
        //Set the array
        values['group'] = groupName;
        //Set the all Day
        if(valuesFromForm['allDay'] == "on"){
            values['allDay'] = true;
        }else{
            values['allDay'] = false;
        }

        return values
    }else{
        return 'error';
    }
}

function orderHour(valuesFromForm) {
    let ordredHour = new Array();

    //Remove the "am" and the "pm" from the start hour
    let separateStartHour = valuesFromForm['starthour'].split(' ');
    if (separateStartHour[1] == "pm"){
        let separateStartHourMinuts = separateStartHour[0].split(':');
        let parsedHourStart = parseInt(separateStartHourMinuts[0]);
        let startHour = parsedHourStart + 12;
        let startMinuts = separateStartHourMinuts[1];
        ordredHour['startHour'] = startHour + ":" + startMinuts;
    }else{
        if(parseInt(separateStartHour[0]) < 10){
            ordredHour['startHour'] = "0" + separateStartHour[0];
        }else{
            ordredHour['startHour'] = separateStartHour[0];
        }
    }

    //Remove the "am" and the "pm" from the end hour
    let separateEndHour = valuesFromForm['endhour'].split(' ');
    if (separateEndHour[1] == "pm"){
        let separateEndHourMinuts = separateEndHour[0].split(':');
        let parsedHourEnd = parseInt(separateEndHourMinuts[0]);
        let endHour = parsedHourEnd + 12;
        let endMinuts = separateEndHourMinuts[1];
        ordredHour['endHour'] = endHour + ":" + endMinuts;
    }else{
        if(parseInt(separateEndHour[0]) > 10){
            ordredHour['endHour'] = "0" + separateEndHour[0];
        }else{
            ordredHour['endHour'] = separateEndHour[0];
        }
    }

    return ordredHour;
}

function orderSearch() {        
    let searchUrl = window.location.search;
    //Get the group where is the user
    var search = searchUrl.substr(1);
    //Gets the elements of the serach separately in an array
    //(ex: gets vaut : [controller=home], [action=home])
    var gets = search.split('&');
    var values = new Array();

    //Get the values and the name in an array 
    //(ex: si "element" égal : "controller=home", l'index [0] va valoir "controller" et l'index [1] va valoir "home")
    gets.forEach(element => {
        var tempGetsValues = element.split('=');

        values.push(tempGetsValues[0]);
        values.push(tempGetsValues[1]);
    });
    return values;
}
function GetGroupName(valuesOfGet) {
    
    //Get the value off the get "os" or of the get "constructor"
    for (let i = 0; i < valuesOfGet.length; i++) {
        if(valuesOfGet[i] == "group"){
            return valuesOfGet[i + 1];
        }
    }
    return "";
}

// //Reload
//window.location.reload();
