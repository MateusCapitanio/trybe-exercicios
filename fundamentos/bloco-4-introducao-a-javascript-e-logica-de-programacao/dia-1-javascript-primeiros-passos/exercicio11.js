
//Exercício de descontos em salário bruto

const salarioBruto = 1500;

var descontoINSS = '';
var descontoIR = '';

var ir = '';
var inss = '';

console.log(`[Salário bruto] ${salarioBruto}`)



//DESCONTO DO INSS

if(salarioBruto<1556.94) {
    inss=0.08;
    descontoINSS = inss*salarioBruto;
    console.log('[INSS] alíquota de 8%');
} else if(salarioBruto>=1556.95 && salarioBruto< 2594.92) {
    inss=0.09;
    descontoINSS = inss*salarioBruto;
    console.log('[INSS] alíquota de 9%')
} else if(salarioBruto>=2594.93 && salarioBruto<5189.82) {
    inss=0.11;
    descontoINSS = inss*salarioBruto;
    console.log('[INSS] alíquota de 11%')
} else if(salarioBruto>5189.82) {
    inss=570.88;
    descontoINSS = inss;
    console.log('[INSS] alíquota fixa de R$570,88')
}


//DESCONTO DO IMPOSTO DE RENDA

if(salarioBruto<1903.98) {
    console.log('[IR] Isento do IR')
} else if(salarioBruto>=1903.99 && salarioBruto< 3751.05) {
    ir=0.15;
    descontoIR = ir*salarioBruto
    console.log('[IR] alíquota de 15%')
} else if(salarioBruto>=3751.06 && salarioBruto<4664.68) {
    ir=0.22;
    descontoIR = ir*salarioBruto
    console.log('[IR] alíquota de 22%')
} else if(salarioBruto>4.664,68) {
    ir=0.275;
    descontoIR = ir*salarioBruto
    console.log('[IR] alíquota de 27.5%')
}

const salarioFinal = salarioBruto - descontoIR - descontoINSS


//Consultei documentação de decimais no google para relembrar das propriedades de casas decimais
console.log(salarioFinal.toFixed(2))

