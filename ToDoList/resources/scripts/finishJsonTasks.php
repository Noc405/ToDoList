<?php
    $success = 1;
    $msg = "Le fichier a été mis a jour";

    $data = file_get_contents( "php://input" );
    $data = json_decode($data);

    //Get the value from the json file of the tasks
    $JsonFile = file_get_contents("../../data/tasks.json");
    // Converts to an array 
    $jsonArray = json_decode($JsonFile, true);

    //Set the finish for the tasks finished
    for ($i=0; $i < count($jsonArray); $i++) { 
        for ($ii=0; $ii < count($data); $ii++) { 
            if($jsonArray[$i]['id'] == $data[$ii]){
                $jsonArray[$i]['finish'] = true;
            }
        }
    }

    //Change the json array
    $newJsonArray = json_encode($jsonArray);
    
    try {
        file_put_contents(`/ToDoList/ToDoList/data/tasks.json`, $newJsonArray);
    } catch (\Throwable $th) {
        $success = 0;
        $msg = "fichier introuvable";
    }

    $result = ["success" => $success, "message" => $msg, "data" => $jsonArray];
    print_r($result);
?>