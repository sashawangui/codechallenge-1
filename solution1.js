let grades = prompt('Enter your grades')
{
    if(grades < 40){
        alert('You got an E')
    }
    else if(grades >= 40 && grades <= 49){
        alert('You got a D')
    }
    else if(grades > 49 && grades <= 60){
        alert('You got a C')
    }
    else if(grades > 60 && grades <= 79){
        alert('You got a B')
    }
    else if(grades > 79 && grades <= 100){
        alert('You got an A')
    }
    else if(grades > 100 && grades < 0){
        alert("Out of Bound!")
    }
}
