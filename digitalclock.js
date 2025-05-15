let hours=document.getElementById("hours")
let minutes=document.getElementById("minutes")
let seconds=document.getElementById("seconds")

setInterval(()=>{
    let date=new Date()
    //!hours
    let correcttime=date.getHours()
    if(correcttime>12){
        hours.innerText=correcttime-12;
        if(hours.innerText<10){
            hours.innerText=`0${correcttime-12}`
        }
    }
    else{
        if(correcttime<10){
            hours.innerText=`0${correcttime}`
        }
        else{
            hours.innerText=correcttime
        }
    }

    //!minutes
    let correctminutes=date.getMinutes()
    if(correctminutes<10){
        minutes.innerText=`0${correctminutes}`
    }else{
        minutes.innerText=correctminutes;
    }
    
    //!seconds
    let correctseconds=date.getSeconds()
    if(correctseconds<10){
        seconds.innerText=`0${correctseconds}`
    }else{
        seconds.innerText=correctseconds;
    }

},1000)