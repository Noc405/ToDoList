$.get("../../../ToDoList/ToDoList/data/group.json", function(data) {
    let groups = new Array(data.length)

    for (let i = 0; i < data.length; i++) {
        groups[i] = data[i]
    }

    if(groups.length > 0){
        let contentGroup = document.querySelector('.contentGroup');
        //Delte the content of the div
        contentGroup.innerHTML = "";
        //Show the elemtents in the div
        groups.forEach(element => {
            contentGroup.innerHTML += `
            <div class="card" id="${element['id']}">
                <div class="card-header d-flex">
                    <a href="index.php?controller=task&action=seeTask&group=${element['name']}" class="w-100 d-flex">
                        <div class="d-flex ml-2">
                            <span class="icon-copy dw dw-menu row align-self-center" style="color:${element['color']};"></span>
                        </div>
                        <button class="btn btn-block text-left" id="groupName" style="color:${element['color']};">
                            ${element['name']}
                        </button>
                        <div class="d-flex">
                            <span class="icon-copy dw dw-right-chevron row align-self-center"></span>
                        </div>
                    </a>
                    <a href="#" class="d-flex deleteButtonGroup" data-toggle="modal" data-target="#confirmation-modal" type="button">
                        <span class="icon-copy dw dw-delete-3 row align-self-center"></span>
                    </a>
                </div>
            </div>
            `;
        });
    }else{

    }
});