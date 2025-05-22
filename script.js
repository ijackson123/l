

let input = document.querySelector(".input");

let clearButton = document.querySelector(".clear");

let equalsButton = document.querySelector(".equals");

let result = document.querySelector(".result");



// 1. Convert to an arrow function.

 const calculateDoggieAge =(humanAge)=> {
 const doggieAge = humanAge * 7;
  return doggieAge;
 };
const showDoggieAge=(age)=>{
  result.innerHTML=`Your doggie is${age}years old in human years!`;
};

const humanYears=0;
const dogYears=calculateDoggieAge(humanYears);
showDoggieAge(dogYears);
  // 2. Declare a doggieAge variable and set it equal to the humanAge parameter multiplied by 7.

  // 3. Update the result div's inner html to display the dog's age. Use string interpolation to create the message: "Your doggie is _________ years old in human years!"
 
  




  // 4. Declare a userInput variable and set it equal to the value of the input. This needs to be a number, not a string! Be sure to place that inside our Number() method!
 equalsButton.addEventListener("click", () => {
 const userInput=Number(input.value);  
  const doggieAge= calculateDoggieAge(userInput);
  showDoggieAge(doggieAge);
   });
  // 5. Call the calculateDoggieAge function. Be sure to include the userInput variable as the parameter!
 

// DO NOT TOUCH THIS CODE
clearButton.onclick = function() {
  input.value = "";
  result.innerHTML = "";
}