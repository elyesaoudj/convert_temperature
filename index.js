
const textbox = document.getElementById("textbox");
const tofahrenheit = document.getElementById("tofahrenheit");
const tocelsius = document.getElementById("tocelsius");
const result = document.getElementById("result");
let temp;


document.getElementById("tofahrenheit")



function convert(){
    if(tofahrenheit.checked){
        temp = Number(textbox.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) + "F";
    }
    else if (tocelsius.checked){
        temp = Number(textbox.value);
        temp = 5/9*(temp-32);
        result.textContent = temp.toFixed(1);
    }
    else{
        result.textContent ="Select a unit";
    }
}

