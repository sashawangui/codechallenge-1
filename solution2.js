let speed = prompt('speed?')
let demeritPoints = (speed - 70)/5
{
    if (speed < 70){
        alert ("Ok.")
    }
    else if (demeritPoints < 12 && speed > 70){
        alert (`Points: ${demeritPoints}`)
    }
    else if (demeritPoints > 12){
        alert ('License suspended')
    }
}