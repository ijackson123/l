
1
let input = document.querySelector(".input");
2
let clearButton = document.querySelector(".clear");
3
let equalsButton = document.querySelector(".equals");
4
let result = document.querySelector(".result");
5
​
6
​
7
// 1. Convert to an arrow function.
8
function calculateDoggieAge(humanAge) {
9
​
10
  // 2. Declare a doggieAge variable and set it equal to the humanAge parameter multiplied by 7.
let doggieAge = humanAge * 7;
  return doggieAge;
  // 3. Update the result div's inner html to display the dog's age. Use string interpolation to create the message: "Your doggie is _________ years old in human years!"
  humanAge.innerHTML = "Your doggie is _________ years old in human years!"
  
}

  // 4. Declare a userInput variable and set it equal to the value of the input. This needs to be a number, not a string! Be sure to place that inside our Number() method!
 equalsButton.addEventListener("click", () => {
 const userInput=Number(input.value);  
  const doggieAge= calculateDoggieAge(userInput);
  showDoggieAge(DoggieAge);
   
 });
  // 5. Call the calculateDoggieAge function. Be sure to include the userInput variable as the parameter!
 calculateDoggieAge (button)

// DO NOT TOUCH THIS CODE
clearButton.onclick = function() {
  input.value = "";
  result.innerHTML = "";
}