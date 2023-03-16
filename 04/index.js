/*
4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:

SP – R$67.836,43
RJ – R$36.678,66
MG – R$29.229,88
ES – R$27.165,48
Outros – R$19.849,53

Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.
*/

const states = [
    {
        "state": "sp",
        "valor": 67836.43
    },
    {
        "state": "rj",
        "valor": 36678.66
    },
    {
        "state": "mg",
        "valor": 29229.88
    },
    {
        "state": "es",
        "valor": 27165.48
    },
    {
        "state": "anothers",
        "valor": 19849.53
    },
]

const Billing = states.reduce((accum, num) => accum + num.valor, 0)

states.forEach(state => {
    state.percentage = (state.valor * 100) / Billing
})

console.log(states)