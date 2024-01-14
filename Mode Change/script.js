let btn = document.getElementById("btn");
let body = document.querySelector("body");
let mode = 0; 

btn.addEventListener("click", function(){
    if(mode === 0){
        btn.textContent = "Dark Mode";
        btn.style.backgroundColor = "white";
        body.style.backgroundColor = "rgb(54, 54, 54)";
        btn.style.color = "black";
        mode = 1;
    }
    else{
        mode = 0;
        btn.textContent = "Light Mode";
        btn.style.backgroundColor = "rgb(86, 86, 86)";
        body.style.backgroundColor = "white";
        btn.style.color = "white";
    }
});
