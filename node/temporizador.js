const schedule = require('node-schedule')

/**
 * Os asteriscos qualquer dia mes ano..
 * /5 - executa de 5 em 5 segundos
 * 10 - horario atual para iniciar atividade
 * 0 domindo
 * 1 segunda ...
 * 5 sexta
 */
const tarefa1 = schedule.scheduleJob('*/5 * 10 * * 5', function(){
    console.log('Executando Tarefa 1!', new Date().getSeconds());    
})

setTimeout(function () {
    tarefa1.cancel()
    console.log('Cancelando Tarefa 1!')
}, 20000)

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)]
regra.hour = 12
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function() {
    console.log('Executando Tarefa 2!', new Date().getSeconds())
})