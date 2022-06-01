window.addEventListener('load', () => {
    //Check the tasks
    let check = document.querySelectorAll('.roundedDiv');

    check.forEach(element => {        
        element.addEventListener('click', () => {
            element.classList.toggle('isChecked')
        });
    });

    //See the modal for add a task
    $('#btnAddTask').click(function () {
        $('#task-add').modal();
    })
})
