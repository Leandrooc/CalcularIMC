
var inputPeso = document.getElementById("peso");

var inputAltura = document.getElementById("altura");

var resultado = document.getElementById("imc");

var resultado2 = document.getElementById("imc2");



function imc(){


    let peso = inputPeso.value

    let altura = inputAltura.value

    let imc1 = peso / Math.pow(inputAltura.value,2);
      
 
   resultado.innerHTML = `<p>Seu IMC é ${imc1.toFixed(2)}`


   if (peso != "" && altura != "") {
    resultado.innerHTML = `<p>Seu IMC é ${imc1.toFixed(2)}`
    resultado.innerHTML += `<p>` + classification(imc1)

   } else {
       resultado.innerHTML = `<p> Complete as Informações`
   }

}




function classification(imc1) {

    if(imc1 <= 18.49) {
        return "Magreza"
    } 
    
    else if ( imc1 >= 18.5 && imc1 <= 24.99) {
        return "Normal"
    } 
    
    else if ( imc1 >= 25 && imc1 <= 29.99) {
        return "Sobrepeso"
    } 
    
    else if ( imc1 >= 30 && imc1 <= 39.99) {
        return "Obesidade"
        } 
        
    else {
        return "Obesidade Grave"
    }
  
}
