const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordArray = [];
console.log(passwordArray)
let passwordLength = 15;
let passwordArrayLocation = -1; 

let password1 = document.getElementById("output1")
let password2 = document.getElementById("output2")
let generateBtn = document.getElementById("generate-btn")

generateBtn.addEventListener("click", renderPasswords)

function renderPasswords() {
    console.log("click")
    password1.textContent = passwordGenerator()
    password2.textContent = passwordGenerator()
}


function passwordGenerator() {
    passwordArrayLocation += 1
    passwordArray[passwordArrayLocation] = "";
    
    for (let i = 1; i <= passwordLength; i++) {
        passwordArray[passwordArrayLocation] += randomChar()
    }
    
    return passwordArray[passwordArrayLocation]    
}

function randomChar() {
    return characters[Math.floor(Math.random() * characters.length)]
}