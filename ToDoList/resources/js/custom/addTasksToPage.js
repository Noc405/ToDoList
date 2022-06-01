$.get("../../../ToDoList/ToDoList/data/tasks.json", function(data) {
    let tasks = new Array(data.length)

    //Get all the tasks
    for (let i = 0; i < data.length; i++) {
        tasks[i] = data[i]
    }

    var URLvalues = new Array();
    let groupName;
    URLvalues = orderSearch();
    groupName = GetGroupName(URLvalues);

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

    console.log(tasks)

    //Filter tasks from gorups
    let tasksFiltred = new Array(tasks.length);
    let tabindex = 0;
    for (let ii = 0; ii < tasks.length; ii++) {
        if(tasks[ii]['group'] == groupName){
            tasksFiltred[tabindex] = tasks[ii]
            tabindex += 1;
        }
    }

    if(tasks.length > 0){
        let contentGroup = document.querySelector('.contentTask');

        tasksFiltred.forEach(element => {
            contentGroup.innerHTML += `
            <div class="card">
                <div class="card-header d-flex">
                    <div class="round d-flex align-self-center">
                        <div class="roundedDiv d-flex">
                            <div class="littleCheck"></div>
                            <div class="longCheck"></div>
                        </div>
                    </div>
                    <button id="groupName" href="#" class="btn btn-block text-left">
                        ${element.title}
                    </button>
                    <a href="#" class="d-flex" data-toggle="modal" data-target="#confirmation-modal" type="button">
                        <span class="icon-copy dw dw-delete-3 row align-self-center"></span>
                    </a>
                </div>
            </div>
            `;

            // Add an event click on the loaded ressources
            window.addEventListener('load', () => {
                document.querySelectorAll('#groupName').forEach((task, ii) => {
                    task.addEventListener('click', () =>{        
                        $('.taskIcon').html("<i class='fa fa-"+tasksFiltred[ii].icon+"'></i>");
                        $('.taskTitle').html(tasksFiltred[ii].title);
                        $('.taskBody').html(tasksFiltred[ii].description);
                        $('#task-info').modal();
                    });
                });
            })
        });
        
    }else{

    }

});
