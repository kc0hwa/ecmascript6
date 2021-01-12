// // FOR
// var frutas = ['abacaxi', 'maça', 'uva'];
// for(var i = 0; i < frutas.length; frutas++) {
// // corpo da iteração
// }

// var nomes = ['renato', 'marli', 'manoel', 'ronaldo']
// for(var i = 0; i < nomes.length; i++) {
//   console.log(nomes[i]);
// }

// // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// // FOREACH
// var nomes = ['renato', 'marli', 'manoel', 'ronaldo']
// nomes.forEach(function(nome) {
//   console.log(nome);
// })

// var nomes = ['renato', 'marli', 'manoel', 'ronaldo']

// function imprimeNome(nome) {
//   console.log(nome)
// }

// nomes.forEach(imprimeNome)

// var canais = ['SBT', 'Record', 'Globo']
// canais.forEach(function(canal) {
//   canais.push('RedeTV')
//   console.log(canal)
// })

// // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// // MAP
// var numeros = [1, 2, 3]
// var dobro = []

// for(var i = 0; i < numeros.length; i++) {
//   dobro.push(numeros[i] * 2)
// }

// console.log(numeros)
// console.log(dobro)

// var numeros = [1, 2, 3]
// var dobro = numeros.map(function(numero) {
//   return numero * 2
// })

// console.log(numeros)
// console.log(dobro)

// // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// // FILTER
// // ES5
// var alunos = [
//   { nome: 'joão', idade: 15 },
//   { nome: 'josé', idade: 18 },
//   { nome: 'maria', idade: 20}
// ]

// var alunosDeMaior = []
// for(var i = 0; i < alunos.length; i++) {
//   if(alunos[i].idade >= 18) {
//     alunosDeMaior.push(alunos[i])
//   }
// }

// console.log(alunosDeMaior)

// var alunos = [
//   { nome: 'joão', idade: 15 },
//   { nome: 'josé', idade: 18 },
//   { nome: 'maria', idade: 20 }
// ]

// var alunosDeMaior = alunos.filter(function(aluno) {
//   return aluno.idade >= 18
// })

// console.log(alunosDeMaior)

// // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// // FIND
// // ES5
// var alunos = [
//   { nome: 'joão' },
//   { nome: 'josé' },
//   { nome: 'maria' }
// ]

// var aluno
// for(var i = 0; i < alunos.length; i++) {
//   if(alunos[i].nome === 'josé') {
//     aluno = alunos[i]
//     break
//   }
// }

// console.log(aluno)

// var alunos = [
//   { nome: 'joão' },
//   { nome: 'josé' },
//   { nome: 'maria' }
// ]

// var aluno = alunos.find(function(aluno) {
//   return aluno.nome === 'josé'
// })

// console.log(aluno)

// // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// // EVERY
// var alunos = [
//   { nome: 'joão', idade: 18 },
//   { nome: 'maria', idade: 20 },
//   { nome: 'pedro', idade: 24 }
// ]

// var todosAlunosDeMaior = true
// for(var i = 0; i < alunos.length; i++) {
//   if(alunos[i].idade < 18) {
//     todosAlunosDeMaior = false
//     break
//   }
// }

// console.log(todosAlunosDeMaior)

// var alunos = [
//   { nome: 'joão', idade: 18 },
//   { nome: 'maria', idade: 20 },
//   { nome: 'josé', idade: 24 }
// ]

// var todosAlunosDeMaior = alunos.every(function(aluno) {
//   return alunos.idade > 18
// })

// console.log(todosAlunosDeMaior)

// // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// // SOME
// // ES5
// var pesoDasMalas = [12, 32, 21, 29]
// var temMalaAcimaDoPeso = false
// for(var i = 0; i < pesoDasMalas.length; i++) {
//   if(pesoDasMalas[i] > 30) {
//     temMalaAcimaDoPeso = true
//   }
// }

// console.log(temMalaAcimaDoPeso)

// var pesoDasMalas = [12, 32, 21, 29]
// var temMalaAcimaDoPeso = pesoDasMalas.some(function(pesoDaMala) {
//   return pesoDaMala > 30
// })

// console.log(temMalaAcimaDoPeso)

// // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// // REDUCE
// // Ex.1
// var numeros = [1, 2, 3, 4, 5]

// var soma = 0
// for(var i = 0; i < numeros.length; i++) {
//   soma += numeros[i]
// }

// console.log(soma)

// var numeros = [1, 2, 3, 4, 5]

// var soma = 0
// soma = numeros.reduce(function(soma, numero) {
//   return soma + numero
// }, 0)

// console.log(soma)

// // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// // Ex.2
// var alunos = [
//   { nome: 'joão', idade: 10 },
//   { nome: 'josé', idade: 20 },
//   { nome: 'marcos', idade: 30 }
// ]

// var nomes = alunos.reduce(function(arrayNomes, aluno) {
//   arrayNomes.push(aluno.nome)
//   return arrayNomes
// }, [])

// console.log(nomes)

// var frutas = [
//   { nome: 'banana', cor: 'amarela' },
//   { nome: 'maçã', cor: 'vermelho' },
//   { nome: 'laranja', cor: 'laranja' },
//   { nome: 'abacate', cor: 'verde' }
// ]

// var corDaFruta = frutas.reduce(function(arrayCores, cores) {
//   arrayCores.push(cores.cor)
//   return arrayCores
// }, [])

// console.log(corDaFruta)

// var nomeDaFruta = frutas.reduce(function(arrayNomes, nomes) {
//   arrayNomes.push(nomes.nome)
//   return arrayNomes
// }, [])

// console.log(nomeDaFruta)

// // Usei esta lista abaixo para prática dos métodos.

// let products = [
//   { nome: 'Omo Lavagem Perfeita 800g', tipo: 'Sabão em Pó Caixa', peso: 800},
//   { nome: 'Omo Sports 800g', tipo: 'Sabão em Pó Caixa', peso: 800},
//   { nome: 'Tixan Ypê Primavera 1kg', tipo: 'Sabão em Pó Caixa', peso: 1000},
//   { nome: 'Tixan Ypê Maciez 1kg', tipo: 'Sabão em Pó Caixa', peso: 1000},
//   { nome: 'Brilhante Limpeza Total 800g', tipo: 'Sabão em Pó Caixa', peso: 800},
//   { nome: 'Assim Floral 900g', tipo: 'Sabão em Pó Caixa', peso: 900},
//   { nome: 'Assim Poder das Enzimas - Tradicional 900g', tipo: 'Sabão em Pó Caixa', peso: 900},
//   { nome: 'Brilhante Limpeza Total 800g', tipo: 'Sabão em Pó Sachê', peso: 800},
//   { nome: 'Surf 5 em 1 Rosa e Flor de Liz 800g', tipo: ' Sabão em Pó Sachê', peso: 800},
//   { nome: 'Surf Limão e Bicarbonato 800g', tipo: ' Sabão em Pó Sachê', peso: 800},
//   { nome: 'Surf Lavanda 800g', tipo: ' Sabão em Pó Sachê', peso: 800},
//   { nome: 'Surf Cuidado do Coco 800g', tipo: ' Sabão em Pó Sachê', peso: 800},
//   { nome: 'Ares Flores do Campo 1kg', tipo: ' Sabão em Pó Sachê', peso: 1000},
//   { nome: 'Ares Camomila 1kg', tipo: ' Sabão em Pó Sachê', peso: 1000},
//   { nome: 'Ares Lavanda 1kg', tipo: ' Sabão em Pó Sachê', peso: 1000},
//   { nome: 'Omo Lavagem Perfeita 400g', tipo: 'Sabão em Pó Caixa', peso: 400},
//   { nome: 'Tixan Ypê Primavera 500g', tipo: 'Sabão em Pó Caixa', peso: 500},
//   { nome: 'Tixan Ypê Maciez 500g', tipo: 'Sabão em Pó Caixa', peso: 500},
//   { nome: 'Assim Floral 500g', tipo: 'Sabão em Pó Caixa', peso: 500},
//   { nome: 'Assim Poder das Enzimas - Tradicional 500g', tipo: 'Sabão em Pó Caixa', peso: 500},
//   { nome: 'Poliflor Cera Incolor 750ml', tipo: 'Cera Líquida', peso: 750},
//   { nome: 'Poliflor Ardósia 750ml', tipo: 'Cera Líquida', peso: 750},
//   { nome: 'Poliflor Vermelha 750ml', tipo: 'Cera Líquida', peso: 750},
//   { nome: 'Tacolac Super 500ml', tipo: 'Cera Líquida', peso: 500},
//   { nome: 'Brilho Fácil Vermelha 750ml', tipo: 'Cera Líquida', peso: 750},
//   { nome: 'Brilho Fácil Incolor 750ml', tipo: 'Cera Líquida', peso: 750},
//   { nome: 'Brilho Fácil Ardósia 750ml', tipo: 'Cera Líquida', peso: 750},
//   { nome: 'Pasta Multiuso Cristal Rosa 500ml', tipo: 'Sabão em Pasta', peso: 500},
//   { nome: 'Assolan Sabão em Pasta 500ml', tipo: 'Sabão em Pasta', peso: 500},
//   { nome: 'Urca Sabão em Pasta 500ml', tipo: 'Sabão em Pasta', peso: 500},
//   { nome: 'Super 500ml', tipo: 'Limpa Alumínio', peso: 500},
//   { nome: 'Diabo Verde 500ml', tipo: 'Limpa Alumínio', peso: 500},
//   { nome: 'Desentupidor de Pias e Ralos 300g', tipo: 'Desentupidor Químico', peso: 300},
//   { nome: 'Easy-off 250ml', tipo: 'Limpa Fornos', peso: 250},
//   { nome: 'Sapólio Radium Clássico 200g', tipo: 'Saponáceo', peso: 200},
//   { nome: 'Sapólio Radium Multiuso 300g', tipo: 'Saponáceo', peso: 300},
//   { nome: 'Sapólio Radium Multiuso c/ Cloro Ativo 300g', tipo: 'Saponáceo', peso: 300},
//   { nome: 'Sapólio Radium Multiuso c/ Cloro Ativo 250ml', tipo: 'Saponáceo', peso: 250},
//   { nome: 'Sapólio Radium Cremoso Multiuso Lavanda 250ml', tipo: 'Saponáceo Cremoso', peso: 250},
//   { nome: 'Sapólio Radium Cremoso Multiuso Clássico 250ml', tipo: 'Saponáceo Cremoso', peso: 250},
//   { nome: 'Sapólio Radium Cremoso Multiuso Limão 250ml', tipo: 'Saponáceo Cremoso', peso: 250},
//   { nome: 'Cif Multiuso Limão 250ml', tipo: 'Limpador Cremoso', peso: 250},
//   { nome: 'Cif Multiuso Original 250ml', tipo: 'Limpador Cremoso', peso: 250},
//   { nome: 'Veja Limpa Vidros Cristal 500ml', tipo: 'Limpa Vidro', peso: 500},
//   { nome: 'Veja Limpa Vidros Tradicional 500ml', tipo: 'Limpa Vidro', peso: 500},
//   { nome: 'Poliflor Lavanda 200ml', tipo: 'Lustra Móveis', peso: 200},
//   { nome: 'Poliflor Jasmim 200ml', tipo: 'Lustra Móveis', peso: 200},
//   { nome: 'Destac Brilha-Móveis 200ml', tipo: 'Lustra Móveis', peso: 200},
//   { nome: 'Peroba do Campo 200ml', tipo: 'Lustra Móveis', peso: 200},
//   { nome: 'Óleo de Peroba 200ml', tipo: 'Lustra Móveis', peso: 200},
//   { nome: 'Colman Anil Líquido 200ml', tipo: 'Corante Líquido', peso: 200},
//   { nome: 'Colman Anil Imperial 90g', tipo: 'Corante em Cubo', peso: 90},
//   { nome: 'Semorin 50ml', tipo: 'Tira Ferrugem', peso: 50},
//   { nome: 'King Óleo Multiuso 100ml', tipo: 'Óleo Multiuso', peso: 100},
//   { nome: 'Bom Ar Lavando 360ml', tipo: 'Aerossol', peso: 360},
//   { nome: 'Sampa Clean - Limpador Perfumado Concentrado Eucalipto 140ml', tipo: 'Limpador Líquido', peso: 140},
//   { nome: 'Sampa Clean - Limpador Perfumado Concentrado Ubatuba 140ml', tipo: 'Limpador Líquido', peso: 140},
//   { nome: 'Sampa Clean - Limpador Perfumado Concentrado Lavanda 140ml', tipo: 'Limpador Líquido', peso: 140},
//   { nome: 'Harpic Pedra Perfumada Bosque de Pinho 25g', tipo: 'Bloco Sanitário', peso: 25},
//   { nome: 'Harpic Pedra Perfumada Lavanda 25g', tipo: 'Bloco Sanitário', peso: 25},
//   { nome: 'Desumidificador Enxug Comfort 80g', tipo: 'Antimofo', peso: 80},
//   { nome: 'Desumidificador Enxug Talco 80g', tipo: 'Antimofo', peso: 80},
//   { nome: 'Desumidificador Enxug Amora 80g', tipo: 'Antimofo', peso: 80},
//   { nome: 'Antimofo Antitraço { nome: vários}, 25g', tipo: 'Antimofo', peso: 25},
//   { nome: 'Saco de Lixo 100L', tipo: 'Saco de Lixo', peso: 100000},
//   { nome: 'Saco de Lixo 50L', tipo: 'Saco de Lixo', peso: 50000},
//   { nome: 'Saco de Lixo 30L', tipo: 'Saco de Lixo', peso: 30000},
//   { nome: 'Saco de Lixo 15L', tipo: 'Saco de Lixo', peso: 15000},
//   { nome: 'Limpol Coco 500ml', tipo: 'Detergente', peso: 500},
//   { nome: 'Limpol Limão 500ml', tipo: 'Detergente', peso: 500},
//   { nome: 'Limpol Maçã 500ml', tipo: 'Detergente', peso: 500},
//   { nome: 'Limpol Neutro 500ml', tipo: 'Detergente', peso: 500},
//   { nome: 'Ypê Coco 500ml', tipo: 'Detergente', peso: 500},
//   { nome: 'Ypê Limão 500ml', tipo: 'Detergente', peso: 500},
//   { nome: 'Ypê Capim-limão 500ml', tipo: 'Detergente', peso: 500},
//   { nome: 'Ypê Maçã 500ml', tipo: 'Detergente', peso: 500},
//   { nome: 'Ypê Neutro 500ml', tipo: 'Detergente', peso: 500},
//   { nome: 'Ypê Clear 500ml', tipo: 'Detergente', peso: 500},
//   { nome: 'Kin Limp Lavanda 1L', tipo: 'Removedor', peso: 1000},
//   { nome: 'Tupi Tradicional 1L', tipo: 'Querosene', peso: 1000},
//   { nome: 'Zumbi 1L', tipo: 'Removedor', peso: 1000},
//   { nome: 'Búfalo Tradicional 1L', tipo: 'Querosene', peso: 1000},
//   { nome: 'Búfalo Tradicional 1L', tipo: 'Removedor', peso: 1000},
//   { nome: 'Zulu Clean s/ Cheiro 900ml', tipo: 'Removedor', peso: 900},
//   { nome: 'Zulu Perfumado 450ml', tipo: 'Removedor', peso: 450},
//   { nome: 'Zulu Clean 450ml', tipo: 'Removedor', peso: 450},
//   { nome: 'Apache 500ml', tipo: 'Querosene', peso: 500},
//   { nome: 'Zumbi 500ml', tipo: 'Removedor', peso: 500},
//   { nome: 'Vimak Floral 500ml', tipo: 'Removedor', peso: 500},
//   { nome: 'Búfalo Tradicional 500ml', tipo: 'Querosene', peso: 500},
//   { nome: 'Búfalo Lavanda 500ml', tipo: 'Querosene', peso: 500},
//   { nome: 'Kin Limp Lavanda 500ml', tipo: 'Removedor', peso: 500}
// ]
// // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// let newProducts = products.map(function(peso) {
//   return peso.peso
// })

// let somaDosProdutos = newProducts.reduce(function(pesoDosProdutos, total) {
//   return pesoDosProdutos += total
// }, 0)

// console.log(somaDosProdutos)

// let somentePeso = products.reduce(function(pesoTodosValores, valor) {
//   return pesoTodosValores += valor.peso
// }, 0)

// console.log(`${somentePeso} Kg`)

// let produtosUmKilo = products.filter(function(pesoMil) {
//   return pesoMil.peso >= 1000 && pesoMil.peso <= 1000
// })

// console.log(produtosUmKilo)

// let nomeTipo = products.find(function(nome) {
//   return nome.tipo === 'Saponáceo'
// })

// console.log(nomeTipo)

// let tipo = products.reduce(function(arrayTipo, nome) {
//   arrayTipo.push(nome.tipo)
//   return arrayTipo
// }, [])

// console.log(tipo)
// // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// // ITERAÇÕES COM ITERADORES E ITERÁVEIS

// var bruxos = ['Harry Potter', 'Hermione Granger', 'Rony Weasley']

// var iteradorBruxos = bruxos[Symbol.iterator]()

// console.log(iteradorBruxos.next())
// console.log(iteradorBruxos.next())
// console.log(iteradorBruxos.next())
// console.log(iteradorBruxos.next())

// var iterador = bruxos[Symbol.iterator]()
// var done = false
// var proximo = iterador.next()
// // do {
// // var bruxo = proximo.value
// // chapeuSeletor.fazerSelecaoDaCasa(bruxo)
// // proximo = iterador.next()
// // } while (!proximo.done)
// // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// // FOR OF & FOR IN

// var numeros = [1, 2, 3, 4, 5]
// for(var numero of numeros) {
//   console.log(numero)
// }

// var perfilDoFacebook = {
//   nome: 'Carlos',
//   idade: 22
// }

// // for(var dado of perfilDoFacebook) {
// //   console.log(dado)
// // }

// for(var propriedade in perfilDoFacebook) {
//   var info = perfilDoFacebook[propriedade]
//   console.log(info)
// }

// // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// // BREAK & CONTINUE

// var numeros = [1, 2, 3, 4, 5]
// for(var numero of numeros) {
//   if(numero > 3) {
//     break
//   }
//   console.log(numero)
// }

// for(var numero of numeros) {
//   if(numero === 2) {
//     continue
//   }
//   console.log(numero)
// }