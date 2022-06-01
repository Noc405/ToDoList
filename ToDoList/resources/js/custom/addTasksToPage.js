$.get("../../../ToDoList/ToDoList/data/tasks.json", function(data) {
    let tasks = new Array(data.length)

    for (let i = 0; i < data.length; i++) {
        tasks[i] = data[i]
    }

    //Filter tasks from gorups
    let tasksFiltred = new Array(tasks.length);
    for (let ii = 0; ii < tasks.length; ii++) {
        let tabindex = 0;
        if(tasks[ii]['group'] == "anglais"){
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
