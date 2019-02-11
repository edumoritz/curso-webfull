const tecnologias = new Map()
tecnologias.set('react', { framwork: false })
tecnologias.set('angular', { framwork: true })

console.log(tecnologias.react)
console.log(tecnologias.get('react'));
console.log(tecnologias.get('react').framwork);

const chavesVariadas = new Map([
    [function () { }, 'Função'],
    [{}, 'Objeto'],
    [123, 'Número'],
])

chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl)
})

console.log('===================================================================');
console.log(chavesVariadas.has(123));
console.log(chavesVariadas.size);
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123));
console.log(chavesVariadas.size);

chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b')
chavesVariadas.set(456, 'b')
console.log(chavesVariadas);


