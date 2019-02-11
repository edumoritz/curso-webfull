const anonimo = process.argv.indexOf('-a') !== -1

if(anonimo) {
    process.stdout.write('Fala Anônimo!\n')
    process.exit()
} else {
    process.stdout.write('Informe o seu nome: ')
    process.stdin.on('data', data => { // Entrada de dados pelo teclado
        const nome = data.toString().replace('\n', '') // Com o replace não grava a tecla enter que é o \n

        process.stdout.write(`Fala ${nome}!!\n`) // Saida padrão
        process.exit()
    })
}

// Comando de execução: node entradaESaida.js