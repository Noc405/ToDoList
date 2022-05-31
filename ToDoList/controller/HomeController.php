<?php
/**
 * ETML
 * Auteur : Emilien Charpié
 * Date: 30.05.2022
 * Controller for the home page
 */

class HomeController extends Controller {

    /**
     * Dispatch current action
     *
     * @return mixed
     */
    public function display() {

        if(isset($_GET['action'])){
            $action = $_GET['action'] . "Action";
        }

        try {
            return call_user_func(array($this, $action));
        } catch (\Throwable $th) {
            return call_user_func(array($this, "homeAction"));
        }
    }

    /**
     * Display home Action
     *
     * @return string
     */
    private function homeAction() {
        //Verify that the user have accepted the cookies
        if(isset($_COOKIE['allowCookies'])){
            $view = file_get_contents('view/pages/home/home.html');
    
            ob_start();
            eval('?>' . $view);
            $content = ob_get_clean();
    
            return $content;
        }else{
            $view = file_get_contents('view/pages/home/home.html');
    
            ob_start();
            eval('?>' . $view);
            $content = ob_get_clean();
    
            return $content;
        }

    }
}