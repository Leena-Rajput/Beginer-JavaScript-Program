// 1. Write a program of trafic control that accept the traffic light displayed and prints the message. If the traffic light is red print the message . If the traffic light is red prit the vehicles must stop

let traficLight="green"

if (traficLight=="red") {
    console.log("Vehicles Must Stop")
}
else if (traficLight=="Orange"){
    console.log("Vehicles Must wait. The Signal is changing to red or green")
}
else if (traficLight=="green"){
    console.log("Vehicles may proceed with caution")
}
else{
    console.log("Invalid traffic Light")
}