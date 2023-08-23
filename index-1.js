let nome
let idade

console.log(typeof nome, typeof idade) //nada sera impresso pois as variaveis nao tem valor

nome = prompt("qual o seu nome?")
idade = prompt("qual sua idade?")

console.log(typeof nome, typeof idade) // console imprimiu string porque o codigo prompt sempre retorna o tipo string 

console.log("Olá", nome, "você tem", idade, )

