//Set the date correctly for the view
function setDateView(date) {
    let newDate = new Array();
    date.forEach((element, i) => {
        newDate[i] = "";
        //For the first date
        let startDate = element.start.split("T");
        let endDate = element.end.split("T");
        if(element.allDay == false){
            //Set the date
            //Set the start date
            let separetedStartDate = startDate[0].split("-");
            newDate[i] += separetedStartDate[2];
            //Set the month
            switch (separetedStartDate[1]) {
                case "01":
                    newDate[i] += " Janvier ";
                    break;
                case "02":
                    newDate[i] += " Février ";
                    break;
                case "03":
                    newDate[i] += " Mars ";
                    break;
                case "04":
                    newDate[i] += " Avril ";
                    break;
                case "05":
                    newDate[i] += " Mai ";
                    break;
                case "06":
                    newDate[i] += " Juin ";
                    break;
                case "07":
                    newDate[i] += " Juillet ";
                    break;
                case "08":
                    newDate[i] += " Août ";
                    break;
                case "09":
                    newDate[i] += " Septembre ";
                    break;
                case "10":
                    newDate[i] += " Octobre ";
                    break;
                case "11":
                    newDate[i] += " Novembre ";
                    break;
                case "12":
                    newDate[i] += " Decembre ";
                    break;
                default:
                    break;
            }
            newDate[i] += separetedStartDate[0];

            //Set the end date
            let separetedEndDate = endDate[0].split("-");

            if(separetedStartDate[2] != separetedEndDate[2] || separetedStartDate[1] != separetedEndDate[1] || separetedStartDate[0] != separetedEndDate[0]){
                //Hour start date
                newDate[i] += ` à ${startDate[1]}`;
                newDate[i] += startDate[1];

                //set the second date
                newDate[i] += " - ";
                newDate[i] += separetedEndDate[2];
                //Set the month
                switch (separetedEndDate[1]) {
                    case "01":
                        newDate[i] += " Janvier ";
                        break;
                    case "02":
                        newDate[i] += " Février ";
                        break;
                    case "03":
                        newDate[i] += " Mars ";
                        break;
                    case "04":
                        newDate[i] += " Avril ";
                        break;
                    case "05":
                        newDate[i] += " Mai ";
                        break;
                    case "06":
                        newDate[i] += " Juin ";
                        break;
                    case "07":
                        newDate[i] += " Juillet ";
                        break;
                    case "08":
                        newDate[i] += " Août ";
                        break;
                    case "09":
                        newDate[i] += " Septembre ";
                        break;
                    case "10":
                        newDate[i] += " Octobre ";
                        break;
                    case "11":
                        newDate[i] += " Novembre ";
                        break;
                    case "12":
                        newDate[i] += " Decembre ";
                        break;
                    default:
                        break;
                }
                newDate[i] += separetedEndDate[0];
                //Hour end date
                newDate[i] += ` à ${endDate[1]}`;
            }else{
                // Set hour 
                newDate[i] += ` de ${startDate[1]} à ${endDate[1]}`;
            }
        }else{
            //Set the date
            //Set the start date
            let separetedStartDate = startDate[0].split("-");
            newDate[i] += separetedStartDate[2];
            //Set the month
            switch (separetedStartDate[1]) {
                case "01":
                    newDate[i] += " Janvier ";
                    break;
                case "02":
                    newDate[i] += " Février ";
                    break;
                case "03":
                    newDate[i] += " Mars ";
                    break;
                case "04":
                    newDate[i] += " Avril ";
                    break;
                case "05":
                    newDate[i] += " Mai ";
                    break;
                case "06":
                    newDate[i] += " Juin ";
                    break;
                case "07":
                    newDate[i] += " Juillet ";
                    break;
                case "08":
                    newDate[i] += " Août ";
                    break;
                case "09":
                    newDate[i] += " Septembre ";
                    break;
                case "10":
                    newDate[i] += " Octobre ";
                    break;
                case "11":
                    newDate[i] += " Novembre ";
                    break;
                case "12":
                    newDate[i] += " Decembre ";
                    break;
                default:
                    break;
            }
            newDate[i] += separetedStartDate[0];

            //Set the end date
            let separetedEndDate = endDate[0].split("-");

            if(separetedStartDate[2] != separetedEndDate[2] || separetedStartDate[1] != separetedEndDate[1] || separetedStartDate[0] != separetedEndDate[0]){
                newDate[i] += " - ";
                newDate[i] += separetedEndDate[2];
                //Set the month
                switch (separetedEndDate[1]) {
                    case "01":
                        newDate[i] += " Janvier ";
                        break;
                    case "02":
                        newDate[i] += " Février ";
                        break;
                    case "03":
                        newDate[i] += " Mars ";
                        break;
                    case "04":
                        newDate[i] += " Avril ";
                        break;
                    case "05":
                        newDate[i] += " Mai ";
                        break;
                    case "06":
                        newDate[i] += " Juin ";
                        break;
                    case "07":
                        newDate[i] += " Juillet ";
                        break;
                    case "08":
                        newDate[i] += " Août ";
                        break;
                    case "09":
                        newDate[i] += " Septembre ";
                        break;
                    case "10":
                        newDate[i] += " Octobre ";
                        break;
                    case "11":
                        newDate[i] += " Novembre ";
                        break;
                    case "12":
                        newDate[i] += " Decembre ";
                        break;
                    default:
                        break;
                }
                newDate[i] += separetedEndDate[0];
            }
        }
    });

    return newDate;
}
