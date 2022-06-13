<?php
    $success = 1;
    $msg = "Le fichier a été mis a jour";

    $data = file_get_contents( "php://input" );
    $data = json_decode($data);

    //Get the value from the json file of the tasks
    $JsonFile = file_get_contents("../../data/group.json");
    // Converts to an array 
    $jsonArray = json_decode($JsonFile, true);

    //Delete the task deleted from the array
    for ($i=0; $i < count($jsonArray); $i++) { 
        if($jsonArray[$i]['id'] == $data){
            $group = $jsonArray[$i];
        }
    }

    $result = ["success" => $success, "message" => $msg, "group" => $group];
    echo json_encode($result);
?>