window.addEventListener('load', () => {
    //See the modal for add a group
    $('#btnAddGroup').click(function () {
        $('#add-group-modal').modal();
    });
});

$(document).ready(function(){
	$("#add-group").submit(function(e){
        //Don't refresh the page
        e.preventDefault();

        var data = new FormData(this)
        //Transfert data to php
        var xhr = new XMLHttpRequest();
        
        xhr.onreadystatechange = function () {
            if(this.readyState == 4 && this.status == 200){
                //Get the result and set it to json
                var jsonResult = this.response;
                console.log(jsonResult)
                var result = JSON.parse(jsonResult);
                //reload the page if the result is 1
                if(result.success == 1){
                    //Hide the form
                    $("#add-group-modal").modal('hide');

                    //Reload
                    window.location.reload();
                }else{
                    let error = document.querySelector('.alertMessage');
                    error.classList.add('show');
                    error.innerHTML = result.message;
                }
            }else if(this.readyState == 4){
                console.log(this.response);
                alert("erreur lors de l'execution de la requête");
            }
        }
        
        xhr.open("POST", "/ToDoList/ToDoList/resources/scripts/importJsonGroups.php", true);
        // responseType = 'json';
        xhr.send(data);

        return false;
	});
});