window.addEventListener('load', () => {
    //Check the tasks
    let check = document.querySelectorAll('.roundedDiv');
    let checkIcon = document.querySelectorAll('.checkIcon');
    var taskId = new Array();

    //See the modal for add a task information
    $('#btnAddTask').click(function () {
        $('#add-task-modal').modal();
    });

    // Check the tasks
    // If the task is finish, remove it from finish and add it to in course
    // If the task is in course, check it
    check.forEach((element, i) => {        
        element.addEventListener('click', () => {
            if(element.classList.contains('terminated')){
                //Get the id that the div is checked
                let round = $(element).parent();
                let header = round.parent();
                let card = header.parent();
                let task = card.attr('id');

                //Transfert data to php
                var xhr = new XMLHttpRequest();

                xhr.onreadystatechange = function () {
                    if(this.readyState == 4 && this.status == 200){
                        // Reload the page
                        // LaodTaskPage();
                        window.location.reload();
                    }else if(this.readyState == 4){
                        alert("Erreur lors de la requête : HTTP ERROR " + this.status);
                    }
                }
                
                xhr.open("POST", "/ToDoList/ToDoList/resources/scripts/endFinishJsonTasks.php", true);;
                xhr.setRequestHeader( "Content-Type", "application/json" );
                responseType = 'json';
                xhr.send(JSON.stringify(task));
            }else{
                //Show the check
                element.classList.toggle('isChecked');
                if(element.classList.contains('isChecked')){
                    checkIcon[i].classList.add('show');
                }else{
                    checkIcon[i].classList.remove('show');
                }
            }
        });
    });

    //click on the finish task button
    $('#finishTasks').click(function () {
        $('.isChecked').each(function(i) {
            //Get the card div that is checked
            let round = $(this).parent();
            let header = round.parent();
            let card = header.parent();
            taskId[i] = card.attr('id');
        });

        if(taskId.length > 0){
            //Transfert data to php
            var xhr = new XMLHttpRequest();

            xhr.onreadystatechange = function () {
                if(this.readyState == 4 && this.status == 200){
                    // Reload the page
                    // LaodTaskPage();
                    window.location.reload();
                }else if(this.readyState == 4){
                    alert("Erreur lors de la requête : HTTP ERROR " + this.status);
                }
            }
            
            xhr.open("POST", "/ToDoList/ToDoList/resources/scripts/finishJsonTasks.php", true);;
            xhr.setRequestHeader( "Content-Type", "application/json" );
            responseType = 'json';
            xhr.send(JSON.stringify(taskId));
        }

    });
    
    //Get the values of the modal for add a task
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
    });

    $('.deleteButton').click(function(){
        let header = $(this).parent();
        let card = header.parent();
        let deleteTaskId = card.attr('id');

        //if the form is submit (user confirm delete), remove the task
        $("#confirmation-modal").submit(function(e){
            //Don't refresh the page
            e.preventDefault();

            //Transfert data to php
            var xhr = new XMLHttpRequest();

            xhr.onreadystatechange = function () {
                if(this.readyState == 4 && this.status == 200){
                    // Reload the page
                    // LaodTaskPage();
                    window.location.reload();
                }else if(this.readyState == 4){
                    alert("Erreur lors de la requête : HTTP ERROR " + this.status);
                }
            }
            
            xhr.open("POST", "/ToDoList/ToDoList/resources/scripts/deleteJsonTasks.php", true);;
            xhr.setRequestHeader( "Content-Type", "application/json" );
            responseType = 'json';
            xhr.send(JSON.stringify(deleteTaskId));
        });
    });

    //Edit the task
    $('.EditButtonTask').click(function(){
        let header = $(this).parent();
        let card = header.parent();
        let editTaskId = card.attr('id');

            //Transfert data to php
            var xhr = new XMLHttpRequest();

            xhr.onreadystatechange = function () {
                if(this.readyState == 4 && this.status == 200){
                    var jsonResult = this.response;
                    var result = JSON.parse(jsonResult);
                    //Set the value
                    if(result.task.allDay == true){
                        $('.taskAllDay').attr('checked', "");
                    }else{
                        $('.taskAllDay').removeAttr('checked');
                    }
                    // $('.taskDate').attr('value',"");
                    // $('.hourStart').attr('value',"");
                    // $('.hourEnd').attr('value',"");

                    $('.taskName').attr('value',result.task.title);
                    $('.taskDesc').html(result.task.description);

                    document.querySelectorAll('.taskIcon option').forEach(element => {                        
                        if(element.getAttribute('value') == result.task.icon){
                            element.setAttribute('selected', "");
                        }
                    });
                }else if(this.readyState == 4){
                    alert("Erreur lors de la requête : HTTP ERROR " + this.status);
                }
            }
            
            xhr.open("POST", "/ToDoList/ToDoList/resources/scripts/setEditJsonTask.php", true);;
            xhr.setRequestHeader( "Content-Type", "application/json" );
            responseType = 'json';
            xhr.send(JSON.stringify(editTaskId));

        //if the form is submit (user confirm delete), remove the task
        $("#edit-task").submit(function(e){
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
                        // Reload
                        // window.location.reload();
                        console.log(result)
                    }else{
                        let error = document.querySelector('.alertMessageEdit');
                        error.classList.add('show');
                        error.innerHTML = result.message
                    }
                }else if(this.readyState == 4){
                    alert("Erreur lors de la requête : HTTP ERROR " + this.status);
                }
            }
            
            xhr.open("POST", "/ToDoList/ToDoList/resources/scripts/editJsonTask.php", true);

            data.append("taskId", editTaskId);

            responseType = 'json';
            xhr.send(data);
        });
    });
})


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