function LaodTaskPage() {
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

        //Filter tasks from gorups
        let tasksFiltred = new Array();
        let tasksFinish = new Array();
        let tabindex = 0;
        let numberTasksFinish = 0;
        for (let ii = 0; ii < tasks.length; ii++) {
            if(tasks[ii]['group'] == groupName){
                if(tasks[ii]['finish'] == false){
                    tasksFiltred[tabindex] = tasks[ii]
                    tabindex += 1;
                } else {
                    tasksFinish[numberTasksFinish] = tasks[ii];
                    numberTasksFinish += 1;
                }
            }
        }

        if(numberTasksFinish > 0 || tasksFiltred.length > 0){
            let contentPage = document.querySelector('.contentPage');
            //Delete all the elements in the div
            contentPage.innerHTML = "";
            contentPage.innerHTML += `<div class="contentTask"></div>`;

            let contentGroup = document.querySelector('.contentTask');

            //Show the elements
            tasksFiltred.forEach(element => {
                contentGroup.innerHTML += `
                <div class="card" id="${element['id']}">
                    <div class="card-header d-flex">
                        <div class="round d-flex align-self-center">
                            <div class="roundedDiv d-flex">
                                <div class="littleCheck"></div>
                                <div class="longCheck"></div>
                            </div>
                        </div>
                        <button href="#" class="btn btn-block text-left taskName">
                            ${element.title}
                        </button>
                        <a href="#" class="d-flex" data-toggle="modal" data-target="#confirmation-modal" type="button">
                            <span class="icon-copy dw dw-delete-3 row align-self-center"></span>
                        </a>
                    </div>
                </div>
                `;

            });

            //Add the terminated tasks
            contentPage.innerHTML += `
            <div id="accordion"></div>
            <div class="mt-3">
                <div>
                    <button class="btn btn-block linkFinishTasks" data-toggle="collapse" data-target="#terminedTasks">
                        <i class="fa fa-angle-down angleFinishedTask" aria-hidden="true"></i> Terminées : ${numberTasksFinish}
                    </button>
                </div>
            `;

            tasksFinish.forEach(element => {
                contentPage.innerHTML += `
                <div id="terminedTasks" class="collapse" data-parent="#accordion">
                    <div class="terminadedTasksContent">
                        <div class="card" id="${element['id']}">
                            <div class="card-header d-flex">
                                <div class="round d-flex align-self-center">
                                    <div class="roundedDiv isChecked terminated d-flex">
                                        <div class="littleCheck show"></div>
                                        <div class="longCheck show"></div>
                                    </div>
                                </div>
                                <button href="#" class="btn btn-block text-left taskFinishName">
                                    ${element['title']}
                                </button>
                                <a href="#" class="d-flex" data-toggle="modal" data-target="#confirmation-modal" type="button">
                                    <span class="icon-copy dw dw-delete-3 row align-self-center"></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                `;
            });

            contentPage.innerHTML += `
                </div>
            </div>
            `;

            //Add the two buttons
            contentPage.innerHTML += `
            <button type="button" class="btn btn-success mt-3" id="finishTasks">Terminer les tâches cochées</button>
            <button type="button" id="btnAddTask" class="btn btn-info addTask">
                <div class="crossHorizontal"></div>
                <div class="crossVertical"></div>
            </button>
            `;

            // Add an event click on the loaded ressources
            window.addEventListener('load', () => {
                AddEventOnTasks();
            })
        }else{
            let contentGroup = document.querySelector('.contentTask');

            contentGroup.innerHTML = `
            <div class="d-flex w-100 justify-content-around">
                <div class="text-center">
                    <p>Il n'y a pas de tâches dans ce groupe</p>
                </div>
            </div>
            `;
        }

    });
};

LaodTaskPage();

function AddEventOnTasks() {
    // Show the informations of the tasks
    document.querySelectorAll('.taskName').forEach((task, ii) => {
        task.addEventListener('click', () =>{        
            $('.taskIcon').html("<i class='fa fa-"+tasksFiltred[ii].icon+"'></i>");
            $('.taskTitle').html(tasksFiltred[ii].title);
            $('.taskBody').html(tasksFiltred[ii].description);
            $('#task-info').modal();
        });
    });
    // Show the informations of the finished task
    document.querySelectorAll('.taskFinishName').forEach((task, ii) => {
        task.addEventListener('click', () =>{        
            $('.taskIcon').html("<i class='fa fa-"+tasksFinish[ii].icon+"'></i>");
            $('.taskTitle').html(tasksFinish[ii].title);
            $('.taskBody').html(tasksFinish[ii].description);
            $('#task-info').modal();
        });
    });
    let angle = document.querySelector('.angleFinishedTask');
    let buttonFinishedTasks = document.querySelector('.linkFinishTasks');
    // Rotate the angle when click on fonished tasks
    buttonFinishedTasks.addEventListener('click', () => {
        if(document.querySelector('.collapse ').classList.contains('show')){
            angle.classList.remove('fa-angle-up');
            angle.classList.add('fa-angle-down');
        }else{
            angle.classList.remove('fa-angle-down');
            angle.classList.add('fa-angle-up');
        }
    });
}