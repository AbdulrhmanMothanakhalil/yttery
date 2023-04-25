


let countdowndate = new Date("MAY 20,2023 23:59:00").getTime();

let counter = setInterval(() => {
    let datenow = new Date().getTime();


    let datediff = countdowndate - datenow;


    let days = Math.floor(datediff / (1000 * 60 * 60 * 24));


    let hours = Math.floor((datediff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    let minutes = Math.floor((datediff % (1000 * 60 * 60)) / (1000 * 60));

    let seconds = Math.floor((datediff % (1000 * 60)) / 1000);

    

 

    //show days text in html page

    document.querySelector(".days").innerHTML= days;
    document.querySelector(".hours").innerHTML= hours < 10 ? `0${hours}`:hours;
    document.querySelector(".minutes").innerHTML= minutes < 10 ? `0${minutes}`:minutes;
    document.querySelector(".seconds").innerHTML= seconds < 10 ? `0${seconds}`:seconds ;

  




},1000)
