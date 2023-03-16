/*
3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
• O menor valor de faturamento ocorrido em um dia do mês;
• O maior valor de faturamento ocorrido em um dia do mês;
• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

IMPORTANTE:
a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;
*/

const dados = require('./dados.json')

const MonthlyBilling = dados.reduce((accum, num) => accum + num.valor, 0)
let DaysOn = 0
let MajorDay = dados[0].valor
let MinorDay = dados[0].valor
let SuperDays = 0

dados.forEach(data => {
    if (data.valor !== 0.0) {
        DaysOn++
        if (data.valor > MajorDay) {
            MajorDay = data.valor
        }
        if (data.valor < MinorDay) {
            MinorDay = data.valor
        }
    }
})

const Media = (MonthlyBilling / DaysOn)

dados.forEach(data => {
    if(data.valor > Media) {
        SuperDays++
    }
})

console.log(`Menor valor de faturamento: R$${MinorDay.toFixed(2)}
Maior valor de faturamento: R$${MajorDay.toFixed(2)}
Quantidade de dias que o faturamento diário foi superior à media mensal: ${SuperDays} dias`)