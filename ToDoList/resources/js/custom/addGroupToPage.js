$.get("../../../ToDoList/ToDoList/data/group.json", function(data) {
    let groups = new Array(data.length)

    for (let i = 0; i < data.length; i++) {
        groups[i] = data[i]
    }

    if(groups.length > 0){
        let contentGroup = document.querySelector('.contentGroup');

        groups.forEach(element => {
            contentGroup.innerHTML += `
            <div class="card">
                <div class="card-header d-flex">
                    <div class="d-flex ml-2">
                        <span class="icon-copy dw dw-menu row align-self-center" style="color:${element['color']};"></span>
                    </div>
                    <button class="btn btn-block text-left" id="groupName" style="color:${element['color']};">
                        ${element['name']}
                    </button>
                    <div class="d-flex">
                        <span class="icon-copy dw dw-right-chevron row align-self-center"></span>
                    </div>
                </div>
            </div>
            `;
        });
    }else{

    }
});