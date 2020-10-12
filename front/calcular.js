var acomuladora  = "";
var valor1 = '';
var valor2 = '';
var operador = '';
var resultado ='';
const tela = document.getElementById("display");

function Acomulador(valor){
  
var v = valor;
acomuladora += v;
console.log(acomuladora)
tela.value += ` ${v}`;
}

function Operador(opera){
operador = opera;
valor1 = parseFloat(acomuladora);
acomuladora = "";
console.log(acomuladora)
tela.value += ` ${opera}`;
}

function Resultado(){

valor2 = parseFloat(acomuladora);
acomuladora = "";
console.log(acomuladora)
    switch (operador) {
        case '+':
             resultado = valor1 + valor2 ;
          break;
        case '-':
             resultado = valor1 - valor2 ;
            break;
        case '/':
             resultado = valor1 / valor2 ;
                break;
         case '*':
             resultado = valor1 * valor2 ;
                    break;                                   
      }

      
      tela.value+= ` = ${resultado}`;
      console.log(resultado);  



}
function Limpar(){
    tela.value = ""
    acomuladora  = "";
    valor1 = '';
    valor2 = '';
    operador = '';
    resultado =''
}
