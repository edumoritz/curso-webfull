const escola = "Eduardo"

console.log(escola.charAt(4))
console.log(escola.charAt(8))
console.log(escola.charCodeAt(3)) // Valor da tabela ASCI
console.log(escola.indexOf('3'))

console.log(escola.substring(1))
console.log(escola.substring(0, 3))

console.log('Nome: '.concat(escola).concat("!"))
console.log('Nome: ' + escola + "!")

console.log(escola.replace('d', 'e'))
console.log(escola.replace(/\w/g, 'e'))

console.log('Ana,Maria,Pedro'.split(',')) // gera um array quebrando apartir da virgula