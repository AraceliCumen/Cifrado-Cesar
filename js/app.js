/*Crea una web que pida, por medio de un prompt(), una frase al usuario y devuelva el mismo mensaje encriptado según el algoritmo de Cifrado César con el parámetro de desplazamiento de 33 espacios hacia la derecha

Por ejemplo:

Texto original: ABCDEFGHIJKLMNOPQRSTUVWXYZ
Texto codificado: HIJKLMNOPQRSTUVWXYZABCDEFG

Consideraciones Específicas

Tu programa debe ser capaz de cifrar y descifrar tanto letras mayúsculas como minúsculas. La fórmula para descifrar es: (x - n) % 26
Tu código debe estar compuesto por 2 funciones con los siguientes nombres: cipher y decipher
El usuario no debe poder ingresar un campo vacío o que contenga números*/

//Creamos una función para evaluar si la letra es mayuscula
function isUpperCase(str) {
  return str === str.toUpperCase();
}

//Creamos la función para encriptar
function cipher(string){
  //Creamos una variable para obtener la posicion del caracter encriptado
  var posititonCaracterEncripted=0;
  //Creamos una variable para obtener en caracter encriptado
  var caracterEncriteped='';
  //Creamos una varable para almacenar la palabra encriptada
  var wordEncriteped='';

  //Válidamos que no se ingresen vacíos ni números
  if(string.length===0 || containsNumber(string)){
    return alert('No estas ingresando una cadena, no ingreses campos vacíos ni números');

  }else{
    //Recorremos el string que proporciona el usuario
    for(i=0;i<string.length;i++){
     //Creamos una variable para obtener el codAscci de la letra
     var codAscci=string.charCodeAt(i);
     //Evaluamos si la letra es mayúscula o minúscula
     if(isUpperCase(string)){
     //Obtemos el caracter encriptado de la posición i, si es mayuscula
     posititonCaracterEncripted=((codAscci-65+33)%26+65);
     }else{
     //Obtemos el caracter encriptado de la posición i, si es minúscula
     posititonCaracterEncripted=((codAscci-97+33)%26+97);
     }
     //Obtnempos el caracter de la nueva posición
     caracterEncriteped=String.fromCharCode(posititonCaracterEncripted);
     //Concatenamos los caracteres para formar el nuevo string ya encriptado
     wordEncriteped+=caracterEncriteped;
     }
     return wordEncriteped;
 }
}


//Creamos la función para encriptar
function decipher(string){
 //Creamos una variable para obtener la posicion del caracter encriptado
 var posititionCaracterDesencripted=0;
 //Creamos una variable para obtener en caracter encriptado
 var caracterDesencripteped='';
 //Creamos una varable para almacenar la palabra encriptada
 var wordDesencriteped='';
//Válidamos que no se ingresen vacíos ni números ni vacios
    if(string.length===0 ||containsNumber(string)  ){
     return alert('No estas ingresando una cadena, no ingreses campos vacíos ni números');

    }else{

      //Recorremos el string que proporciona el usuario
      for(i=0;i<string.length;i++){
        //Creamos una variable para obtener el codAscci de la letra
        var codAscci=string.charCodeAt(i);
        //Evaluamos si la letra es mayúscula o minúscula
        if(isUpperCase(string)){
          //Obtemos el caracter deseencriptado de la posición i, si es mayuscula
          posititionCaracterDesencripted=(codAscci-65-33%26+65);
        }else{
          //Obtemos el caracter desencriptado de la posición i, si es minúscula
          posititionCaracterDesencripted=(codAscci-97-33%26+97);
        }
        //Obtnempos el caracter de la nueva posición
        caracterDesencripteped=String.fromCharCode(posititionCaracterDesencripted);
        //Concatenamos los caracteres para formar el nuevo string ya desencriptado
        wordDesencriteped+=caracterDesencripteped
      }
      return wordDesencriteped;
   }

}

//Creamos una función para evaluar siel string es númererico
function containsNumber(string) {
  var result=false;
  for(i=0;i<string.length;i++){
    var n =string.charAt(i);
    result=!isNaN(parseFloat(n)) && isFinite(n);
  }
  return result;
}


//Menú
do {
 var op=0;
  var strMenu = '1. Encriptar\n2. Desencriptar\n3. Apagar\n';
  op = parseInt(prompt(strMenu));

  if (op === 1) {
    var wordforEncripted=prompt('Ingresa tu cadena a Encriptar:');
    alert('Tu palabra encriptada es: '+cipher(wordforEncripted));
  }
  if (op === 2) {
    var wordforDesencripted=prompt('Ingresa tu cadena a Desencriptar:');
    alert('Tu palabra desencriptada es: '+decipher(wordforDesencripted));
  }

} while (op !== 3);
