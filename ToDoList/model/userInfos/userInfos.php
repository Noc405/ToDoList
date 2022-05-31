<?php

class connexionValues {
    
    private $host = 'localhost';
    private $user = 'root';
    private $dbname = 'todolist';
    private $port = '8080';

    public function getValues(){
        $values = array("host"=>$this->host, "user"=>$this->user, "dbname"=>$this->dbname, "port"=>$this->port);
        return $values;
    }
}
?>