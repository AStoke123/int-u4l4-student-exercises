let button = document.querySelector("button");
let weth = document.querySelector(".result")
button.addEventListener("click", function() {
    let weather = document.querySelector(".weather").value;
    
    
    // 1. Write a conditional statement:
    //  - If the input is "rainy", change the text in the paragraph tag to "Bring an umbrella!"
    //  - Else, change the text in the paragraph tag to "Enjoy the sun!"
 if(weather === "rainy"){
    weth.textContent = "what the sigma";
 }
 else{ weth.textContent = "enjoy employment loser."}

});