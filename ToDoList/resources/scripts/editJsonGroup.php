<?php
    $success = 1;
    $msg = "Le fichier a été mis a jour";
    
    if(isset($_POST['name']) && !empty($_POST['name']) && isset($_POST['color']) && !empty($_POST['color'])){
        //Get the value from the json file of the tasks
        $JsonFile = file_get_contents("../../data/group.json");
        // Converts to an array 
        $jsonArray = json_decode($JsonFile, true);

        //Get the value from the json file of the tasks
        $JsonTasks = file_get_contents("../../data/tasks.json");
        // Converts to an array 
        $jsonArrayTasks = json_decode($JsonTasks, true);

        if(preg_match('/^([a-z]|[A-Z]|[0-9])+$/', $_POST['name'])){
            
            for ($ii=0; $ii < count($jsonArray); $ii++) { 
                if($jsonArray[$ii]['id'] == $_POST['groupId']){           
                    for ($i=0; $i < count($jsonArrayTasks); $i++) { 
                        if($jsonArrayTasks[$i]['group'] == $jsonArray[$ii]['name']){
                            $jsonArrayTasks[$i]['group'] = $_POST['name'];
                        }
                    }
                }
            }

            //Edit the group 
            for ($i=0; $i < count($jsonArray); $i++) { 
                if($jsonArray[$i]['id'] == $_POST['groupId']){
                    $jsonArray[$i]['name'] = $_POST['name'];
                    $jsonArray[$i]['color'] = $_POST['color'];
                }
            }
        
            $newJsonArray = json_encode($jsonArray);
            $newJsonTaskArray = json_encode($jsonArrayTasks);
        
            try {
                file_put_contents("../../data/group.json", $newJsonArray);
            } catch (\Throwable $th) {
                $success = 0;
                $msg = "fichier introuvable";
            }  

            try {
                file_put_contents("../../data/tasks.json", $newJsonTaskArray);
            } catch (\Throwable $th) {
                $success = 0;
                $msg = "fichier introuvable";
            }    
        }else{
            $success = 0;
            $msg = "veuillez remplir correctement les champs (caractères spéciaux non autorisés)";
        }
    }else{
        $success = 0;
        $msg = "veuillez remplir correctement les champs";
    }

    $result = ["success" => $success, "message" => $msg, "taches" => $jsonArrayTasks, "group" => $jsonArray, "test" => json_encode("français")];
    echo json_encode($result);
?>