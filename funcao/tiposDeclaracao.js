/**
 * O interpretador do javascript primeiro carrega as funções,
 * por isso o comando abaixo funciona corretamente.
 * 
 * Porem se a função for do tipo expression ou named isso não é possivel.
 */
console.log(soma(3, 4))

// function declaration
function soma(x, y) {
    return x + y
}

// function expression
const sub = function(x, y) {
    return x - y
}
console.log(sub(3, 4))

// named function expression
const mult = function mult(x, y) {
    return x * y
}
console.log(mult(3, 4))