
const anguloA = 90;
const anguloB = 45;
const anguloC = 46;

if (anguloA+anguloB+anguloC === 180) {
    console.log(true);
} else if (anguloA+anguloB+anguloC < 0) {
    console.log('[ERRO]Este triângulo não é válido, valor menor que 0!!!');
} else {
    console.log(false);
}
