let inputValue = document.getElementById('icon_prefix');
const boton = document.getElementById('boton');

function main(){
    let caracteres = inputValue.value.split('');
    let array =[];
    for(let i = 0; i<caracteres.length; i++){
        if(caracteres[i] === '0'){
            array.push('e');
        } else if (caracteres[i] == 1){
            array.push('a');
        } else if (caracteres[i] == 2){
            array.push('i');
        } else if (caracteres[i] == 3){
            array.push('o');
        } else if (caracteres[i] == 4){
            array.push('n');
        } else if (caracteres[i] == 5){
            array.push('r');
        } else if (caracteres[i] == 6){
            array.push('t');
        } else if (caracteres[i] == 7){
            array.push('l');
        } else if (caracteres[i] == 8){
            array.push('s');
        } else if (caracteres[i] == 9){
            array.push('u');
        } else if (caracteres[i] === '!'){
            array.push('d');
        } else if (caracteres[i] === '#'){
            array.push('g');
        } else if (caracteres[i] === '$'){
            array.push('b');
        } else if (caracteres[i] === '&'){
            array.push('c');
        } else if (caracteres[i] === '%'){
            array.push('m');
        } else if (caracteres[i] === '/'){
            array.push('p');
        } else if (caracteres[i] === '('){
            array.push('f');
        } else if (caracteres[i] === ')'){
            array.push('h');
        } else if (caracteres[i] === '='){
            array.push('v');
        } else if (caracteres[i] === '?'){
            array.push('w');
        } else if (caracteres[i] === '¡'){
            array.push('y');
        } else if (caracteres[i] === '¿'){
            array.push('k');
        } else if (caracteres[i] === '{'){
            array.push('j');
        } else if (caracteres[i] === '}'){
            array.push('x');
        } else if (caracteres[i] === '['){
            array.push('q');
        } else if (caracteres[i] === ']'){
            array.push('z');
        }else {
            array.push(caracteres[i]);
        }
        
    }
    
    return array.join('');
}

const mensaje = document.getElementById('respuesta')
boton.onclick = () => { 
    mensaje.innerHTML = "Resultado: " + main();
}