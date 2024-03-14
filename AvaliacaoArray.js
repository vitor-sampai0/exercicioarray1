//metodo splice: o metodo splice remove,adiciona ou subistitui e aqui mostra o 
//splice adicionando os elementos 4 e 5 na variavel listaNumeros


//declaro variavel ListaNumeros
let listaNumeros = [1, 2, 3]
//declaro variavel Array
let games = new Array ("valorant", "fortnite", "gta")
//adiciona o item 4 e 5 apos o terceiro intem
listaNumeros.splice(3, 0, 4, 5)
//mostra a lista de numeros 
console.log(listaNumeros)
//esperava que o console mostrasse 1,2,3,4,5