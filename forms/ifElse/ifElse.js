
//this code declares variables for later input
let firstName = ""
let state = ""
let temperature = ""

//this code makes prompts for users to input
firstName = prompt("What is your first name?")
state = prompt("What state are you from? NE or FL?")
temperature = prompt("what is the temperature?")

//this sets up the arrays
let message = ["wear a warm coat, hat, scarf and gloves.", 
"wear a warm coat but you won't need a hat, scarf or gloves.", 
"wear your warmest coat, a warm hat, a scarf, and warm gloves.",
"wear a warm coat, hat and gloves. Maybe a scarf too."]

if (temperature < 32 && state == 'NE') { 
    console.log(`${firstName}, ${message[0]}.`)
}
else if (temperature <= 50 && temperature >= 32 && state == 'NE') {
    console.log(`${firstName}, ${message[1]}.`)
}
else if (temperature <= 50 && temperature >= 32 && state == 'FL') {
    console.log(`${firstName}, ${message[2]}.`)
}
else if (temperature <= 70 && temperature >= 50 && state == 'FL') {
    console.log(`${firstName}, ${message[3]}.`)
}
else {
  console.log('Invalid input.');
}

