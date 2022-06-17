<?php
    $success = 1;
    $msg = "Le fichier a été mis a jour";
    
    if(isset($_POST['name']) && !empty($_POST['name'])){
        //Get the value from the json file of the tasks
        $JsonFile = file_get_contents("../../data/tasks.json");
        // Converts to an array 
        $jsonArray = json_decode($JsonFile, true);

        $values = array();

        $values ['title'] = $_POST['name'];
        $values ['description'] = $_POST['desc'];
        $values ['icon'] = $_POST['icon'];

        //Edit the group 
        for ($i=0; $i < count($jsonArray); $i++) { 
            if($jsonArray[$i]['id'] == $_POST['taskId']){
                $jsonArray[$i]['title'] = $values['title'];
                $jsonArray[$i]['description'] = $values['description'];
                $jsonArray[$i]['icon'] = $values['icon'];
            }
        }
    
        $newJsonArray = json_encode($jsonArray);
    
        try {
            file_put_contents("../../data/tasks.json", $newJsonArray);
        } catch (\Throwable $th) {
            $success = 0;
            $msg = "fichier introuvable";
        }    
    }else{
        $success = 0;
        $msg = "veuillez remplir correctement les champs";
    }

    $result = ["success" => $success, "message" => $msg, "post" => $_POST];
    echo json_encode($result);

    //Set the hour correctly
    function setHour($hour){
        //Set the hour
        $serparatedStartHour = explode(" ", $hour);
        //If the hour ist passt than 12
        if($serparatedStartHour[1] == "pm"){
            //Separate the hour
            $separateStartHourMinuts = explode(":", $serparatedStartHour[0]);
            //Add 12 of the hour
            $startHour = $separateStartHourMinuts[0] + 12;
            $startMinuts = $separateStartHourMinuts[1];
            $ordredHour = $startHour.":".$startMinuts;
        }else{
            $separateStartHourMinuts = explode(":", $serparatedStartHour[0]);
            if($separateStartHourMinuts[0] < 10){
                //Add a "0" before the hour of one number ex : 8 => 08
                $ordredHour = "0".$separateStartHourMinuts[0].":".$separateStartHourMinuts[1];
            }else{
                $ordredHour = $serparatedStartHour[0];
            }
        }

        return $ordredHour;
    }
?>