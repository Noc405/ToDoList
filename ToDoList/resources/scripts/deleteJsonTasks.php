<?php
    $success = 1;
    $msg = "Le fichier a été mis a jour";

    $data = file_get_contents( "php://input" );
    $data = json_decode($data);

    //Get the value from the json file of the tasks
    $JsonFile = file_get_contents("../../data/tasks.json");
    // Converts to an array 
    $jsonArray = json_decode($JsonFile, true);

    //Delete the task deleted from the array
    for ($i=0; $i < count($jsonArray); $i++) { 
        if($jsonArray[$i]['id'] == $data){
            unset($jsonArray[$i]);
        }
    }

    $jsonOrdred = array_values($jsonArray);

    $id = 1;
    for ($i=0; $i < count($jsonOrdred); $i++) { 
        $jsonOrdred[$i]['id'] = $id;        
        $id += 1;
    }

    //Change the json array
    $newJsonArray = json_encode($jsonOrdred);
    
    try {
        file_put_contents("../../data/tasks.json", $newJsonArray);
    } catch (\Throwable $th) {
        $success = 0;
        $msg = "fichier introuvable";
    }

    $result = ["success" => $success, "message" => $msg];
    echo json_encode($result);
?>