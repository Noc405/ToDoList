window.addEventListener('load', () => {
    //Check the tasks
    let check = document.querySelectorAll('.roundedDiv');
    let longCross = document.querySelectorAll('.longCheck');
    let littleCross = document.querySelectorAll('.littleCheck');
    var taskId = new Array();

    check.forEach((element, i) => {        
        element.addEventListener('click', () => {
            //Show the check
            element.classList.toggle('isChecked');
            longCross[i].classList.toggle('show');
            littleCross[i].classList.toggle('show');
        });
    });

    $('#finishTasks').click(function () {
        $('.isChecked').each(function(i) {
            //Get the card div that is checked
            let round = $(this).parent();
            let header = round.parent();
            let card = header.parent();
            taskId[i] = card.attr('id');
            card.remove();
        });

        if(taskId.length > 0){
            //Transfert data to php
            var xhr = new XMLHttpRequest();

            xhr.onreadystatechange = function () {
                if(this.readyState == 4 && this.status == 200){
                    // let htmlLink = document.querySelector('.linkFinishTasks').innerHTML;
                    // let htmlLinkSeparated = htmlLink.split(" : ");
                    // let newTerminateTasks = parseInt(htmlLinkSeparated[1]) + taskId.length;

                    // document.querySelector('.linkFinishTasks').innerHTML = `Terminées : ${newTerminateTasks}`;
                    window.location.reload();
                }else if(this.readyState == 4){
                    alert("Erreur lors de la requête : HTTP ERROR " + this.status);
                }
            }
            
            xhr.open("POST", "/ToDoList/ToDoList/resources/scripts/finishJsonTasks.php", true);;
            xhr.setRequestHeader( "Content-Type", "application/json" );
            // responseType = 'json';
            xhr.send(JSON.stringify(taskId));
        }

    });

    //See the modal for add a task
    $('#btnAddTask').click(function () {
        $('#add-task-modal').modal();
    });
})

//Get the values of the modal
$(document).ready(function(){
	$("#add-task").submit(function(e){
        //Don't refresh the page
        e.preventDefault();

        var data = new FormData(this)
        //Transfert data to php
        var xhr = new XMLHttpRequest();
        
        xhr.onreadystatechange = function () {
            if(this.readyState == 4 && this.status == 200){
                //Get the result and set it to json
                var jsonResult = this.response;
                var result = JSON.parse(jsonResult);
                //reload the page if the result is 1
                if(result.success == 1){
                    //Hide the form
                    $("#add-task-modal").modal('hide');

                    // Reload
                    window.location.reload();
                }else{
                    let error = document.querySelector('.alertMessage');
                    error.classList.add('show');
                    error.innerHTML = result.message
                }
            }else if(this.readyState == 4){
                console.log(this.response);
                alert("Erreur lors de la requête : HTTP ERROR " + this.status);
            }
        }
        
        xhr.open("POST", "/ToDoList/ToDoList/resources/scripts/importJsonTasks.php", true);

        //Get the group of the task for send it
        let groupName;
        URLvalues = orderSearch();
        groupName = GetGroupName(URLvalues);

        data.append("group", groupName);

        responseType = 'json';
        xhr.send(data);

        return false;
	});
});

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