var timeREquirement = prompt("What Is Time Here : Use 24hrs Formate Like 1700")
if(timeREquirement >= 0000 && timeREquirement < 1200){
    console.log("Good Morning")
}else if(timeREquirement >= 1200 && timeREquirement < 1700){
    console.log("Good Afternoon")
}else if(timeREquirement >=1700 && timeREquirement < 2100){
    console.log("Good Evening")
}else if(timeREquirement >= 2100 && timeREquirement <= 2359){
    console.log("Good Night")
}