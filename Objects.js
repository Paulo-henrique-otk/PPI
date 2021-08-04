
alert("Seja Bem Vindo,Aperte no Botão Jogar para Iniciar 🥇");
const Alternativa =   {
    resposta:"Resposta",
    flag:true
    };

const Questao = {
    pergunta:"Pergunta",
    AlternativaA :Object.create(Alternativa),
    AlternativaB :Object.create(Alternativa),
    AlternativaC :Object.create(Alternativa)
}

const questao1 = Object.create(Questao);
questao1.pergunta = "HTML é uma linguagem de programação?";
questao1.AlternativaA = Object.create(Alternativa);
questao1.AlternativaA.resposta = "Não";
questao1.AlternativaA.flag = true;
questao1.AlternativaB = Object.create(Alternativa);
questao1.AlternativaB.resposta = "Sim";
questao1.AlternativaB.flag = false;
questao1.AlternativaC = Object.create(Alternativa);
questao1.AlternativaC.resposta = "Depende";
questao1.AlternativaC.flag = false;

const questao2 =  Object.create(Questao);
questao2.pergunta = "O que é Css?";
questao2.AlternativaA = Object.create(Alternativa);
questao2.AlternativaA.resposta = "Estilização";
questao2.AlternativaA.flag = false;
questao2.AlternativaB = Object.create(Alternativa);
questao2.AlternativaB.resposta = "Folha de Cascata";
questao2.AlternativaB.flag = false;
questao2.AlternativaC = Object.create(Alternativa);
questao2.AlternativaC.resposta = "Folha de Estilo";
questao2.AlternativaC.flag = true;

const questao3 =  Object.create(Questao);
questao3.pergunta = "JavaScript é Java?";
questao3.AlternativaA = Object.create(Alternativa);
questao3.AlternativaA.resposta = "Não";
questao3.AlternativaA.flag = true;
questao3.AlternativaB = Object.create(Alternativa);
questao3.AlternativaB.resposta = "Sim";
questao3.AlternativaB.flag = false;
questao3.AlternativaC = Object.create(Alternativa);
questao3.AlternativaC.resposta = "Depende";
questao3.AlternativaC.flag = false;

const questao4 =  Object.create(Questao);
questao4.pergunta = "Tag de Titulo em HTML?";
questao4.AlternativaA = Object.create(Alternativa);
questao4.AlternativaA.resposta = "title";
questao4.AlternativaA.flag = true;
questao4.AlternativaB = Object.create(Alternativa);
questao4.AlternativaB.resposta = "h1";
questao4.AlternativaB.flag = false;
questao4.AlternativaC = Object.create(Alternativa);
questao4.AlternativaC.resposta = "p";
questao4.AlternativaC.flag = false;

const questao5  =  Object.create(Questao);
questao5.pergunta = "HTML é linguagem de?";
questao5.AlternativaA = Object.create(Alternativa);
questao5.AlternativaA.resposta = "Programação";
questao5.AlternativaA.flag = false;
questao5.AlternativaB = Object.create(Alternativa);
questao5.AlternativaB.resposta = "Estilo";
questao5.AlternativaB.flag = false;
questao5.AlternativaC = Object.create(Alternativa);
questao5.AlternativaC.resposta = "Marcação";
questao5.AlternativaC.flag = true;

const questao6  =  Object.create(Questao);
questao6.pergunta = "Qual a tag HTML para entrada de valores ?";
questao6.AlternativaA = Object.create(Alternativa);
questao6.AlternativaA.resposta = "iput";
questao6.AlternativaA.flag = false;
questao6.AlternativaB = Object.create(Alternativa);
questao6.AlternativaB.resposta = "in";
questao6.AlternativaB.flag = false;
questao6.AlternativaC = Object.create(Alternativa);
questao6.AlternativaC.resposta = "input";
questao6.AlternativaC.flag = true; 

const questao7  =  Object.create(Questao);
questao7.pergunta = "Atributo CSS para mudar cor de fundo?";
questao7.AlternativaA = Object.create(Alternativa);
questao7.AlternativaA.resposta = "color";
questao7.AlternativaA.flag = false;
questao7.AlternativaB = Object.create(Alternativa);
questao7.AlternativaB.resposta = "b-color";
questao7.AlternativaB.flag = false;
questao7.AlternativaC = Object.create(Alternativa);
questao7.AlternativaC.resposta = "background-color";
questao7.AlternativaC.flag = true; 
 
const questao8  =  Object.create(Questao);
questao8.pergunta = "Atributo CSS para mudar a fonte do texto?";
questao8.AlternativaA = Object.create(Alternativa);
questao8.AlternativaA.resposta = "font-modify";
questao8.AlternativaA.flag = false;
questao8.AlternativaB = Object.create(Alternativa);
questao8.AlternativaB.resposta = "font-famili";
questao8.AlternativaB.flag = false;
questao8.AlternativaC = Object.create(Alternativa);
questao8.AlternativaC.resposta = "font-family";
questao8.AlternativaC.flag = true; 

const questao9 =  Object.create(Questao);
questao9.pergunta = "Quando o programador deseja aplicar uma formatação na tag, esse processo é chamado de estilo?";
questao9.AlternativaA = Object.create(Alternativa);
questao9.AlternativaA.resposta = "inline";
questao9.AlternativaA.flag = true;
questao9.AlternativaB = Object.create(Alternativa);
questao9.AlternativaB.resposta = "intag";
questao9.AlternativaB.flag = false;
questao9.AlternativaC = Object.create(Alternativa);
questao9.AlternativaC.resposta = "offtag";
questao9.AlternativaC.flag = false; 

const questao10 =  Object.create(Questao);
questao10.pergunta = "Para deixar a página com o fundo azul claro, qual tag deve ser inserida?";
questao10.AlternativaA = Object.create(Alternativa);
questao10.AlternativaA.resposta = "<body style=background-color:lightblue>";
questao10.AlternativaA.flag = true;
questao10.AlternativaB = Object.create(Alternativa);
questao10.AlternativaB.resposta = "<body style=backcolor:blue>";
questao10.AlternativaB.flag = false;
questao10.AlternativaC = Object.create(Alternativa);
questao10.AlternativaC.resposta = "<body style=background-color:#0000FF>";
questao10.AlternativaC.flag = false; 

const perguntas = [questao1,
    questao2,
    questao3,
    questao4,
    questao5,
    questao6,
    questao7,
    questao8,
    questao9,
    questao10];

const arrayverificador = [];

function resetarCores(){
var primeira = document.getElementById("primeira");
var segunda = document.getElementById("segunda");
var terceira = document.getElementById("terceira");
primeira.style.backgroundColor = "springgreen";
segunda.style.backgroundColor = "springgreen";
terceira.style.backgroundColor = "springgreen";
}

function alternativas(){
let pergunta = document.getElementById("pergunta");
let resposta1 = document.getElementById("resposta1");
let resposta2 = document.getElementById("resposta2");
let resposta3 = document.getElementById("resposta3");
let numero = Math.floor(Math.random()* perguntas.length);
let value1 = document.getElementById("value1");
let value2 = document.getElementById("value2");
let value3 = document.getElementById("value3");
value1.value = perguntas[numero].AlternativaA.flag;
value2.value = perguntas[numero].AlternativaB.flag;
value3.value = perguntas[numero].AlternativaC.flag;
pergunta.innerHTML = perguntas[numero].pergunta;
resposta1.innerText = perguntas[numero].AlternativaA.resposta;
resposta2.innerText = perguntas[numero].AlternativaB.resposta;
resposta3.innerText = perguntas[numero].AlternativaC.resposta;
}

function preencher(){
let resposta1 = document.getElementById("resposta1");
let resposta2 = document.getElementById("resposta2");
let resposta3 = document.getElementById("resposta3");
let value1 = document.getElementById("value1");
let value2 = document.getElementById("value2");
let value3 = document.getElementById("value3");
if(value1.value == "true"){
arrayverificador[2] = resposta1.innerHTML;
}
else if(value2.value == "true"){
arrayverificador[2] = resposta2.innerHTML;
}
else if (value3.value == "true") {
arrayverificador[2] = resposta3.innerHTML;
}    
}

function AcertoErro(input){
let primeira = document.getElementById("primeira");
let segunda = document.getElementById("segunda");
let terceira = document.getElementById("terceira");
let value1 = document.getElementById("value1");
let value2 = document.getElementById("value2");
let value3 = document.getElementById("value3");
if(input =="input1"){
arrayverificador[0] = primeira;
arrayverificador[1] = value1;
}
else if(input =="input2"){
arrayverificador[0] = segunda;
arrayverificador[1] = value2;
}
else if(input =="input3"){
arrayverificador[0] = terceira;
arrayverificador[1] = value3;
}
preencher();
}

function respostaCerta(){
let respostaC = document.getElementById("respostaC");
respostaC.style.display = "block";
respostaC.innerHTML = "Resposta Certa : " + arrayverificador[2];
}

function buttonCBlock(){
let buttonC = document.getElementById("buttonC");
buttonC.style.display = "block";
}

let acertocont = 1;
function addContAcerto(){
let acerto = document.getElementById("acerto");
acerto.innerHTML = acertocont;
acertocont+=1;
}

let errocont = 1;
function addContError(){
let erro = document.getElementById("erro");
erro.innerHTML = errocont;
errocont+=1;
}
var cont = 1;
function adicionar(){
var perguntaad = document.getElementById("perguntaad");
perguntaad.innerHTML= cont;
cont+=1;
}

function submitNone(){
let submitb = document.getElementById("submitb");
submitb.style.display = "none";
}

function verificarResultado(){ 
var value1 = document.getElementById("value1");
var value2 = document.getElementById("value2");
var value3 = document.getElementById("value3");
if(value1.checked == false && value2.checked == false && value3.checked == false){
alert("Preencha Algum dos Campos✍🏽");
arrayverificador = [];
}
if(arrayverificador[1].value == "true"){
arrayverificador[0].style.backgroundColor = "green";
addContAcerto();
submitNone();
buttonCBlock();
adicionar();
}else{
arrayverificador[0].style.backgroundColor = "red";  
addContError();
buttonCBlock();
submitNone();
respostaCerta();
adicionar();
}
}