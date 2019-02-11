for(let letras of "Eduardo") {
    console.log(letras);
}

const assuntosEcma = ['Map', 'Set', 'Promise']

console.log('============Ecma=============');

for (let i in assuntosEcma) {
    console.log(i);    
}

for(let assunto of assuntosEcma) {
    console.log(assunto);    
}

console.log('===========Map==============');

const assuntoMap = new Map([
    ['Map', { abordado: true}],
    ['Set', { abordado: true}],
    ['Promise', { abordado: false}]
])

for(let assunto of assuntoMap) {
    console.log(assunto);    
}

for(let chave of assuntoMap.keys()) {
    console.log(chave);    
}

for(let valor of assuntoMap.values()) {
    console.log(valor);    
}

console.log('===========Entries============');

for(let [ch, vl] of assuntoMap.entries()) {
    console.log(ch, vl);    
}

console.log('===============================');

const s = new Set(['a', 'b', 'c'])
for(let letra of s) {
    console.log(letra);    
}