const text = document.getElementById("text");

function appendToDisplay(input){
  text.value += input;
}

function clearDisplay(){
  text.value = "";
}

function calculate(){
  text.value = eval(text.value);
}



