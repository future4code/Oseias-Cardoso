// Tente responder os exercícios dessa seção sem executar o código. 
// Se ficar muito difícil, pode rodar no seu computador 
// **para analisar e pensar sobre o resultado.** 

//................................... 1.  Leia o código abaixo..........................................................

    
    // const filme = {
    // 	nome: "Auto da Compadecida", 
    // 	ano: 2000, 
    // 	elenco: [
    // 		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
    // 		"Virginia Cavendish"
    // 		], 
    // 	transmissoesHoje: [
    // 		{canal: "Telecine", horario: "21h"}, 
    // 		{canal: "Canal Brasil", horario: "19h"}, 
    // 		{canal: "Globo", horario: "14h"}
    // 		]
    // }

    // console.log(filme.elenco[0])
    // console.log(filme.elenco[filme.elenco.length - 1])
    // console.log(filme.transmissoesHoje[2])
    
    // a) O que vai ser impresso no console?
    // Matheus Nachtergaele
    // Virginia Cavendish
    // {canal: 'Globo', horario: '14h'}

     //................................ 2. Leia o código abaixo.........................................................
    
//  const cachorro = {
// 	nome: "Juca", 
// 	idade: 3, 
// 	raca: "SRD"
//  }

//  const gato = {...cachorro, nome: "Juba"}

//  const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

//  console.log(cachorro)
//  console.log(gato)
//  console.log(tartaruga)

// a) O que vai ser impresso no console?

//  {nome: 'Juca', idade: 3, raca: 'SRD'}
//  {nome: 'Juba', idade: 3, raca: 'SRD'}
//  {nome: 'Jubo', idade: 3, raca: 'SRD'}

//b) O que faz a sintaxe dos três pontos antes do nome de um objeto?

//Serve para acessar e mudar o nome do objeto


//............................................3.Leia o código abaixo .............................................


// function minhaFuncao(objeto, propriedade) {
// 	return objeto[propriedade]
// }

// const pessoa = {
//   nome: "Caio", 
//   idade: 23, 
//   backender: false
// }

// console.log(minhaFuncao(pessoa, "backender"))
// console.log(minhaFuncao(pessoa, "altura"))

// a) O que vai ser impresso no console?

// false
// undefined

// b) Explique o valor impresso no console. Você sabe por que isso aconteceu?

// Sim, 'altura é um valor inexistente'


//....................................Exercícios de escrita de código................................................

//1. Resolva os passos a seguir

// a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e 
// apelidos (um array que sempre terá exatamente três apelidos). Depois, escreva uma função que recebe 
// como entrada um objeto e imprime uma mensagem no modelo abaixo: 

// const colega = {
//     nome: "João",
//     apelido: ["Manesinho", "Joãozinho", "Tibustino"]

// }
// const podeMeChamar = (colega) => {
//     console.log(`Olá eu sou o ${colega.nome}, mas pode me chamar de ${colega.apelido}`)

    
// }
// podeMeChamar(colega)

// // b) Agora, usando **o operador spread**, crie um novo objeto mantendo o valor da propriedade nome, 
// // mas com uma nova lista de três apelidos. Depois, chame a função feita no 
// // item anterior passando como argumento o novo objeto


// const novoColega ={
//     ...colega,
//     apelido: ["zoi", "zé", "tião"]
// } 
// podeMeChamar(novoColega)

//....... EXERCÍCIO 2......................................................

// a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão. 

// const amigo1 = {
// 	nome: "José", 
//   idade: 29, 
// 	profissao: "Gerente"
// }

// const amigo2 = {
// 	nome: "Carlos", 
//   idade: 30, 
// 	profissao: "Vendedor"
// }
// function minhaFuncao(amigo1)


// b) Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:

// 1. O valor de `nome`
// 2. O numero de caracteres do valor `nome`
// 3. O valor de `idade`
// 4. O valor de `profissão`
// 5. O numero de caracteres do valor `profissão`
// - Exemplo

    
//     const pessoa = {
//     	nome: "Bruno", 
//       idade: 23, 
//     	profissao: "Instrutor"
//     }

//     minhaFuncao(pessoa)

    // Retorno: ["Bruno", 5, 23, "Instrutor", 9]
    

//....... EXERCÍCIO 3......................................................

// const carrinho = []

// const fruta1 = {
//     nome: "caju",
//     disponibilidade: true,

// }

// const fruta2 = {
//     nome: "cajá",
//     disponibilidade: true,
// }

// const fruta3 = {
//     nome: "uva",
//     disponibilidade: true,

// }
// function recebaFruta (fruta) {
//     carrinho = recebaFruta
//     //console.log([carrinho.push(fruta1),carrinho.push(fruta2), carrinho.push(fruta3) ])

// }

// recebaFruta(fruta)
