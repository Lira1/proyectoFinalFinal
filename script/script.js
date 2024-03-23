let variable1 = '';
let variable2 = '';
let operador = '';
let puntoUsado = false;

const resultados = document.querySelector('#resultados');

function clean() {
    resultados.textContent = '0';
    variable1 = '';
    variable2 = '';
    operador = '';
    puntoUsado = false;
    console.clear();
}

function agregarNumero(numero) {
    if (resultados.textContent === '0' && numero !== '.') {
        resultados.textContent = numero;
    } else if (!isNaN(numero) || (numero === '.' && !puntoUsado)) {
        resultados.textContent += numero;
        if (numero === '.') puntoUsado = true;
    }
}

function seleccionarOperacion(op) {
    if (resultados.textContent !== '') {
        operador = op;
        variable1 = parseFloat(resultados.textContent);
        resultados.textContent = '';
        puntoUsado = false;
    }
}

function calcular() {
    if (resultados.textContent !== '') {
        variable2 = parseFloat(resultados.textContent);

        if(variable1==='' || variable1===0){
            variable1=0;
        }
        if(operador===''){
            operador='suma';
            variable1 = 0;
        }
        console.log('variable1: '+variable1);
        console.log('variable2: '+variable2);
        console.log('operador: '+operador)
        console.log(typeof('operador'));
        let resultado;
        switch (operador) {
            case 'suma':
                resultado = variable1 + variable2;
                break;
            case 'resta':
                resultado = variable1 - variable2;
                break;
            case 'producto':
                resultado = variable1 * variable2;
                break;
            case 'division':
                if (variable2 !== 0) {
                    resultado = variable1 / variable2;
                } else {
                    alert('Error, division entre 0');
                    clean();
                }
                break;
        }
        resultados.textContent = resultado;

        variable1 = resultado;
        variable2 = '';
        operador = '';
        puntoUsado = false;
    }
}

function getResult(operacion) {
    switch (operacion) {
        case 'igual':
            calcular();
            break;
        default:
            seleccionarOperacion(operacion);
            break;
    }
}
