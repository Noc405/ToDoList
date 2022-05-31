$(document).ready(function(){
	$("#add-event").submit(function(){
		var values = {};
		$.each($('#add-event').serializeArray(), function(i, field) {
			values[field.name] = field.value;
		});

		console.log(
			values
		);

		alert("Submitted");
	});
});

//Variabes in the calender
var calender = {
	themeSystem: 'bootstrap4',
	// emphasizes business hours
	businessHours: false,
	defaultView: 'month',
	// event dragging & resizing
	editable: false,
	// header
	header: {
		left: 'title',
		center: 'month,agendaWeek,agendaDay',
		right: 'today prev,next'
	},
	events:[],
	dayClick: function() {
		$('#modal-view-event-add').modal();
	},
	eventClick: function(event, jsEvent, view) {
		$('.event-icon').html("<i class='fa fa-"+event.icon+"'></i>");
		$('.event-title').html(event.title);
		$('.event-body').html(event.description);
		$('.eventUrl').attr('href',event.url);
		$('#modal-view-event').modal();
	},
}
//Add the events from the json file
$.get("../../../ToDoList/ToDoList/data/tasks.json", function(data) {
    data.forEach(element => {
		calender.events.push(element)
	});
})

//Load calender
function loadCalender(calenderInfos) {
	'use strict';
	// ------------------------------------------------------- //
	// Calendar
	// ------------------------------------------------------ //
	$(function() {
		// page is ready
		$('#calendar').fullCalendar(calenderInfos)
	});

};
loadCalender(calender);