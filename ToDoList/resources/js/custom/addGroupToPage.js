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
                <a href="index.php?controller=task&action=seeTask&group=${element['name']}">
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
                </a>
            </div>
            `;
        });
    }else{

    }
});

//Filter groups
// let groupsFiltred = new Array(groups.length);
// for (let ii = 0; ii < groups.length; ii++) {
//     let tabindex = 0;
//     if(groups[ii]['name'] == "anglais"){
//         groupsFiltred[tabindex] = groups[ii]
//         tabindex += 1;
//     }
// }

//Add an event click on the loaded ressources
// window.addEventListener('load', () => {

//     document.querySelectorAll('.card').forEach(element => {
//         element.addEventListener('click', () =>{        
//             //Go to the tasks
//             console.log('click')
//         });
//     });
// })