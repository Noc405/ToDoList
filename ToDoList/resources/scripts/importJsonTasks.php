<?php
    $success = 1;
    $msg = "Le fichier a été mis a jour";
    
    if(isset($_POST['name']) && !empty($_POST['name']) && isset($_POST['date']) && !empty($_POST['date'])){
        //Get the value from the json file of the tasks
        $JsonFile = file_get_contents("../../data/tasks.json");
        // Converts to an array 
        $jsonArray = json_decode($JsonFile, true);

        $values = array();

        //Set the values for the json file
        if(!empty($jsonArray)){
            $values['id'] = count($jsonArray) + 1;
        }else{
            $values['id'] = 1;
        }
        $values['title'] = $_POST['name'];
        $values['description'] = $_POST['desc'];
        $values['icon'] = $_POST['icon'];
        $values['group'] = $_POST['group'];

        //If the user don't set the hour
        if(isset($_POST['allDay'])){
            $values['allDay'] = true;

            //Set the date at the good format
            $date = $_POST['date'];
            $separatedDates = explode(" - ", $date);

            if(count($separatedDates) > 1){
                //Set the start date
                $daysMonthYearsStart = explode("/", $separatedDates[0]);
                $ordredDate['start'] = $daysMonthYearsStart[2]."-".$daysMonthYearsStart[0]."-".$daysMonthYearsStart[1];
                //Set the end date
                $daysMonthYearsEnd = explode("/", $separatedDates[1]);
                $ordredDate['end'] = $daysMonthYearsEnd[2]."-".$daysMonthYearsEnd[0]."-".$daysMonthYearsEnd[1];
            }else{
                //Set the start date
                $daysMonthYears = explode("/", $separatedDates[0]);
                $ordredDate['start'] = $daysMonthYears[2]."-".$daysMonthYears[0]."-".$daysMonthYears[1];
                //Set the end date
                $ordredDate['end'] = $ordredDate['start'];
            }
        }else{
            //set the date as the good format
            $values['allDay'] = false;
            
            //Set the date at the good format
            $date = $_POST['date'];
            $separatedDates = explode(" - ", $date);

            if(count($separatedDates) == 2){
                //Set the hour
                $startHour = setHour($_POST['starthour']);
                $endHour = setHour($_POST['endhour']);
                //Set the start date
                $daysMonthYearsStart = explode("/", $separatedDates[0]);
                $ordredDate['start'] = $daysMonthYearsStart[2]."-".$daysMonthYearsStart[0]."-".$daysMonthYearsStart[1]."T".$startHour;
                //Set the end date
                $daysMonthYearsEnd = explode("/", $separatedDates[1]);
                $ordredDate['end'] = $daysMonthYearsEnd[2]."-".$daysMonthYearsEnd[0]."-".$daysMonthYearsEnd[1]."T".$endHour;
            }else if(count($separatedDates) == 1){
                //Set the hour
                $startHour = setHour($_POST['starthour']);
                $endHour = setHour($_POST['endhour']);
                //Set the start date
                $daysMonthYears = explode("/", $separatedDates[0]);
                $ordredDate['start'] = $daysMonthYears[2]."-".$daysMonthYears[0]."-".$daysMonthYears[1]."T".$startHour;
                //Set the end date
                $ordredDate['end'] = $daysMonthYears[2]."-".$daysMonthYears[0]."-".$daysMonthYears[1]."T".$endHour;
            }
        }
    
        $values['start'] = $ordredDate['start'];
        $values['end'] = $ordredDate['end'];
        $values['finish'] = false;
    
        if(!empty($jsonArray)){
            array_push($jsonArray, $values);
            $newJsonArray = json_encode($jsonArray);
        }else{
            $jsonArray = $values;
            $newJsonArray = "[" . json_encode($jsonArray) . "]";
        }
    
    
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

    $result = ["success" => $success, "message" => $msg];
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