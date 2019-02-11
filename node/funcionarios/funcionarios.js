const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios') 

/**
 * Buscar mulher chinesa com menor salário
 * buscar pais china
 * buscar genero mulher
 */
axios.get(url).then(response => {
    const funcionarios = response.data
    //console.log(funcionarios)
    const generoMulher = a => a.genero === 'F'
    const paisChina = a => a.pais === 'China'
    const salarioMenor = (function(sal, salAt) {
        if(sal.salario < salAt.salario){
            return sal
        } else {
            return salAt
        }
    })

    const resultado = funcionarios.filter(paisChina).filter(generoMulher).reduce(salarioMenor)
    //console.log(resultado)

    
/********************* PRIMEIRA TENTATIVA
 * 
    let resultado = funcionarios.map(function(e) {
        if(e.genero === 'F' && e.pais === 'China') {
            let res = `nome: ${e.nome}, genero: ${e.genero}, pais: ${e.pais}`
            return res
        }
    })
*/
})

/** Resposta Instrutor */
const chineses = f => f.pais === 'China'
const mulheres = f => f.genero === 'F'
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}
axios.get(url).then(response => {
    const funcionarios = response.data

    const func = funcionarios
        .filter(chineses)
        .filter(mulheres)
        .reduce(menorSalario)

    console.log(func)
})