//variables
let btn = document.getElementById("btn");
let output = document.getElementById("output");
let Prompt = window.prompt("What should the max number be?");

let valid_input = false

let num = Math.floor(Math.random() * Prompt) + 1;

//added variables

let pickedNumber = Prompt;
let guessed_num = [];
let num_of_guesses = 0;


text = document.getElementById("promptNum").innerHTML = Prompt;

//function


function do_prompt() {
if (text > 0);
promptNum.innerHTML = "Guess a number between 1 and " + text + " ."
}
btn.addEventListener("click", function()
{
    let input = document.getElementById("input").value;

    
//added
    guessed_num.push(input);
    num_of_guesses = num_of_guesses + 1;

    validateInput();

    if (input == num){
        output.innerHTML = "You got it! It took you "  +  num_of_guesses  + " tries and your guess(es) were "  +  guessed_num  + "."
    }
    else if (input < num){
        output.innerHTML = "No, try a higher number." 
        
    };
    if (input > num){
        output.innerHTML = "No, try a lower number." 
        
    }

    function validateInput()
    {
        input = document.getElementById("input").value;

        if(isNaN(input)){
            output.innerHTML = "That's not a number!";
        }

    }
});
/*function getUnique(array){
    let guessed_num = [];
    for(i=0; i < array.length; i++){
        if(getUnique.indexOf(array[i]) === -1) {
            guessed_num.push(array[i]);
        }
    }
    return guessed_num;
}*/