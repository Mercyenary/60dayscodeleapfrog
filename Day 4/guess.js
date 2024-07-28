//Generatinga a random number
//Giver the user the ability to Guress
//worng ask them again
//if right = they won

function guessgame(){
    //let randomno= Math.random()*10;
    let randomno= Math.floor(Math.random()*11);
    let guess;
    
    do{
        guess=prompt("Guess a number between 1 and 10");
        console.log (guess,randomno);
        if(randomno>guess){
            console.log('you guessed too low');
        }else if (randomno<guess){
            console.log('Guess was too high');
        }
    }while(guess !=randomno);
    console.log('you won')
}
guessgame();
