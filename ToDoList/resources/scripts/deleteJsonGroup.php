<?php
    $success = 1;
    $msg = "Le fichier a été mis a jour";

    $data = file_get_contents( "php://input" );
    $data = json_decode($data);

    //Get the value from the json file of the tasks
    $JsonFile = file_get_contents("../../data/group.json");
    // Converts to an array 
    $jsonArray = json_decode($JsonFile, true);
    
    $JsonTasks = file_get_contents("../../data/tasks.json");
    $jsonArrayTasks = json_decode($JsonTasks, true);
    
    //Delete the group from the array and set the name of the group deleted
    for ($i=0; $i < count($jsonArray); $i++) { 
        if($jsonArray[$i]['id'] == $data){
            $groupName = $jsonArray[$i]['name'];
            unset($jsonArray[$i]);
        }
    }

    //Order the json array without the deleted group
    $jsonOrdred = array_values($jsonArray);

    //Order the id of the groups not deleted
    $id = 1;
    for ($i=0; $i < count($jsonOrdred); $i++) { 
        $jsonOrdred[$i]['id'] = $id;        
        $id += 1;
    }

    //Move the tasks from the group to the group "Tasks"
    for ($i=0; $i < count($jsonArrayTasks); $i++) { 
        if($jsonArrayTasks[$i]['group'] == $groupName){
            $jsonArrayTasks[$i]['group'] = "Taches";
        }
    }

    //Encode the json array for the group
    $newJsonArray = json_encode($jsonOrdred);

    //Encode the json array for the tasks
    $newJsonArrayTasks = json_encode($jsonArrayTasks);

    try {
        file_put_contents("../../data/tasks.json", $newJsonArrayTasks);
    } catch (\Throwable $th) {
        $success = 0;
        $msg = "fichier des tâches introuvable";
    }

    try {
        file_put_contents("../../data/group.json", $newJsonArray);
    } catch (\Throwable $th) {
        $success = 0;
        $msg = "fichier des groupes introuvable";
    }

    $result = ["success" => $success, "message" => $msg];
    print_r($result);
?>