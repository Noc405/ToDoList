<?php
    $success = 1;
    $msg = "Le fichier a été mis a jour";
    
    if(isset($_POST['name']) && !empty($_POST['name']) && isset($_POST['color']) && !empty($_POST['color'])){
        //Get the value from the json file of the tasks
        $JsonFile = file_get_contents("../../data/group.json");
        // Converts to an array 
        $jsonArray = json_decode($JsonFile, true);

        if(preg_match('/^([a-z]|[A-Z]|[0-9])+$/', $_POST['name'])){
            $values = array();
    
            //Set the values for the json file
            $values ['id'] = count($jsonArray) + 1;
            $values ['name'] = htmlspecialchars($_POST['name']);
            $values ['color'] = htmlspecialchars($_POST['color']);
        
            array_push($jsonArray, $values);
        
            $newJsonArray = json_encode($jsonArray);
        
            try {
                file_put_contents("../../data/group.json", $newJsonArray);
            } catch (\Throwable $th) {
                $success = 0;
                $msg = "fichier introuvable";
            }
        }else{
            $success = 0;
            $msg = "veuillez remplir correctement les champs (pas de caractères spécieaux)";
        }
    
    }else{
        $success = 0;
        $msg = "veuillez remplir correctement les champs";
    }

    $result = ["success" => $success, "message" => $msg];
    echo json_encode($result);
?>