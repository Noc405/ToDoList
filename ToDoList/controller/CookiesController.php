<?php
/**
 * ETML
 * Auteur : Emilien Charpié
 * Date: 04.04.2022
 * Controller for allow or deny the cookies
 */

class CookiesController extends Controller {

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
            return call_user_func(array($this, "destroyCookies"));
        }
    }

    /**
     * Allow the cookies or not
     *
     * @return string
     */
    private function allowCookiesAction() {
        //Verify that the user have accepted the cookies
        if(isset($_GET['allow'])){
            if($_GET['allow'] == "true"){
                setcookie("allowCookies", true, time()+(60*60*24*365));
                $_SESSION['allowCookies'] = true;
                header("Location:index.php?controller=home&action=home");
            }else{
                $_SESSION['allowCookies'] = false;
                header("Location:index.php?controller=home&action=home");
            }
        }else{
            header("Location:index.php?controller=home&action=home");
        }
    }

    /**
     * Destroy the cookies "allowCookie"
     *
     * @return string
     */
    private function destroyCookiesAction() {
        //Verify that the user have accepted the cookies
        if(isset($_GET['cookieName'])){
            setcookie($_GET['cookieName']);
            header("Location:index.php?controller=home&action=home");
        }else{
            header("Location:index.php?controller=home&action=home");
        }
    }
}