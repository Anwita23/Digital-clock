

let hours=document.getElementById("hours")
let minutes=document.getElementById("minutes")
let seconds=document.getElementById("seconds")

setInterval(()=>{
    let date=new Date()
    // console.log(date.getMinutes);
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


// console.log(date);
let hey=new Date()
console.log(hey.getMinutes());
let h1=document.querySelectorAll("h1")
let colon=document.querySelectorAll(".colon")


let lcd=document.querySelector("#lcd");
let dots=document.querySelector("#dots");
let digital=document.querySelector("#dig");

lcd.addEventListener("mouseenter",()=>{
    hours.style.fontFamily='face';
    minutes.style.fontFamily='face';
    seconds.style.fontFamily='face';
    colon.forEach((e)=>{
        e.style.fontFamily='face'
    })
    h1.forEach((el)=>{
        // el.style.boxShadow="2px 2px 2px white"
        // el.style.inset="2px 2px 2px blue"
        // el.style.boxShadow="2px 2px 20px white,inset 2px 2px 20px rgb(170, 255, 252)"
        el.style.textShadow="0px 1px 5px rgb(170, 255, 252)"
        // setInterval(()=>{
        // },250)
        el.style.color="white"
        // el.style.transition="500ms"
    })
    
})
digital.addEventListener("mouseenter",()=>{
    hours.style.fontFamily='digitalone';
    minutes.style.fontFamily='digitalone';
    seconds.style.fontFamily='digitalone';
    colon.forEach((e)=>{
        e.style.fontFamily='digitalone'
    })
    h1.forEach((el)=>{
        el.style.textShadow="0px 1px 5px red"
        el.style.color="green"
    })

})
dots.addEventListener("mouseenter",()=>{
    hours.style.fontFamily='dotsone';
    minutes.style.fontFamily='dotsone';
    seconds.style.fontFamily='dotsone';
    colon.forEach((e)=>{
        e.style.fontFamily='dotsone'
    })
    h1.forEach((el)=>{
        el.style.textShadow="0px 1px 5px red"
        el.style.color="white"
    })
})
