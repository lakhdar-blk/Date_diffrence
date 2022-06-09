function calcule_diff(id){
        
    var girsaatid = "girsaat"+id;
    var ceksaatid = "ceksaat"+id;

    var start = document.getElementById(girsaatid).value;
    var hours = start.split(":")[0];
    var minutes = start.split(":")[1];
    var suffix = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    hours = hours < 10 ? "0" + hours : hours;
    start = hours + ":" + minutes + " " + suffix;
    
    var end = document.getElementById(ceksaatid).value;
    var ehours = end.split(":")[0];
    var eminutes = end.split(":")[1];
    var esuffix = ehours >= 12 ? "PM" : "AM";
    ehours = ehours % 12 || 12;
    ehours = ehours < 10 ? "0" + ehours : ehours;
    end = ehours + ":" + eminutes + " " + esuffix;
    
    var timeStart = new Date("01/01/2007 " + start);
    

    if (esuffix == "AM" && (ehours == 12 || ehours < hours )){
        var timeEnd = new Date("01/02/2007 " + end);
    }
    else{
        var timeEnd = new Date("01/01/2007 " + end);
    }
    
    
    

    var diff = Math.abs(timeEnd - timeStart) / 60000 ;

    /*var diff = (timeStart - timeEnd) / 60000; //dividing by seconds and milliseconds
    diff = diff < 0 ? diff * (-1): diff;*/
    
    if(!isNaN(diff)){
        document.getElementById(id).value = diff;
    }
    
}