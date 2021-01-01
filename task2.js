var roadTraffic = prompt("Waiting for signal lights : here").toLowerCase();
if(roadTraffic === "red"){
    console.log("Must Stop")
}else if(roadTraffic === "yellow"){
    console.log("Ready to move")
}else if(roadTraffic === "green"){
    console.log("Move now")
}else{
    console.log("Please Enter Valid Value")
}