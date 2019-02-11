const a = 1
const b = 2
const c = 3

const obj1 = { a: a, b: b, c: c } //forma velha
const obj2 = { a, b, c } //forma nova
console.log(obj1, obj2)

const nomeAttr = 'nota'
const valorAttr = 7.87

const obj3 = {}
obj3[nomeAttr] = valorAttr //forma velha
console.log(obj3)

const obj4 = {[nomeAttr]: valorAttr} //forma nova
console.log(obj4)

const obj5 = {
    funcao1: function() { //forma velha
        // ...
    },
    funcao2() { //forma nova
        // ...
    }
}
console.log(obj5)