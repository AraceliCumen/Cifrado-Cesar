# CIFRADO CÉSAR


## Objetivos del Programa:
<p> Crea una web que pida, por medio de un prompt(), una frase al usuario y devuelva el mismo mensaje encriptado según el algoritmo de Cifrado César con el parámetro de desplazamiento de 33 espacios hacia la derecha</p>

<p>Por ejemplo:</p>

<p>Texto original: ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
<p>Texto codificado: HIJKLMNOPQRSTUVWXYZABCDEFG</p>

<p>Consideraciones Específicas</p>

<p>Tu programa debe ser capaz de cifrar y descifrar tanto letras mayúsculas como minúsculas. La fórmula para descifrar es: (x - n) % 26</p>
<p>Tu código debe estar compuesto por 2 funciones con los siguientes nombres: cipher y decipher </p>
<p>El usuario no debe poder ingresar un campo vacío o que contenga números. </p>

## Diagrama de Flujo:
![Diagrama de Flujo Cigrado César](/assets/docs/chiperCesar.jpeg "Diagrama de Flujo Cigrado César")


## Explicación del Pseudocódigo:
<p>Función para encriptar una palabra</p>
### PROGRAMA CIFRADO CESAR
* FUNCIÓN -->isUpperCase(str), retorna si un string está en mayúscula o minúsculas.
* FUNCIÓN -->cipher(string),evalúa según las condiciones:
    posititonCaracterEncripted=0: Variable que almacena la posición del caracter encriptado   
  - caracterEncriteped= '': Variable para obtener en caracter encriptado
  - wordEncriteped= '': Variable para almacenar la palabra encriptada
  - SI (===0 || string es un número):
    <p>Muestra:('No estas ingresando una cadena, no ingreses campos vacíos ni números');</p>
  - CASO CONTRARIO
    <p>Recorremos el string que proporciona el usuario</p>
    - PARA (i=0;i< Tamaño del string;i++)
     	- codAscci : variable para obtener el codAscci de la letra
      - codAscci= codAscci de la letra
      - Evaluamos si la letra es mayúscula o minúscula
      - SI(string está en mayúsculas):
          <p>Obtemos el caracter encriptado de la posición i, si es mayúscula;con lasiguiente fórmula:</p>
          <p>posititonCaracterEncripted=((codAscci-65+33)%26+65);</p>
      - CASO CONTRARIO:
           <p>Obtemos el caracter encriptado de la posición i, si es minúscula; con la siguiente fórmula:</p>
           <p>posititonCaracterEncripted=((codAscci-97+33)%26+97);</p>
      - Obtnemos el caracter de la nueva posición
      - caracterEncriteped=Caracter de la nueva posición, en código asci
      - Concatenamos los caracteres para formar el nuevo string ya encriptado
      - wordEncriteped+=caracterEncriteped
    - RETORNAMOS wordEncriteped;


* FUNCIÓN --> decipher(string),evalúa según las condiciones:
   - posititionCaracterDesencripted=0: Variable que almacena la posición del caracter deseencriptado   
   - caracterDesencriteped= '': Variable para obtener en caracter desencriptado
   - wordDesencritepedEncriteped= '': Variable para almacenar la palabra deseencriptada
   - SI (===0 || string es un número):
     <p>Muestra:('No estas ingresando una cadena, no ingreses campos vacíos ni números');</p>
   - CASO CONTRARIO
     <p>Recorremos el string que proporciona el usuario</p>
     - PARA (i=0;i< Tamaño del string;i++)
      	- codAscci : variable para obtener el codAscci de la letra
       - codAscci= codAscci de la letra
       - Evaluamos si la letra es mayúscula o minúscula
       - SI(string está en mayúsculas):
           <p>Obtemos el caracter deseencriptado de la posición i, si es mayúscula;con lasiguiente fórmula:</p>
           <p>posititonCaracterDsencripted=((codAscci-65+33)%26+65);</p>
       - CASO CONTRARIO:
            <p>Obtemos el caracter deseencriptado de la posición i, si es minúscula; con la siguiente fórmula:</p>
            <p>posititionCaracterDesencripted=((codAscci-97+33)%26+97);</p>
       - Obtnemos el caracter de la nueva posición
       - caracterDesencriteped=Caracter de la nueva posición, en código asci
       - Concatenamos los caracteres para formar el nuevo string ya deseencriptado
       - wordDesencriteped+=caracterDesencriteped
     - RETORNAMOS wordDesencriteped


* Hacemos un Menú:
  - HACER
     - op=0: Almacena las opciones del menú
     - strMenu = '1. Encriptar\n2. Desencriptar\n3. Apagar\n':
     - strMenu: String que almacena el menú
     - op = Convertir a Entero lo que ingrese el usurio en (prompt(strMenu))

  - PARA (op === 1):
      - wordforEncripted=Solicitamos al usuario Ingresar su cadena ('Ingresa tu cadena a Encriptar:');
      - MOSTRAMOS ('Tu palabra encriptada es: '+cipher(wordforEncripted))

  - PARA (op === 2) {
      - wordforDesencripted= Solicitamos al usuario Ingresar su cadena ('Ingresa tu cadena a Desencriptar:');
      - MOSTRAMOS ('Tu palabra desencriptada es: '+decipher(wordforDesencripted));

  - MIENTRAS (op !== 3);
