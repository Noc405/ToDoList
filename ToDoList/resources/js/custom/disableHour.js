function CheckAllDAyInput() {
    const checkbox = document.getElementById('allDay');

    checkbox.onchange = function () {        
        if(checkbox.checked == true){
            document.querySelector('.hourStart').setAttribute("disabled", "disabled");
            document.querySelector('.hourEnd').setAttribute("disabled", "disabled");
        }else{
            document.querySelector('.hourStart').removeAttribute("disabled");
            document.querySelector('.hourEnd').removeAttribute("disabled");
        }
    }
}
CheckAllDAyInput();