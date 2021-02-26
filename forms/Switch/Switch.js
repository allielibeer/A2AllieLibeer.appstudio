//this sets up the variables 
let firstName = ""
let state = ""
let temperature = ""
let clothingOption = ""
let stateName = ['NE', 'FL']

//this sets up the prompts 
firstName = prompt("What is your first name?")
state = prompt("What state are you from? NE or FL?")
temperature = prompt("what is the temperature?")

//this sets up the array
let message = ["wear a warm coat, hat, scarf and gloves.", 
"wear a warm coat but you won't need a hat, scarf or gloves.", 
"wear your warmest coat, a warm hat, a scarf, and warm gloves.",
"wear a warm coat, hat and gloves. Maybe a scarf too."]


//this sets up the swithces 
switch(true) {
case (state == stateName[0] && temperature <32): 
    console.log(`${firstName}, ${message[0]}`)
    break;
case (state == stateName[0] && temperature >=32 && temperature <=50):
    console.log(`${firstName}, ${message[1]}.`)
    break;
case (state == stateName[1] && temperature >=32 temperature <=50):
    console.log(`${firstName}, ${message[2]}.`)
    break;
case (state == stateName[1] && temperature >=50 temperature <=70:
    console.log(`${firstName}, ${message[3]}.`)
    break;
default:
    console.log(`I do not know the temperature.`)
    break;
}
    
    
    /*
if (temperature < 32 && state == 'NE') { 
    clothingOption = 1
}
else if (temperature <= 50 && temperature >= 32 && state == 'NE') {
    clothingOption = 2
}
else if (temperature <= 50 && temperature >= 32 && state == 'FL') {
    clothingOption = 3
}
else if (temperature <= 70 && temperature >= 50 && state == 'FL') {
    clothingOption = 4
}
else {
  console.log('Invalid input.');
}

*/
/*
//this sets up the swithces 
switch(clothingOption) {
case (state == 'NE' && temperature <32) : 
    console.log(`${firstName}, ${message[0]}`)
    break;
case State2':
    console.log(`${firstName}, ${message[1]}.`)
    break;
case '3':
    console.log(`${firstName}, ${message[2]}.`)
    break;
case '4':
    console.log(`${firstName}, ${message[3]}.`)
    break;
default:
    console.log(`I do not know the temperature.`)
    break;
    
    */