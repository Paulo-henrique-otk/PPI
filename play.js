function play(){
    var painelNone = document.getElementById("painel-none");
    var jsNone = document.getElementById("js-none");
    var buttonplay = document.getElementById("buttonplay");
    var buttonC = document.getElementById("buttonC");
    buttonC.style.display = "none";
    jsNone.style.display = "block";
    painelNone.style.display = "block";
    buttonplay.style.display = "none";
}

function resetarbuttonC(){
let buttonC = document.getElementById("buttonC");
buttonC.style.display = "none";
let submitb = document.getElementById("submitb");
submitb.style.display = "block";
let respostaC = document.getElementById("respostaC");
respostaC.style.display = "none";
restaurarChecks();
}

function restaurarChecks(){
var value1 = document.getElementById("value1");
var value2 = document.getElementById("value2");
var value3 = document.getElementById("value3");
value1.checked = false;
value2.checked = false;
value3.checked = false;
}

