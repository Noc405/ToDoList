window.addEventListener('load', () => {
    //See the modal for add a group
    $('#btnAddGroup').click(function () {
        $('#add-group-modal').modal();
    });

    //Add a group
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
                    var result = JSON.parse(jsonResult);
                    //reload the page if the result is 1
                    if(result.success == 1){
                        //Hide the form
                        $("#add-group-modal").modal('hide');
                        //Reload
                        loadGroups();
                    }else{
                        let error = document.querySelector('.alertMessage');
                        error.classList.add('show');
                        error.innerHTML = result.message;
                    }
                }else if(this.readyState == 4){
                    alert("erreur lors de l'execution de la requête");
                }
            }
            
            xhr.open("POST", "/ToDoList/ToDoList/resources/scripts/importJsonGroups.php", true);
            responseType = 'json';
            xhr.send(data);
    
            return false;
        });
    });

    //Delete the group
    $('.deleteButtonGroup').click(function(){
        let header = $(this).parent();
        let card = header.parent();
        let deleteGroupId = card.attr('id');

        //if the form is submit (user confirm delete), remove the task
        $("#confirmation-modal").submit(function(e){
            //Don't refresh the page
            e.preventDefault();

            //Transfert data to php
            var xhr = new XMLHttpRequest();

            xhr.onreadystatechange = function () {
                if(this.readyState == 4 && this.status == 200){
                    $("#confirmation-modal").modal('hide');
                    // Reload the page
                    loadGroups();
                }else if(this.readyState == 4){
                    alert("Erreur lors de la requête : HTTP ERROR " + this.status);
                }
            }
            
            xhr.open("POST", "/ToDoList/ToDoList/resources/scripts/deleteJsonGroup.php", true);;
            xhr.setRequestHeader( "Content-Type", "application/json" );
            // responseType = 'json';
            xhr.send(JSON.stringify(deleteGroupId));
        });
    });
    
    //Edit the group
    $('.EditButtonGroup').click(function(){
        let header = $(this).parent();
        let card = header.parent();
        let editGroupId = card.attr('id');

            //Transfert data to php
            var xhr = new XMLHttpRequest();

            xhr.onreadystatechange = function () {
                if(this.readyState == 4 && this.status == 200){
                    var jsonResult = this.response;
                    var result = JSON.parse(jsonResult);
                    //Set the value
                    $('.groupName').attr('value',result.group.name);
                    $('.groupColor').attr('value',result.group.color);
                }else if(this.readyState == 4){
                    alert("Erreur lors de la requête : HTTP ERROR " + this.status);
                }
            }
            
            xhr.open("POST", "/ToDoList/ToDoList/resources/scripts/setEditJsonGroup.php", true);;
            xhr.setRequestHeader( "Content-Type", "application/json" );
            responseType = 'json';
            xhr.send(JSON.stringify(editGroupId));

        //if the form is submit (user confirm delete), remove the task
        $("#edit-group").submit(function(e){
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
                        $("#edit-group-modal").modal('hide');
                        // Reload
                        loadGroups();
                    }else{
                        let error = document.querySelector('.alertMessageEdit');
                        error.classList.add('show');
                        error.innerHTML = result.message
                    }
                }else if(this.readyState == 4){
                    alert("Erreur lors de la requête : HTTP ERROR " + this.status);
                }
            }
            
            xhr.open("POST", "/ToDoList/ToDoList/resources/scripts/editJsonGroup.php", true);

            data.append("groupId", editGroupId);

            responseType = 'json';
            xhr.send(data);
        });
    });
});