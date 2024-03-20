/*
1. Resultado debe ser igual a vacio al iniciar la calculadora
2. Seleccionar una tecla de la calculadora debe de ser un numero o el ., caso contrario no hacer nada. 
    2.1 Si la primer tecla que se pulsa es el ., se pondra un 0 en el resultado, luego el .
3. Si no hay un numero valido, seleccionar una tecla de las operaciones no hara nada.
4. Seleccionar una operacion con un numero valido, se registrara en la variable1 el numero que se encuentre en la pantalla en ese momento (Debe de ser un numero valido)
    4.1 Si el numero es valido llamara la funcion indicada y borrara todo de la pantalla esperando un nuevo numero. Se repite el proceso
5. Hay una variable que indica que ya se uso el ., antes de ingresar un valor a una variable para sumar
 */

const input = document.querySelector('#item');
const resultados2 = document.querySelector('.resultados');
const resultados = document.querySelector('#resultados');
let campo1='';
let campo2='';

function clean(){
    // console.log(resultados2.textContent);
    resultados.textContent='0';
    campo1='';
    campo2='';
    console.clear();
}

function agregarNumero(numero){
    campo1=campo1+numero;
    console.log(campo1);
}