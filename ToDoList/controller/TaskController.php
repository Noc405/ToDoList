<?php
/**
 * ETML
 * Auteur : Emilien Charpié
 * Date: 30.05.2022
 * Controller for the tasks : see it, add it and add the group
 */

class TaskController extends Controller {

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
            return call_user_func(array($this, "seeTaskAction"));
        }
    }

    /**
     * Display the task pages
     *
     * @return string
     */
    private function seeTaskAction() {
        //Verify that the user have accepted the cookies
        $view = file_get_contents('view/pages/task/seeTask.html');

        ob_start();
        eval('?>' . $view);
        $content = ob_get_clean();

        return $content;
    }

    /**
     * Display add task action
     *
     * @return string
     */
    private function addTaskAction() {
        //Verify that the user have accepted the cookies
        $view = file_get_contents('view/pages/home/home.html');

        ob_start();
        eval('?>' . $view);
        $content = ob_get_clean();

        return $content;
    }

    /**
     * Display add group action
     *
     * @return string
     */
    private function addGroupAction() {
        //Verify that the user have accepted the cookies
        $view = file_get_contents('view/pages/home/home.html');

        ob_start();
        eval('?>' . $view);
        $content = ob_get_clean();

        return $content;
    }
}