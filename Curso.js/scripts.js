
function testaNome(){
    var nome = 'gabriel'


    if(nome === 'gabriel'){
        console.log('o nome é igual', nome)
    }
}
// testaNome() // aqui tu ta 'chamando/invocando' a função


function escreveNaTela(){
    var nome = "Gab";
    var SobreNome = "Cola";

    var Junto = nome + " " + SobreNome;

    console.log (nome);
    console.log (SobreNome);
    console.log (Junto);
    console.log (typeof nome);

    document.write("Tudo bom");
}

// escreveNaTela() // aqui tu ta 'chamando/invocando' a função


function nomeDaFuncao() {

//Falso_Verdadeiro Boolean
var verdadeiro = true ;
var falso = false

console.log(falso)
console.log(verdadeiro);

// Null_Undefined
var sobrenome;

console.log(sobrenome);

var seila = null;

console.log(seila)

// objeto

var obj = {
    nome: "Gab",
    idade: 16,
    Estudando: "Programação"
};

console.log(obj.nome);
console.log(obj.idade);
console.log(obj.Estudando);
console.log(typeof obj);

// Arrays

var arr = [5, "Gabri", true, {teste: 1, teste: 2}];

console.log(arr);

var arr2 = [1,2,3,4,5];

console.log(arr2);

console.log(arr[1]);
console.log[arr2[0]];

arr[4] = 10;

arr[0] = "Teste";

console.log(arr)

//if

var idade = 18

var IdadeMinima = 18

if(idade >= IdadeMinima) {
    console.log("Pode fazer carteira de Habilitação");
};

if(idade < 18) {
    console.log("Não pode fazer")
};


//op_comparação

var nome = "Gabr";

if(nome == "Gabr") {
    console.log("O seu nome é Gabr");
}

if(nome != "Gabr") {
    console.log("Seu nome não é esse");
}

//else _ else if

var nome = "Gabr";

if(nome == "Gabr") {
    console.log("O nome dele é Gabr");
} else if (nome == "Rave"){
console.log("O nome dele é rave")
}
else {
    console.log("Ele tem outro nome");
}

var numero = 20

if(numero > 19 ) {
    console.log("Ele pode entrar na festa");
} else if(numero <=18){
    console.log("só pode entrar com autorização");
}
else {
    console.log("Ele não pode entrar");
}

// === e !==

var numero = 5;

if(numero === 5 ) {
    console.log("O número é 5")
}

if (numero !== 5 ) {
    console.log("Não é numero do tipo number")
}

// operador_lógico and (&&)

var idade = 16;
var nome = "joão";

if(nome == "joâo" && idade == 16){
    console.log ("O joão pode entrar na aula");
} else {
    console.log ("Esse não é joão");
}

if(1 == 1 && 3 > 2 && true) {
    console.log("passou")
}


if((1 == 1 && 3 > 3) && true) {
    console.log("Passou")
}else if (nome == "João" && idade >= 14) {
    console.log ("Aqui passa")
}

// OR ou ||


var idade = 16;
var nome = "joão";

if (nome == 'joão' || idade > 14){
    console.log("Pode entrar");
} else {
    console.log("Não pode entrar");
}

if(nome = "Pedro" && (30 > 20 || 10 == 10)) {
    console.log("entrou");
}else {
    console.log("não entrou");
}

//operador lógico NOT (!) Inverte valores

if(!true){
    console.log ("passou")
}

var nome = "gabr"

if(!(nome == "gabr")){
    console.log ("ok")
}


// Repetição while

var x = 0;

while(x < 5) {

    console.log("aaaaaaaaaa Teste " + x);

    x++;
}

var arr = ["teste", "testando", "a", "b"];
var y = 0;
console.log(arr)

while(x <= 3){
    console.log(arr[y]);
    y++
}




}

 // nomeDaFuncao() //chame ela aqui

function Operadoresdeatribuicao() {
    var x = 1;
    var y = 2;

    console.log(x = x + y)
    console.log (x += y);

    console.log(x -= y);

    console.log (x *= y);
    console.log (x /= y);

    //lops
    console.log(x++);
    console.log(x--);

    while (x <=100) {

        console.log (x);

        x *= 2;
    }

    console.log(x);
    
    var x = 200;
    var j = 5

    while(x > 0 ) {
     console.log (x);
    x -= j;
    }

}

//Operadoresdeatribuicao()

function For() {
for (var i = 0; i < 10; i++){
    console.log ("Repetindo for: " + i)
}
var arr = [1,2,3,4];

for(var j = 0; j < arr.length; j++){
 console.log(arr[j]);
}

 for (var x = 5; x < 100; x *= 3){
    console.log (x);
 }
}

// For()

function breakecontinue() {

for(var i = 0; i > 0; i--) {
 console.log(i);
 if (i === 5){
 break;
 }
 console.log("Deu o break");
}

x = 0
while (x < 100 ){
    x += 10;
    if(x === 60 || x === 100){

        console.log("Continue");
        continue;
    }

    console.log ("Testando continue " + x);
    
}
}

 // breakecontinue()

function Comousarfuncoes(){

function funcoes (nome){

    console.log("nome é :" + nome)
}
funcoes("Gabr")


 var nomeDoBancoDeDados = "João";

 funcoes(nomeDoBancoDeDados);

 function soma (a, b) {
    var soma = a + b
    return soma;
 }

 var somaUm = soma (2,5);
 console.log (somaUm);

 var somaDois = soma (4,9);
 console.log (somaDois);

}

// Comousarfuncoes()

function fornaPratica(){
var lista = ["Laranja", "Maçã", "Pera", "Jaca", "Limão"]
var listaUL = document.createElement("ul");
var body = document.getElementsByTagName("body")[0];
console.log(body);

}

// fornaPratica()

function AlterarDomComFor(){

}

// AlterarDomComFor()

function scope (){
 // Fora de um function scope global
 // dentro de um function scope local
 // scopes globas podem ser usadas dentros de function mais functions não podem ser usadas na global 
}

 // scope()

 function letEconst () {
    let x = 5; // var x = 5 let é quase igual a var mais pode ser mudado nos if (scope local)

    const y = 10;  // não é possivel mudar o valor, é posivel ter uma const dentro de if (Scope local)
    
    x = 12;
    console.log (x);

    console.log("const ", y)

    if (true){
        let x = 20;

        console.log (x);

        let y = 50;
        console.log ("cons if", x );
    }
     
    console.log (x)
    
 }

 // letEconst()

 function MétodosNuméricos (){
    // ParseFloat 10.0
     console.log(parseFloat(12.999));
     console.log(Number.parseFloat(12.999));

    // parseInt

    console.log (parseInt("10"));
    console.log (parseInt(16.50));

    //toFixed

    console.log(23.515151.toFixed(1));

    // isNan (Nan - Not a number)


    // Max_VAlue e Min_Value

    console.log(Number.MAX_VALUE);

    console.log (Number.MIN_VALUE);

 }

 // MétodosNuméricos()

  function MetodosDeString(){
    // length - fala a quantidade de caracters

    var nome = ("gabriel");
    console.log (nome.length);

    var obj = ("bola")
    console.log (obj.length)

    //indexOF 

    console.log(nome[2]); // puxou a letra do nome - 0(g), 1(a), "2(b)"

    var frase = "O rato roeu a roupa do rei de roma"
    console.log(frase.indexOf("roeu")); // inicio da palavra roeu 

    //slice

    var roeu = frase.slice (7, 11);
    console.log (roeu);

    //replace

    var novaFrase = frase.replace ("roeu", "teste");

    console.log(novaFrase);

  }

 // MetodosDeString();

   function MetodosDeString2 (){
    // ToLowerCase e ToUpperCase

    var frase = "Esta é a frase";

    var fraseCaixaAlta = frase.toUpperCase();

    console.log (fraseCaixaAlta);

    console.log (frase.toLowerCase());

    // trim - retirar espaços que não precisa

    var nome = "     Gabr        ";
    console.log (nome);

    var nomeTrim = nome.trim();

    console.log (nomeTrim);

    //split

    console.log (frase.split(" "));

    var tags = "PHP, Javascipt, HTML, CSS";

    console.log(tags.split(", "));

    //LastindexOf - Saber indice da ultima palvra que vc quiser saber

    var FraseDois = "Eu quero a ultima palavra teste desse texto teste";

    console.log (FraseDois.indexOf("teste"));

    console.log (FraseDois.lastIndexOf("teste"));


   }
   // MetodosDeString2()

   function funcoesDoArray(){
    // lenght
    var arr = [1,2,3,4,5];
    console.log(arr);
    
    //push - Adicionar algo no fim do array
    arr.push(6);
    console.log(arr);

    //pop - Remover no fim do array
    arr.pop();
    console.log (arr);

    //unshift - Adiciona no começo do array
    arr.unshift(0);
    console.log(arr);

    //shift - Remove no começo do array
    arr.shift();
    console.log(arr);

    // Acessar o ultimo elemento
    console.log(arr[arr.length -1]);

    //isArray - Ver se é um array
    console.log (Array.isArray(5));
    console.log(Array.isArray(arr));


   }
  // funcoesDoArray()

   function funcoesDoArray2(){

    //splice - adicioga algo entre o array tambem pode remover *nao funciono*
    //var arr = (1,2,3,4,5);
    //arr.splice(2,0,999);

    // join - transformar um array numa string *nao funciono*
    var arr2 = ("O", "rato", "roeu", "a", "roupa");
    //console.log(arr2.join( ));

    //reverse - inverte o array *nao funciono*
    console.log(arr2.reverse());
   }
   // funcoesDoArray2()

   function CriandoObjetos(){
    let pessoa ={
        nome: "gab",
        idade:  16,
        falar: function(){
            console.log("Ola mundo");
        },
        soma: function(a,b){
            return a + b;
        }

    }

    console.log(pessoa.nome);
    pessoa.falar();

    var soma = pessoa.soma (2, 2);
    console.log(soma);

   }
   // CriandoObjetos()