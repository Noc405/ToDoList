<?php
    $success = 1;
    $msg = "Le fichier a été mis a jour";
    
    if(isset($_POST['name']) && !empty($_POST['name']) && isset($_POST['color']) && !empty($_POST['color'])){
        //Get the value from the json file of the tasks
        $JsonFile = file_get_contents("../../data/group.json");
        // Converts to an array 
        $jsonArray = json_decode($JsonFile, true);

        $values = array();

        //Set the values for the json file
        $values ['name'] = $_POST['name'];
        $values ['color'] = $_POST['color'];
    
        array_push($jsonArray, $values);
    
        $newJsonArray = json_encode($jsonArray);
    
        file_put_contents('/ToDoList/ToDoList/data/group.json', $newJsonArray);
    
    }else{
        $success = 0;
        $msg = "veuillez remplir correctement les champs";
    }

    $result = ["success" => $success, "message" => $msg];
    print_r($result);
?>