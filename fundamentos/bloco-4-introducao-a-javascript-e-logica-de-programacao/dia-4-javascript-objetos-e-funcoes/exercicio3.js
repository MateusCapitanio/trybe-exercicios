
var qtd = 10;
var ingredientes = ['mussarela','farinha','manteiga','fermento','leite'];
var sacola = [];
var cont = 0;


for(let i = 0;i<qtd;i+=1) {
    var pizza = [];
    for(let i = 0;i<ingredientes.length;i+=1) {
        pizza.push(ingredientes[i])
    }
    sacola.push(pizza)
}


for(let i = 0;i<=sacola.length;i+=1) {
    console.log(`[Pizza ${cont}]: ${pizza}`)
    cont+=1;
}

