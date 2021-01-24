// // FOR
var frutas = ['abacaxi', 'maça', 'uva'];
for(var i = 0; i < frutas.length; frutas++) {
// corpo da iteração
}

var nomes = ['renato', 'marli', 'manoel', 'ronaldo']
for(var i = 0; i < nomes.length; i++) {
  console.log(nomes[i])
}


// // FOREACH
var nomes = ['renato', 'marli', 'manoel', 'ronaldo']
nomes.forEach(function(nome) {
  console.log(nome);
})

var nomes = ['renato', 'marli', 'manoel', 'ronaldo']

function imprimeNome(nome) {
  console.log(nome)
}

nomes.forEach(imprimeNome)

var canais = ['SBT', 'Record', 'Globo']
canais.forEach(function(canal) {
  canais.push('RedeTV')
  console.log(canal)
})


// // MAP
var numeros = [1, 2, 3]
var dobro = []

for(var i = 0; i < numeros.length; i++) {
  dobro.push(numeros[i] * 2)
}

console.log(numeros)
console.log(dobro)

var numeros = [1, 2, 3]
var dobro = numeros.map(function(numero) {
  return numero * 2
})

console.log(numeros)
console.log(dobro)


// // FILTER
// // ES5
var alunos = [
  { nome: 'joão', idade: 15 },
  { nome: 'josé', idade: 18 },
  { nome: 'maria', idade: 20}
]

var alunosDeMaior = []
for(var i = 0; i < alunos.length; i++) {
  if(alunos[i].idade >= 18) {
    alunosDeMaior.push(alunos[i])
  }
}

console.log(alunosDeMaior)

var alunos = [
  { nome: 'joão', idade: 15 },
  { nome: 'josé', idade: 18 },
  { nome: 'maria', idade: 20 }
]

var alunosDeMaior = alunos.filter(function(aluno) {
  return aluno.idade >= 18
})

console.log(alunosDeMaior)


// // FIND
// ES5
var alunos = [
  { nome: 'joão' },
  { nome: 'josé' },
  { nome: 'maria' }
]

var aluno
for(var i = 0; i < alunos.length; i++) {
  if(alunos[i].nome === 'josé') {
    aluno = alunos[i]
    break
  }
}

console.log(aluno)

var alunos = [
  { nome: 'joão' },
  { nome: 'josé' },
  { nome: 'maria' }
]

var aluno = alunos.find(function(aluno) {
  return aluno.nome === 'josé'
})

console.log(aluno)


// EVERY
var alunos = [
  { nome: 'joão', idade: 18 },
  { nome: 'maria', idade: 20 },
  { nome: 'pedro', idade: 24 }
]

var todosAlunosDeMaior = true
for(var i = 0; i < alunos.length; i++) {
  if(alunos[i].idade < 18) {
    todosAlunosDeMaior = false
    break
  }
}

console.log(todosAlunosDeMaior)

var alunos = [
  { nome: 'joão', idade: 18 },
  { nome: 'maria', idade: 20 },
  { nome: 'josé', idade: 24 }
]

var todosAlunosDeMaior = alunos.every(function(aluno) {
  return alunos.idade > 18
})

console.log(todosAlunosDeMaior)


// SOME
// ES5
var pesoDasMalas = [12, 32, 21, 29]
var temMalaAcimaDoPeso = false
for(var i = 0; i < pesoDasMalas.length; i++) {
  if(pesoDasMalas[i] > 30) {
    temMalaAcimaDoPeso = true
  }
}

console.log(temMalaAcimaDoPeso)

var pesoDasMalas = [12, 32, 21, 29]
var temMalaAcimaDoPeso = pesoDasMalas.some(function(pesoDaMala) {
  return pesoDaMala > 30
})

console.log(temMalaAcimaDoPeso)


// REDUCE
// Ex.1
var numeros = [1, 2, 3, 4, 5]

var soma = 0
for(var i = 0; i < numeros.length; i++) {
  soma += numeros[i]
}

console.log(soma)

var numeros = [1, 2, 3, 4, 5]

var soma = 0
soma = numeros.reduce(function(soma, numero) {
  return soma + numero
}, 0)

console.log(soma)


// Ex.2
var alunos = [
  { nome: 'joão', idade: 10 },
  { nome: 'josé', idade: 20 },
  { nome: 'marcos', idade: 30 }
]

var nomes = alunos.reduce(function(arrayNomes, aluno) {
  arrayNomes.push(aluno.nome)
  return arrayNomes
}, [])

console.log(nomes)

var frutas = [
  { nome: 'banana', cor: 'amarela' },
  { nome: 'maçã', cor: 'vermelho' },
  { nome: 'laranja', cor: 'laranja' },
  { nome: 'abacate', cor: 'verde' }
]

var corDaFruta = frutas.reduce(function(arrayCores, cores) {
  arrayCores.push(cores.cor)
  return arrayCores
}, [])

console.log(corDaFruta)

var nomeDaFruta = frutas.reduce(function(arrayNomes, nomes) {
  arrayNomes.push(nomes.nome)
  return arrayNomes
}, [])

console.log(nomeDaFruta)

// Usei esta lista abaixo para prática dos métodos.

let products = [
  { nome: 'Omo Lavagem Perfeita 800g', tipo: 'Sabão em Pó Caixa', peso: 800},
  { nome: 'Omo Sports 800g', tipo: 'Sabão em Pó Caixa', peso: 800},
  { nome: 'Tixan Ypê Primavera 1kg', tipo: 'Sabão em Pó Caixa', peso: 1000},
  { nome: 'Tixan Ypê Maciez 1kg', tipo: 'Sabão em Pó Caixa', peso: 1000},
  { nome: 'Brilhante Limpeza Total 800g', tipo: 'Sabão em Pó Caixa', peso: 800},
  { nome: 'Assim Floral 900g', tipo: 'Sabão em Pó Caixa', peso: 900},
  { nome: 'Assim Poder das Enzimas - Tradicional 900g', tipo: 'Sabão em Pó Caixa', peso: 900},
  { nome: 'Brilhante Limpeza Total 800g', tipo: 'Sabão em Pó Sachê', peso: 800},
  { nome: 'Surf 5 em 1 Rosa e Flor de Liz 800g', tipo: ' Sabão em Pó Sachê', peso: 800},
  { nome: 'Surf Limão e Bicarbonato 800g', tipo: ' Sabão em Pó Sachê', peso: 800},
  { nome: 'Surf Lavanda 800g', tipo: ' Sabão em Pó Sachê', peso: 800},
  { nome: 'Surf Cuidado do Coco 800g', tipo: ' Sabão em Pó Sachê', peso: 800},
  { nome: 'Ares Flores do Campo 1kg', tipo: ' Sabão em Pó Sachê', peso: 1000},
  { nome: 'Ares Camomila 1kg', tipo: ' Sabão em Pó Sachê', peso: 1000},
  { nome: 'Ares Lavanda 1kg', tipo: ' Sabão em Pó Sachê', peso: 1000},
  { nome: 'Omo Lavagem Perfeita 400g', tipo: 'Sabão em Pó Caixa', peso: 400},
  { nome: 'Tixan Ypê Primavera 500g', tipo: 'Sabão em Pó Caixa', peso: 500},
  { nome: 'Tixan Ypê Maciez 500g', tipo: 'Sabão em Pó Caixa', peso: 500},
  { nome: 'Assim Floral 500g', tipo: 'Sabão em Pó Caixa', peso: 500},
  { nome: 'Assim Poder das Enzimas - Tradicional 500g', tipo: 'Sabão em Pó Caixa', peso: 500},
  { nome: 'Poliflor Cera Incolor 750ml', tipo: 'Cera Líquida', peso: 750},
  { nome: 'Poliflor Ardósia 750ml', tipo: 'Cera Líquida', peso: 750},
  { nome: 'Poliflor Vermelha 750ml', tipo: 'Cera Líquida', peso: 750},
  { nome: 'Tacolac Super 500ml', tipo: 'Cera Líquida', peso: 500},
  { nome: 'Brilho Fácil Vermelha 750ml', tipo: 'Cera Líquida', peso: 750},
  { nome: 'Brilho Fácil Incolor 750ml', tipo: 'Cera Líquida', peso: 750},
  { nome: 'Brilho Fácil Ardósia 750ml', tipo: 'Cera Líquida', peso: 750},
  { nome: 'Pasta Multiuso Cristal Rosa 500ml', tipo: 'Sabão em Pasta', peso: 500},
  { nome: 'Assolan Sabão em Pasta 500ml', tipo: 'Sabão em Pasta', peso: 500},
  { nome: 'Urca Sabão em Pasta 500ml', tipo: 'Sabão em Pasta', peso: 500},
  { nome: 'Super 500ml', tipo: 'Limpa Alumínio', peso: 500},
  { nome: 'Diabo Verde 500ml', tipo: 'Limpa Alumínio', peso: 500},
  { nome: 'Desentupidor de Pias e Ralos 300g', tipo: 'Desentupidor Químico', peso: 300},
  { nome: 'Easy-off 250ml', tipo: 'Limpa Fornos', peso: 250},
  { nome: 'Sapólio Radium Clássico 200g', tipo: 'Saponáceo', peso: 200},
  { nome: 'Sapólio Radium Multiuso 300g', tipo: 'Saponáceo', peso: 300},
  { nome: 'Sapólio Radium Multiuso c/ Cloro Ativo 300g', tipo: 'Saponáceo', peso: 300},
  { nome: 'Sapólio Radium Multiuso c/ Cloro Ativo 250ml', tipo: 'Saponáceo', peso: 250},
  { nome: 'Sapólio Radium Cremoso Multiuso Lavanda 250ml', tipo: 'Saponáceo Cremoso', peso: 250},
  { nome: 'Sapólio Radium Cremoso Multiuso Clássico 250ml', tipo: 'Saponáceo Cremoso', peso: 250},
  { nome: 'Sapólio Radium Cremoso Multiuso Limão 250ml', tipo: 'Saponáceo Cremoso', peso: 250},
  { nome: 'Cif Multiuso Limão 250ml', tipo: 'Limpador Cremoso', peso: 250},
  { nome: 'Cif Multiuso Original 250ml', tipo: 'Limpador Cremoso', peso: 250},
  { nome: 'Veja Limpa Vidros Cristal 500ml', tipo: 'Limpa Vidro', peso: 500},
  { nome: 'Veja Limpa Vidros Tradicional 500ml', tipo: 'Limpa Vidro', peso: 500},
  { nome: 'Poliflor Lavanda 200ml', tipo: 'Lustra Móveis', peso: 200},
  { nome: 'Poliflor Jasmim 200ml', tipo: 'Lustra Móveis', peso: 200},
  { nome: 'Destac Brilha-Móveis 200ml', tipo: 'Lustra Móveis', peso: 200},
  { nome: 'Peroba do Campo 200ml', tipo: 'Lustra Móveis', peso: 200},
  { nome: 'Óleo de Peroba 200ml', tipo: 'Lustra Móveis', peso: 200},
  { nome: 'Colman Anil Líquido 200ml', tipo: 'Corante Líquido', peso: 200},
  { nome: 'Colman Anil Imperial 90g', tipo: 'Corante em Cubo', peso: 90},
  { nome: 'Semorin 50ml', tipo: 'Tira Ferrugem', peso: 50},
  { nome: 'King Óleo Multiuso 100ml', tipo: 'Óleo Multiuso', peso: 100},
  { nome: 'Bom Ar Lavando 360ml', tipo: 'Aerossol', peso: 360},
  { nome: 'Sampa Clean - Limpador Perfumado Concentrado Eucalipto 140ml', tipo: 'Limpador Líquido', peso: 140},
  { nome: 'Sampa Clean - Limpador Perfumado Concentrado Ubatuba 140ml', tipo: 'Limpador Líquido', peso: 140},
  { nome: 'Sampa Clean - Limpador Perfumado Concentrado Lavanda 140ml', tipo: 'Limpador Líquido', peso: 140},
  { nome: 'Harpic Pedra Perfumada Bosque de Pinho 25g', tipo: 'Bloco Sanitário', peso: 25},
  { nome: 'Harpic Pedra Perfumada Lavanda 25g', tipo: 'Bloco Sanitário', peso: 25},
  { nome: 'Desumidificador Enxug Comfort 80g', tipo: 'Antimofo', peso: 80},
  { nome: 'Desumidificador Enxug Talco 80g', tipo: 'Antimofo', peso: 80},
  { nome: 'Desumidificador Enxug Amora 80g', tipo: 'Antimofo', peso: 80},
  { nome: 'Antimofo Antitraço { nome: vários}, 25g', tipo: 'Antimofo', peso: 25},
  { nome: 'Saco de Lixo 100L', tipo: 'Saco de Lixo', peso: 100000},
  { nome: 'Saco de Lixo 50L', tipo: 'Saco de Lixo', peso: 50000},
  { nome: 'Saco de Lixo 30L', tipo: 'Saco de Lixo', peso: 30000},
  { nome: 'Saco de Lixo 15L', tipo: 'Saco de Lixo', peso: 15000},
  { nome: 'Limpol Coco 500ml', tipo: 'Detergente', peso: 500},
  { nome: 'Limpol Limão 500ml', tipo: 'Detergente', peso: 500},
  { nome: 'Limpol Maçã 500ml', tipo: 'Detergente', peso: 500},
  { nome: 'Limpol Neutro 500ml', tipo: 'Detergente', peso: 500},
  { nome: 'Ypê Coco 500ml', tipo: 'Detergente', peso: 500},
  { nome: 'Ypê Limão 500ml', tipo: 'Detergente', peso: 500},
  { nome: 'Ypê Capim-limão 500ml', tipo: 'Detergente', peso: 500},
  { nome: 'Ypê Maçã 500ml', tipo: 'Detergente', peso: 500},
  { nome: 'Ypê Neutro 500ml', tipo: 'Detergente', peso: 500},
  { nome: 'Ypê Clear 500ml', tipo: 'Detergente', peso: 500},
  { nome: 'Kin Limp Lavanda 1L', tipo: 'Removedor', peso: 1000},
  { nome: 'Tupi Tradicional 1L', tipo: 'Querosene', peso: 1000},
  { nome: 'Zumbi 1L', tipo: 'Removedor', peso: 1000},
  { nome: 'Búfalo Tradicional 1L', tipo: 'Querosene', peso: 1000},
  { nome: 'Búfalo Tradicional 1L', tipo: 'Removedor', peso: 1000},
  { nome: 'Zulu Clean s/ Cheiro 900ml', tipo: 'Removedor', peso: 900},
  { nome: 'Zulu Perfumado 450ml', tipo: 'Removedor', peso: 450},
  { nome: 'Zulu Clean 450ml', tipo: 'Removedor', peso: 450},
  { nome: 'Apache 500ml', tipo: 'Querosene', peso: 500},
  { nome: 'Zumbi 500ml', tipo: 'Removedor', peso: 500},
  { nome: 'Vimak Floral 500ml', tipo: 'Removedor', peso: 500},
  { nome: 'Búfalo Tradicional 500ml', tipo: 'Querosene', peso: 500},
  { nome: 'Búfalo Lavanda 500ml', tipo: 'Querosene', peso: 500},
  { nome: 'Kin Limp Lavanda 500ml', tipo: 'Removedor', peso: 500}
]

let newProducts = products.map(function(peso) {
  return peso.peso
})

let somaDosProdutos = newProducts.reduce(function(pesoDosProdutos, total) {
  return pesoDosProdutos += total
}, 0)

console.log(somaDosProdutos)

let somentePeso = products.reduce(function(pesoTodosValores, valor) {
  return pesoTodosValores += valor.peso
}, 0)

console.log(`${somentePeso} Kg`)

let produtosUmKilo = products.filter(function(pesoMil) {
  return pesoMil.peso >= 1000 && pesoMil.peso <= 1000
})

console.log(produtosUmKilo)

let nomeTipo = products.find(function(nome) {
  return nome.tipo === 'Saponáceo'
})

console.log(nomeTipo)

let tipo = products.reduce(function(arrayTipo, nome) {
  arrayTipo.push(nome.tipo)
  return arrayTipo
}, [])

console.log(tipo)

// ITERAÇÕES COM ITERADORES E ITERÁVEIS

var bruxos = ['Harry Potter', 'Hermione Granger', 'Rony Weasley']

var iteradorBruxos = bruxos[Symbol.iterator]()

console.log(iteradorBruxos.next())
console.log(iteradorBruxos.next())
console.log(iteradorBruxos.next())
console.log(iteradorBruxos.next())

var iterador = bruxos[Symbol.iterator]()
var done = false
var proximo = iterador.next()

// Exemplo hipotético
// do {
// var bruxo = proximo.value
// chapeuSeletor.fazerSelecaoDaCasa(bruxo)
// proximo = iterador.next()
// } while (!proximo.done)

// FOR OF & FOR IN

var numeros = [1, 2, 3, 4, 5]
for(var numero of numeros) {
  console.log(numero)
}

var perfilDoFacebook = {
  nome: 'Carlos',
  idade: 22
}

// for(var dado of perfilDoFacebook) {
//   console.log(dado)
// }

for(var propriedade in perfilDoFacebook) {
  var info = perfilDoFacebook[propriedade]
  console.log(info)
}


// BREAK & CONTINUE

var numeros = [1, 2, 3, 4, 5]
for(var numero of numeros) {
  if(numero > 3) {
    break
  }
  console.log(numero)
}

for(var numero of numeros) {
  if(numero === 2) {
    continue
  }
  console.log(numero)
}

// MAP WEAKMAP

var map = new Map()
function funcao(){}
var objeto = {}

map.set("string", "sou uma string")
map.set(objeto, "sou um objeto")
map.set(funcao, "sou uma função")

console.log(map.get("string"))
console.log(map.get(objeto))
console.log(map.get(funcao))

console.log("\ntamanho: " + map.size)
console.log(map.has("string"))
console.log(map.has("abc"))

map.delete("string")
console.log(map.has("string"))

map.clear()
console.log("tamanho: " + map.size)

var mapa = new Map()
mapa.set('um', 1)
mapa.set('dois', 2)
mapa.set('três', 3)

for(var chave of mapa.keys()) {
  console.log(chave)
}

for(var valor of mapa.values()) {
  console.log(valor)
}

for(var entrada of mapa.entries()) {
  console.log(entrada)
}

var weakMap = new WeakMap()
var elemento1 = window
var elemento2 = document.querySelector('body')

weakMap.set(elemento1, 'sou o elemento1')
weakMap.set(elemento2, 'sou o elemento2')

console.log(weakMap.get(elemento1))
console.log(weakMap.get(elemento2))

elemento2.parentNode.removeChild(elemento2)
elemento2 = null

console.log(weakMap.get(elemento2))

var weakMap = new WeakMap()
function funcao(){}
var objeto = {}

// weakMap.set("string", "isso é uma string") Uncaught TypeError: Invalid value used as weak map key at WeakMap.set
weakMap.set(funcao, "isso é uma função")
weakMap.set(objeto, "isso é um objeto")

function Pessoa(nome) {
  this._nome = nome
}

Pessoa.prototype.getNome = function() {
  return this._nome
}

var roberto = new Pessoa('Roberto')
console.log(roberto.getNome())
console.log(roberto._nome)

var Pessoa = (function() {

  var dadosPrivados = new WeakMap()

  function Pessoa(nome) {
    dadosPrivados.set(this, { nome: nome })
  }

  Pessoa.prototype.getNome = function() {
    return dadosPrivados.get(this).nome
  }

  return Pessoa
}())

var rafael = new Pessoa('Rafael')
console.log(rafael.getNome())
console.log(rafael.nome)

// ADMNISTRANDO UMA BIBLIOTECA

var livros = []
var estates = new Map()
for(var livro of livros) {
  estantes.set(livro.getTitulo(), getEstante())
}

function getLocalizacaoDoLivro(tituloDoLivro) {
  var estante = estantes.get(tituloDoLivro)
  if(estante === undefined) {
    return 'Livro não encontrado no acervo!'
  }

  return estantes.get(tituloDoLivro)
}

// LISTAS SEM REPETIÇÕES COM SETS E WEAKSETS

function Set() {
  var array = []
  this.add = function(valor) {
    if(array.indexOf(valor) === -1) {
      array.push(valor)
    }
  }
}
// Uncaught TypeError: set is not iterable

function Set() {
  var array = []
  this.add = function(valor) {
    if(array.indexOf(valor) === -1) {
      array.push(valor)
    }
  },

  this.mostrarValores = function() {
    console.log(array)
  }
}
// Uncaught TypeError: set is not iterable

var set = new Set()
set.add(2)
set.add(1)
set.add(2)

set.mostrarValores()

// SET

var set = new Set();
set.add(2);
set.add(1);
set.add(2);

for (const valor of set) {
console.log(valor); // 2, 1
}

var set = new Set([2, 1, 2])
for(const valor of set) {
  console.log(valor)
}

var musicas = new Set()
musicas.add('musica1')

for(var musica of musicas) {
  console.log(musica)
}

var musicas = new Set(['musica1', 'musica2'])
musicas.delete('musica1')

for(var musica of musicas) {
  console.log(musica)
}

var musicas = new Set(['musica1', 'musica2', 'musica3'])

musicas.clear()

for(var musica of musicas) {
  console.log(musica)
}

var musicas = new Set(['musica1'])
if(musicas.has('musica1')) {
  console.log('Já está na lista!')
}

var musicas = new Set(['musica1', 'musica2', 'musica3'])
var qtdMusicas = musicas.size
console.log("Há " + qtdMusicas + " músicas na lista.")

// WEAKSET

var musica1 = {
  titulo: 'O amor não tem rollback',
  autor: 'SQL'
}

var musicas = new WeakSet([musica1])
console.log(musicas)

var musicas = new Set([musica1])
console.log(musicas)

musica1 = null

console.log(musicas)

var texto = 'texto'
var idade = 10

// console.log(texto + idade)


// CONST & LET

const pessoa = {
  nome: 'joão'
}
pessoa.idade = 12

// console.log(pessoa)

var id = 1
var id = 2
// console.log(id)

var mensagem = 'olá'
{
  var mensagem = 'adeus'
}
// console.log(mensagem)

var mensagem = 'olá'

function mensagem() {
  var mensagem = 'adeus'
}
// console.log(mensagem)

const arrayVar = []
for (var i = 1; i < 5; i++) {
  arrayVar.push(function () {
    // console.log(i)
  })
}

const arrayLet = []
for (let i = 1; i < 5; i++) {
  arrayLet.push(function () {
    // console.log(i)
  })
}

arrayVar.forEach(function (funcao) {
  funcao()
})

arrayLet.forEach(function (funcao) {
  funcao()
})

const arrayVarNew = []
for (var i = 0; i < 5; i++) {
  arrayVarNew.push(function () {
    // console.log(i)
  })
}

i = 10

arrayVarNew.forEach(function (funcao) {
  funcao()
})


// HOISTING

imprimirNome('Tabata')

function imprimirNome(nome) {
  // console.log(nome)
}

var valor = 0
if (true) {
  // Novo escopo, o TDZ do valor começa

  //  Ao tentar acessar a variável, tomamos ReferenceError,
  // pois neste momento ela é uma variável que não foi inicializada
  console.log(valor)

  let valor // TDZ termina
  console.log(valor)

  valor = 1
  console.log(valor)
}

console.log(valor)

const nome = 'Diego'
console.log(`Bem-vindo ${nome}`)

const n1 = 1,
  n2 = 2
console.log(`${n1} + ${n2} = ${n1 + n2}`)

const div =
`
<div>
  <p><b>Nome:</b> ${nome}</p>
  <p><b>Idade:</b> ${idade}</p>
  <p><b>Endereço:</b> ${endereco}</p>
</div>
`

var div1 = '<div>'
div1 += '<p><b>Nome:</b> ' + nome + '</p>'
div1 += '<p><b>Idade:</b> ' + idade + '</p>'
div1 += '<p><b>Endereço:</b> ' + endereco + '</p>'
div1 += '</div>'

const horas = new Date().getHours()
const mensagem1 = `Bom dia, são ${horas} horas`
console.log(mensagem1)

const mensagem2 = defineMensagem`Bom dia, são ${horas} horas`

function defineMensagem(strings, ...values) {
console.log(strings)
console.log(values)
}

const mensagem4 = defineMensagem`${""}${horas} horas`

function defineMensagem(strings, ...values) {
  const hora = values[1];
  if (hora >= 6 && hora <= 12) {
    values[0] = "Bom dia";
  } else if (hora > 12 && hora <= 18) {
    values[0] = "Boa tarde";
  } else {
    values[0] = "Boa noite";
  }
  values[0] = `${values[0]}, são`;
  return `${values[0]}${strings[0]}${hora}${strings[2]}`
}

// ARROW FUNCTIONS

// declaração da função
function desligar() {
  // corpo da função
}

// expressão de função
var funcaoDesligar = function () {
  // corpo da função
}

var funcaoDesligar = new Function('corpo da função')
var funcaoDesligarComParametros = new Function(arg1,arg2, 'corpo da função')


// ES5
var boasVindas = function (nome) {
  return "Seja bem-vindo, " + nome
}

console.log(boasVindas("Luiz"))


// ES6
// ex1
var boasVindas = (nome) => {
  return "Seja bem-vindo, " + nome
}

console.log(boasVindas("Tom"))

// ex2
var boasVindas = nome => {
  return "Seja bem-vindo, " + nome
}

console.log(boasVindas("Jerry"))

// ex3
var boasVindas = nome => "Seja bem-vindo, " + nome
console.log(boasVindas("Renato"))

// ex4
const boasVindasTeDou = nome => `Seja bem-vindo, ${nome}`
console.log(boasVindasTeDou("Renato Brito"))

console.log(this)

function impreMeuContextoDeExecucao() {
  console.log(this)
}

impreMeuContextoDeExecucao()

var objeto = {
  meuContexto: function () {
    console.log(this)
  }
}

objeto.meuContexto()

const equipeEx1 = {
  nome: 'Guerreiros Z',
  membros: ['Goku', 'Kuririn', 'Vegeta'],
  membrosDaEquipe: function () {
    this.membros.forEach(function (membro) {
      console.log(`${membro} é da equipe ${this.nome}`)
    })
  }
}

const equipeEx2 = {
  nome: 'Guerreiros Z',
  membros: ['Goku', 'Kuririn', 'Vegeta'],
  membrosDaEquipe: function() {
    const that = this
    this.membros.forEach(function(membro) {
      console.log(`${membro} é da equipe ${that.nome}.`)
    })
  }
}

equipeEx2.membrosDaEquipe()

const equipeEx3 = {
  nome: 'Guerreiros Z',
  membros: ['Goku', 'Kuririn', 'Vegeta'],
  membrosDaEquipe: function() {
    this.membros.forEach(membro => {
      console.log(`${membro} é da equipe ${this.nome}`)
    })
  }
}

equipeEx3.membrosDaEquipe()

function mostrarPropriedadeDoContexto(nomePropriedade) {
  console.log(this[nomePropriedade])
}

var mockLocation = {
  location: 'fake-location'
}

var funcao = mostrarPropriedadeDoContexto.bind(mockLocation)

const equipe = {
  nome: 'Guerreiros Z',
  membros: ['Goku', 'Kuririn', 'Vegeta'],
  membrosDaEquipe: function() {
    this.membros.forEach(function(membro) {
      console.log(`${membro} é da equipe ${this.nome}`)
    }.bind(this))
  }
}

equipe.membrosDaEquipe()

// MELHORIAS EM OBJETOS LITERAIS

function Livro(titulo) {
  this.titulo = titulo
}

var livro = new Livro('Entendendo ES6')
console.log(livro.titulo)

var livro = {
  titulo: 'Anjos e Demônios'
}

console.log(livro.titulo)

var outroLivro = livro
livro.titulo = 'O Código da Vinci'

console.log(outroLivro.titulo)
console.log(livro.titulo)

var livro = {
  titulo: 'Anjos e Demônios'
}

livro.autor = 'Dan Brown'
livro['mostrarLivro'] = function () {
  console.log(this.titulo + ', ' + this.autor)
}

livro.mostrarLivro()

// DECLARAÇÃO DE PROPRIEDADES

// ES5
var nome0 = 'Maria'
var sobrenome = 'Madalena'

var pessoa0 = {
  nome: nome0,
  sobrenome: sobrenome
}

// ES6
// ex1
const nome1 = 'Maria'
const sobrenome1 = 'Madalena'
const pessoa1 = { nome1, sobrenome1 }

console.log(pessoa1.nome1)
console.log(pessoa1.sobrenome1)

// ex2
const nome2 = 'Maria'
const sobrenome2 = 'Madalena'
const seApresentar = function() {
  console.log(`Olá! Sou a ${nome2} ${sobrenome2}`)
}

const pessoa2 = { nome2, sobrenome2, seApresentar}
pessoa2.seApresentar()

// ex3
const nome3 = 'Maria'
const sobrenome3 = 'Madalena'

const pessoa3 = {
  nome3,
  sobrenome3,
  seApresentar() {
    console.log(`Olá! Sou a ${this.nome3} ${this.sobrenome3}`)
  }
}

pessoa3.seApresentar()

// ÍNDICES DE PROPRIEDADES COMPUTADAS

const nomeMetodo = 'invocar'
const meuObjeto = {
  [nomeMetodo]() {
    console.log('executou o método')
  }
}

meuObjeto[nomeMetodo]()

const nomeFuncao = 'mostrar'
const propriedade0 = 'Nome'

const meuOutroObjeto = {
  Nome: 'Objeto',
  [`${nomeFuncao}${propriedade}`](){
    console.log(this[propriedade])
  }
}

meuOutroObjeto.mostrarNome()


const apelido = "apelido";
const umaPessoa = {
  nome: 'José',
  [apelido]: 'Zé'
}
console.log(umaPessoa[apelido])

// OBJETOS LITERAIS X JSON

// exemplo fictício
function obterDadosDaTela() {
  const nome = document.getElementById('nome').value
  const idade = document.getElementById('idade').value
  const sexo = document.getElementById('sexo').value
  const convenio = document.getElementById('convenio').value

  return { nome, idade, sexo, convenio }
}

const url = 'https://sistemasaude.com.br/api/cadastros/paciente'
const dados = obterDadosDaTela()

const dadosJson = JSON.stringify(dados)

$.ajax({
  url           : url,
  dataType      : 'json',
  contentType   : 'application/json; charset=UTF-8',
  data          : dadosJson,
  type          : 'POST',
  complete      : callback
})


// PARÂMETROS PREDEFINIDOS EM FUNÇÕES

function minhaMaeMandouEuEscolherEsseDaqui(qualEuEscolhi) {
  console.log(qualEuEscolhi)
}

minhaMaeMandouEuEscolherEsseDaqui('terceiro')
minhaMaeMandouEuEscolherEsseDaqui()

function imprimeNomeCompleto(nome, sobrenome, nomeDoMeio) {
  console.log(`${nome} ${nomeDoMeio} ${sobrenome}`)
}

imprimeNomeCompleto('Jorge', 'Reis')
imprimeNomeCompleto('Isabela', 'Joana Luiza', 'Jesus')

function imprimeNomeCompleto(nome, nomeDoMeio, sobrenome) {
  if(nomeDoMeio === undefined) {
    console.log(`${nome} ${sobrenome}`)
  } else {
    console.log(`${nome} ${nomeDoMeio} ${sobrenome}`)
  }
}

imprimeNomeCompleto('Romulo', 'Scampini')
imprimeNomeCompleto('Leticia', 'Aparecida', 'de Souza')


// ATRIBUINDO VALORES PADRÕES

function imprimeNomeCompleto(nome, sobrenome, nomeDoMeio = '') {
  console.log(`${nome} ${nomeDoMeio} ${sobrenome}`)
}

imprimeNomeCompleto('João', 'da Silva', 'Aparecido')
imprimeNomeCompleto('João', 'da Silva')


// VALORES UNDEFINED

function multiplicaPor(valor, multiplicador = 2) {
  return valor * multiplicador
}

const valor0 = multiplicaPor(2, undefined)
console.log(valor)

function print(valor = '') {
  console.log(valor)
}

print()
print(null)


// // REFERENCIANDO OUTROS VALORES PADRÕES

function calculaPotencia(x = 2, y = x) {
  console.log(Math.pow(x, y))
}

calculaPotencia()
calculaPotencia(2)
calculaPotencia(2,2)

/*
Na primeira ocorrência, quando invocamos a função sem
nenhum argumento, ele considerou o valor padrão que
estabelecemos para a variável x e atribuiu o valor de x na variável
y , o que resultou em dois ao quadrado. Na segunda ocorrência,
especificamos o primeiro argumento, mas não o segundo.
Novamente foi atribuído o valor das variáveis x a y , resultando
mais uma vez em dois ao quadrado. Na terceira ocorrência, como
passamos ambos parâmetros, o resultado foi o que já era esperado.
*/


// REFERENCIANDO VARIÁVEIS INTERNAS

const v = 'valor1'
function funcao(x = v) {
  const v = 'valor2'
  console.log(x)
}

funcao()


// UTILIZANDO FUNÇÕES COMO VALORES PADRÕES

function facaAlgoComMeuNome(nome, callback = z => {
  console.log(z)
}) {
  callback(nome)
}

facaAlgoComMeuNome('Muriel')


// TORNANDO VALORES OBRIGATÓRIOS

function parametroObrigatorio(parametro) {
  throw new Error(`O parâmetro "${parametro}" é obrigatório!`)
}

function inserirNaTela(objeto = parametroObrigatorio('objeto')) {
  // lógica de implementação do método
  }

inserirNaTela()


// PARÂMETROS INFINITOS COM OPERADOR REST

function montaQuerySelect() {
  const tabela = arguments[0]
  const qtdArgs = arguments.length
  let cols = ''
  if(qtdArgs > 1) {
    for(let index = 1; index < qtdArgs; index++) {
      cols += `${arguments[index]}, `
    }
    cols = cols.substring(0, cols.length - 2)
  } else {
    cols = '*'
  }

  return `SELECT ${cols} FROM ${tabela}`
}

const query1 = montaQuerySelect('tabela')
const query2 = montaQuerySelect('tabela', 'col1')
const query3 = montaQuerySelect('tabela', 'col1', 'col2')

console.log(query1)
console.log(query2)
console.log(query3)


// ENTENDA O QUE ARGUMENTS FAZ

function logarTodosArgumentos() {
  for(let i = 0; i < arguments.length; i++) {
    console.log(arguments[i])
  }
}

logarTodosArgumentos(1,2,3)

function somar() {
  let soma = 0
  const qtd = arguments.length
  for(let i = 0; i < qtd; i++) {
    soma += arguments[i]
  }

  return soma
}

console.log(somar(1,2))
console.log(somar(1,2,3))
console.log(somar(1,2,3,4))


// // FOR
var frutas = ['abacaxi', 'maça', 'uva'];
for(var i = 0; i < frutas.length; frutas++) {
// corpo da iteração
}

var nomes = ['renato', 'marli', 'manoel', 'ronaldo']
for(var i = 0; i < nomes.length; i++) {
  console.log(nomes[i])
}


// // FOREACH
var nomes = ['renato', 'marli', 'manoel', 'ronaldo']
nomes.forEach(function(nome) {
  console.log(nome);
})

var nomes = ['renato', 'marli', 'manoel', 'ronaldo']

function imprimeNome(nome) {
  console.log(nome)
}

nomes.forEach(imprimeNome)

var canais = ['SBT', 'Record', 'Globo']
canais.forEach(function(canal) {
  canais.push('RedeTV')
  console.log(canal)
})


// // MAP
var numeros = [1, 2, 3]
var dobro = []

for(var i = 0; i < numeros.length; i++) {
  dobro.push(numeros[i] * 2)
}

console.log(numeros)
console.log(dobro)

var numeros = [1, 2, 3]
var dobro = numeros.map(function(numero) {
  return numero * 2
})

console.log(numeros)
console.log(dobro)


// // FILTER
// // ES5
var alunos = [
  { nome: 'joão', idade: 15 },
  { nome: 'josé', idade: 18 },
  { nome: 'maria', idade: 20}
]

var alunosDeMaior = []
for(var i = 0; i < alunos.length; i++) {
  if(alunos[i].idade >= 18) {
    alunosDeMaior.push(alunos[i])
  }
}

console.log(alunosDeMaior)

var alunos = [
  { nome: 'joão', idade: 15 },
  { nome: 'josé', idade: 18 },
  { nome: 'maria', idade: 20 }
]

var alunosDeMaior = alunos.filter(function(aluno) {
  return aluno.idade >= 18
})

console.log(alunosDeMaior)


// // FIND
// ES5
var alunos = [
  { nome: 'joão' },
  { nome: 'josé' },
  { nome: 'maria' }
]

var aluno
for(var i = 0; i < alunos.length; i++) {
  if(alunos[i].nome === 'josé') {
    aluno = alunos[i]
    break
  }
}

console.log(aluno)

var alunos = [
  { nome: 'joão' },
  { nome: 'josé' },
  { nome: 'maria' }
]

var aluno = alunos.find(function(aluno) {
  return aluno.nome === 'josé'
})

console.log(aluno)


// EVERY
var alunos = [
  { nome: 'joão', idade: 18 },
  { nome: 'maria', idade: 20 },
  { nome: 'pedro', idade: 24 }
]

var todosAlunosDeMaior = true
for(var i = 0; i < alunos.length; i++) {
  if(alunos[i].idade < 18) {
    todosAlunosDeMaior = false
    break
  }
}

console.log(todosAlunosDeMaior)

var alunos = [
  { nome: 'joão', idade: 18 },
  { nome: 'maria', idade: 20 },
  { nome: 'josé', idade: 24 }
]

var todosAlunosDeMaior = alunos.every(function(aluno) {
  return alunos.idade > 18
})

console.log(todosAlunosDeMaior)


// SOME
// ES5
var pesoDasMalas = [12, 32, 21, 29]
var temMalaAcimaDoPeso = false
for(var i = 0; i < pesoDasMalas.length; i++) {
  if(pesoDasMalas[i] > 30) {
    temMalaAcimaDoPeso = true
  }
}

console.log(temMalaAcimaDoPeso)

var pesoDasMalas = [12, 32, 21, 29]
var temMalaAcimaDoPeso = pesoDasMalas.some(function(pesoDaMala) {
  return pesoDaMala > 30
})

console.log(temMalaAcimaDoPeso)


// REDUCE
// Ex.1
var numeros = [1, 2, 3, 4, 5]

var soma = 0
for(var i = 0; i < numeros.length; i++) {
  soma += numeros[i]
}

console.log(soma)

var numeros = [1, 2, 3, 4, 5]

var soma = 0
soma = numeros.reduce(function(soma, numero) {
  return soma + numero
}, 0)

console.log(soma)


// Ex.2
var alunos = [
  { nome: 'joão', idade: 10 },
  { nome: 'josé', idade: 20 },
  { nome: 'marcos', idade: 30 }
]

var nomes = alunos.reduce(function(arrayNomes, aluno) {
  arrayNomes.push(aluno.nome)
  return arrayNomes
}, [])

console.log(nomes)

var frutas = [
  { nome: 'banana', cor: 'amarela' },
  { nome: 'maçã', cor: 'vermelho' },
  { nome: 'laranja', cor: 'laranja' },
  { nome: 'abacate', cor: 'verde' }
]

var corDaFruta = frutas.reduce(function(arrayCores, cores) {
  arrayCores.push(cores.cor)
  return arrayCores
}, [])

console.log(corDaFruta)

var nomeDaFruta = frutas.reduce(function(arrayNomes, nomes) {
  arrayNomes.push(nomes.nome)
  return arrayNomes
}, [])

console.log(nomeDaFruta)

// Usei esta lista abaixo para prática dos métodos.

let products = [
  { nome: 'Omo Lavagem Perfeita 800g', tipo: 'Sabão em Pó Caixa', peso: 800},
  { nome: 'Omo Sports 800g', tipo: 'Sabão em Pó Caixa', peso: 800},
  { nome: 'Tixan Ypê Primavera 1kg', tipo: 'Sabão em Pó Caixa', peso: 1000},
  { nome: 'Tixan Ypê Maciez 1kg', tipo: 'Sabão em Pó Caixa', peso: 1000},
  { nome: 'Brilhante Limpeza Total 800g', tipo: 'Sabão em Pó Caixa', peso: 800},
  { nome: 'Assim Floral 900g', tipo: 'Sabão em Pó Caixa', peso: 900},
  { nome: 'Assim Poder das Enzimas - Tradicional 900g', tipo: 'Sabão em Pó Caixa', peso: 900},
  { nome: 'Brilhante Limpeza Total 800g', tipo: 'Sabão em Pó Sachê', peso: 800},
  { nome: 'Surf 5 em 1 Rosa e Flor de Liz 800g', tipo: ' Sabão em Pó Sachê', peso: 800},
  { nome: 'Surf Limão e Bicarbonato 800g', tipo: ' Sabão em Pó Sachê', peso: 800},
  { nome: 'Surf Lavanda 800g', tipo: ' Sabão em Pó Sachê', peso: 800},
  { nome: 'Surf Cuidado do Coco 800g', tipo: ' Sabão em Pó Sachê', peso: 800},
  { nome: 'Ares Flores do Campo 1kg', tipo: ' Sabão em Pó Sachê', peso: 1000},
  { nome: 'Ares Camomila 1kg', tipo: ' Sabão em Pó Sachê', peso: 1000},
  { nome: 'Ares Lavanda 1kg', tipo: ' Sabão em Pó Sachê', peso: 1000},
  { nome: 'Omo Lavagem Perfeita 400g', tipo: 'Sabão em Pó Caixa', peso: 400},
  { nome: 'Tixan Ypê Primavera 500g', tipo: 'Sabão em Pó Caixa', peso: 500},
  { nome: 'Tixan Ypê Maciez 500g', tipo: 'Sabão em Pó Caixa', peso: 500},
  { nome: 'Assim Floral 500g', tipo: 'Sabão em Pó Caixa', peso: 500},
  { nome: 'Assim Poder das Enzimas - Tradicional 500g', tipo: 'Sabão em Pó Caixa', peso: 500},
  { nome: 'Poliflor Cera Incolor 750ml', tipo: 'Cera Líquida', peso: 750},
  { nome: 'Poliflor Ardósia 750ml', tipo: 'Cera Líquida', peso: 750},
  { nome: 'Poliflor Vermelha 750ml', tipo: 'Cera Líquida', peso: 750},
  { nome: 'Tacolac Super 500ml', tipo: 'Cera Líquida', peso: 500},
  { nome: 'Brilho Fácil Vermelha 750ml', tipo: 'Cera Líquida', peso: 750},
  { nome: 'Brilho Fácil Incolor 750ml', tipo: 'Cera Líquida', peso: 750},
  { nome: 'Brilho Fácil Ardósia 750ml', tipo: 'Cera Líquida', peso: 750},
  { nome: 'Pasta Multiuso Cristal Rosa 500ml', tipo: 'Sabão em Pasta', peso: 500},
  { nome: 'Assolan Sabão em Pasta 500ml', tipo: 'Sabão em Pasta', peso: 500},
  { nome: 'Urca Sabão em Pasta 500ml', tipo: 'Sabão em Pasta', peso: 500},
  { nome: 'Super 500ml', tipo: 'Limpa Alumínio', peso: 500},
  { nome: 'Diabo Verde 500ml', tipo: 'Limpa Alumínio', peso: 500},
  { nome: 'Desentupidor de Pias e Ralos 300g', tipo: 'Desentupidor Químico', peso: 300},
  { nome: 'Easy-off 250ml', tipo: 'Limpa Fornos', peso: 250},
  { nome: 'Sapólio Radium Clássico 200g', tipo: 'Saponáceo', peso: 200},
  { nome: 'Sapólio Radium Multiuso 300g', tipo: 'Saponáceo', peso: 300},
  { nome: 'Sapólio Radium Multiuso c/ Cloro Ativo 300g', tipo: 'Saponáceo', peso: 300},
  { nome: 'Sapólio Radium Multiuso c/ Cloro Ativo 250ml', tipo: 'Saponáceo', peso: 250},
  { nome: 'Sapólio Radium Cremoso Multiuso Lavanda 250ml', tipo: 'Saponáceo Cremoso', peso: 250},
  { nome: 'Sapólio Radium Cremoso Multiuso Clássico 250ml', tipo: 'Saponáceo Cremoso', peso: 250},
  { nome: 'Sapólio Radium Cremoso Multiuso Limão 250ml', tipo: 'Saponáceo Cremoso', peso: 250},
  { nome: 'Cif Multiuso Limão 250ml', tipo: 'Limpador Cremoso', peso: 250},
  { nome: 'Cif Multiuso Original 250ml', tipo: 'Limpador Cremoso', peso: 250},
  { nome: 'Veja Limpa Vidros Cristal 500ml', tipo: 'Limpa Vidro', peso: 500},
  { nome: 'Veja Limpa Vidros Tradicional 500ml', tipo: 'Limpa Vidro', peso: 500},
  { nome: 'Poliflor Lavanda 200ml', tipo: 'Lustra Móveis', peso: 200},
  { nome: 'Poliflor Jasmim 200ml', tipo: 'Lustra Móveis', peso: 200},
  { nome: 'Destac Brilha-Móveis 200ml', tipo: 'Lustra Móveis', peso: 200},
  { nome: 'Peroba do Campo 200ml', tipo: 'Lustra Móveis', peso: 200},
  { nome: 'Óleo de Peroba 200ml', tipo: 'Lustra Móveis', peso: 200},
  { nome: 'Colman Anil Líquido 200ml', tipo: 'Corante Líquido', peso: 200},
  { nome: 'Colman Anil Imperial 90g', tipo: 'Corante em Cubo', peso: 90},
  { nome: 'Semorin 50ml', tipo: 'Tira Ferrugem', peso: 50},
  { nome: 'King Óleo Multiuso 100ml', tipo: 'Óleo Multiuso', peso: 100},
  { nome: 'Bom Ar Lavando 360ml', tipo: 'Aerossol', peso: 360},
  { nome: 'Sampa Clean - Limpador Perfumado Concentrado Eucalipto 140ml', tipo: 'Limpador Líquido', peso: 140},
  { nome: 'Sampa Clean - Limpador Perfumado Concentrado Ubatuba 140ml', tipo: 'Limpador Líquido', peso: 140},
  { nome: 'Sampa Clean - Limpador Perfumado Concentrado Lavanda 140ml', tipo: 'Limpador Líquido', peso: 140},
  { nome: 'Harpic Pedra Perfumada Bosque de Pinho 25g', tipo: 'Bloco Sanitário', peso: 25},
  { nome: 'Harpic Pedra Perfumada Lavanda 25g', tipo: 'Bloco Sanitário', peso: 25},
  { nome: 'Desumidificador Enxug Comfort 80g', tipo: 'Antimofo', peso: 80},
  { nome: 'Desumidificador Enxug Talco 80g', tipo: 'Antimofo', peso: 80},
  { nome: 'Desumidificador Enxug Amora 80g', tipo: 'Antimofo', peso: 80},
  { nome: 'Antimofo Antitraço { nome: vários}, 25g', tipo: 'Antimofo', peso: 25},
  { nome: 'Saco de Lixo 100L', tipo: 'Saco de Lixo', peso: 100000},
  { nome: 'Saco de Lixo 50L', tipo: 'Saco de Lixo', peso: 50000},
  { nome: 'Saco de Lixo 30L', tipo: 'Saco de Lixo', peso: 30000},
  { nome: 'Saco de Lixo 15L', tipo: 'Saco de Lixo', peso: 15000},
  { nome: 'Limpol Coco 500ml', tipo: 'Detergente', peso: 500},
  { nome: 'Limpol Limão 500ml', tipo: 'Detergente', peso: 500},
  { nome: 'Limpol Maçã 500ml', tipo: 'Detergente', peso: 500},
  { nome: 'Limpol Neutro 500ml', tipo: 'Detergente', peso: 500},
  { nome: 'Ypê Coco 500ml', tipo: 'Detergente', peso: 500},
  { nome: 'Ypê Limão 500ml', tipo: 'Detergente', peso: 500},
  { nome: 'Ypê Capim-limão 500ml', tipo: 'Detergente', peso: 500},
  { nome: 'Ypê Maçã 500ml', tipo: 'Detergente', peso: 500},
  { nome: 'Ypê Neutro 500ml', tipo: 'Detergente', peso: 500},
  { nome: 'Ypê Clear 500ml', tipo: 'Detergente', peso: 500},
  { nome: 'Kin Limp Lavanda 1L', tipo: 'Removedor', peso: 1000},
  { nome: 'Tupi Tradicional 1L', tipo: 'Querosene', peso: 1000},
  { nome: 'Zumbi 1L', tipo: 'Removedor', peso: 1000},
  { nome: 'Búfalo Tradicional 1L', tipo: 'Querosene', peso: 1000},
  { nome: 'Búfalo Tradicional 1L', tipo: 'Removedor', peso: 1000},
  { nome: 'Zulu Clean s/ Cheiro 900ml', tipo: 'Removedor', peso: 900},
  { nome: 'Zulu Perfumado 450ml', tipo: 'Removedor', peso: 450},
  { nome: 'Zulu Clean 450ml', tipo: 'Removedor', peso: 450},
  { nome: 'Apache 500ml', tipo: 'Querosene', peso: 500},
  { nome: 'Zumbi 500ml', tipo: 'Removedor', peso: 500},
  { nome: 'Vimak Floral 500ml', tipo: 'Removedor', peso: 500},
  { nome: 'Búfalo Tradicional 500ml', tipo: 'Querosene', peso: 500},
  { nome: 'Búfalo Lavanda 500ml', tipo: 'Querosene', peso: 500},
  { nome: 'Kin Limp Lavanda 500ml', tipo: 'Removedor', peso: 500}
]

let newProducts = products.map(function(peso) {
  return peso.peso
})

let somaDosProdutos = newProducts.reduce(function(pesoDosProdutos, total) {
  return pesoDosProdutos += total
}, 0)

console.log(somaDosProdutos)

let somentePeso = products.reduce(function(pesoTodosValores, valor) {
  return pesoTodosValores += valor.peso
}, 0)

console.log(`${somentePeso} Kg`)

let produtosUmKilo = products.filter(function(pesoMil) {
  return pesoMil.peso >= 1000 && pesoMil.peso <= 1000
})

console.log(produtosUmKilo)

let nomeTipo = products.find(function(nome) {
  return nome.tipo === 'Saponáceo'
})

console.log(nomeTipo)

let tipo = products.reduce(function(arrayTipo, nome) {
  arrayTipo.push(nome.tipo)
  return arrayTipo
}, [])

console.log(tipo)

// ITERAÇÕES COM ITERADORES E ITERÁVEIS

var bruxos = ['Harry Potter', 'Hermione Granger', 'Rony Weasley']

var iteradorBruxos = bruxos[Symbol.iterator]()

console.log(iteradorBruxos.next())
console.log(iteradorBruxos.next())
console.log(iteradorBruxos.next())
console.log(iteradorBruxos.next())

var iterador = bruxos[Symbol.iterator]()
var done = false
var proximo = iterador.next()

// Exemplo hipotético
// do {
// var bruxo = proximo.value
// chapeuSeletor.fazerSelecaoDaCasa(bruxo)
// proximo = iterador.next()
// } while (!proximo.done)

// FOR OF & FOR IN

var numeros = [1, 2, 3, 4, 5]
for(var numero of numeros) {
  console.log(numero)
}

var perfilDoFacebook = {
  nome: 'Carlos',
  idade: 22
}

// for(var dado of perfilDoFacebook) {
//   console.log(dado)
// }

for(var propriedade in perfilDoFacebook) {
  var info = perfilDoFacebook[propriedade]
  console.log(info)
}


// BREAK & CONTINUE

var numeros = [1, 2, 3, 4, 5]
for(var numero of numeros) {
  if(numero > 3) {
    break
  }
  console.log(numero)
}

for(var numero of numeros) {
  if(numero === 2) {
    continue
  }
  console.log(numero)
}

// MAP WEAKMAP

var map = new Map()
function funcao(){}
var objeto = {}

map.set("string", "sou uma string")
map.set(objeto, "sou um objeto")
map.set(funcao, "sou uma função")

console.log(map.get("string"))
console.log(map.get(objeto))
console.log(map.get(funcao))

console.log("\ntamanho: " + map.size)
console.log(map.has("string"))
console.log(map.has("abc"))

map.delete("string")
console.log(map.has("string"))

map.clear()
console.log("tamanho: " + map.size)

var mapa = new Map()
mapa.set('um', 1)
mapa.set('dois', 2)
mapa.set('três', 3)

for(var chave of mapa.keys()) {
  console.log(chave)
}

for(var valor of mapa.values()) {
  console.log(valor)
}

for(var entrada of mapa.entries()) {
  console.log(entrada)
}

var weakMap = new WeakMap()
var elemento1 = window
var elemento2 = document.querySelector('body')

weakMap.set(elemento1, 'sou o elemento1')
weakMap.set(elemento2, 'sou o elemento2')

console.log(weakMap.get(elemento1))
console.log(weakMap.get(elemento2))

elemento2.parentNode.removeChild(elemento2)
elemento2 = null

console.log(weakMap.get(elemento2))

var weakMap = new WeakMap()
function funcao(){}
var objeto = {}

// weakMap.set("string", "isso é uma string") Uncaught TypeError: Invalid value used as weak map key at WeakMap.set
weakMap.set(funcao, "isso é uma função")
weakMap.set(objeto, "isso é um objeto")

function Pessoa(nome) {
  this._nome = nome
}

Pessoa.prototype.getNome = function() {
  return this._nome
}

var roberto = new Pessoa('Roberto')
console.log(roberto.getNome())
console.log(roberto._nome)

var Pessoa = (function() {

  var dadosPrivados = new WeakMap()

  function Pessoa(nome) {
    dadosPrivados.set(this, { nome: nome })
  }

  Pessoa.prototype.getNome = function() {
    return dadosPrivados.get(this).nome
  }

  return Pessoa
}())

var rafael = new Pessoa('Rafael')
console.log(rafael.getNome())
console.log(rafael.nome)

// ADMNISTRANDO UMA BIBLIOTECA

var livros = []
var estates = new Map()
for(var livro of livros) {
  estantes.set(livro.getTitulo(), getEstante())
}

function getLocalizacaoDoLivro(tituloDoLivro) {
  var estante = estantes.get(tituloDoLivro)
  if(estante === undefined) {
    return 'Livro não encontrado no acervo!'
  }

  return estantes.get(tituloDoLivro)
}

// LISTAS SEM REPETIÇÕES COM SETS E WEAKSETS

function Set() {
  var array = []
  this.add = function(valor) {
    if(array.indexOf(valor) === -1) {
      array.push(valor)
    }
  }
}
// Uncaught TypeError: set is not iterable

function Set() {
  var array = []
  this.add = function(valor) {
    if(array.indexOf(valor) === -1) {
      array.push(valor)
    }
  },

  this.mostrarValores = function() {
    console.log(array)
  }
}
// Uncaught TypeError: set is not iterable

var set = new Set()
set.add(2)
set.add(1)
set.add(2)

set.mostrarValores()

// SET

var set = new Set();
set.add(2);
set.add(1);
set.add(2);

for (const valor of set) {
console.log(valor); // 2, 1
}

var set = new Set([2, 1, 2])
for(const valor of set) {
  console.log(valor)
}

var musicas = new Set()
musicas.add('musica1')

for(var musica of musicas) {
  console.log(musica)
}

var musicas = new Set(['musica1', 'musica2'])
musicas.delete('musica1')

for(var musica of musicas) {
  console.log(musica)
}

var musicas = new Set(['musica1', 'musica2', 'musica3'])

musicas.clear()

for(var musica of musicas) {
  console.log(musica)
}

var musicas = new Set(['musica1'])
if(musicas.has('musica1')) {
  console.log('Já está na lista!')
}

var musicas = new Set(['musica1', 'musica2', 'musica3'])
var qtdMusicas = musicas.size
console.log("Há " + qtdMusicas + " músicas na lista.")

// WEAKSET

var musica1 = {
  titulo: 'O amor não tem rollback',
  autor: 'SQL'
}

var musicas = new WeakSet([musica1])
console.log(musicas)

var musicas = new Set([musica1])
console.log(musicas)

musica1 = null

console.log(musicas)

var texto = 'texto'
var idade = 10

// console.log(texto + idade)


// CONST & LET

const pessoa = {
  nome: 'joão'
}
pessoa.idade = 12

// console.log(pessoa)

var id = 1
var id = 2
// console.log(id)

var mensagem = 'olá'
{
  var mensagem = 'adeus'
}
// console.log(mensagem)

var mensagem = 'olá'

function mensagem() {
  var mensagem = 'adeus'
}
// console.log(mensagem)

const arrayVar = []
for (var i = 1; i < 5; i++) {
  arrayVar.push(function () {
    // console.log(i)
  })
}

const arrayLet = []
for (let i = 1; i < 5; i++) {
  arrayLet.push(function () {
    // console.log(i)
  })
}

arrayVar.forEach(function (funcao) {
  funcao()
})

arrayLet.forEach(function (funcao) {
  funcao()
})

const arrayVarNew = []
for (var i = 0; i < 5; i++) {
  arrayVarNew.push(function () {
    // console.log(i)
  })
}

i = 10

arrayVarNew.forEach(function (funcao) {
  funcao()
})


// HOISTING

imprimirNome('Tabata')

function imprimirNome(nome) {
  // console.log(nome)
}

var valor = 0
if (true) {
  // Novo escopo, o TDZ do valor começa

  //  Ao tentar acessar a variável, tomamos ReferenceError,
  // pois neste momento ela é uma variável que não foi inicializada
  console.log(valor)

  let valor // TDZ termina
  console.log(valor)

  valor = 1
  console.log(valor)
}

console.log(valor)

const nome = 'Diego'
console.log(`Bem-vindo ${nome}`)

const n1 = 1,
  n2 = 2
console.log(`${n1} + ${n2} = ${n1 + n2}`)

const div =
`
<div>
  <p><b>Nome:</b> ${nome}</p>
  <p><b>Idade:</b> ${idade}</p>
  <p><b>Endereço:</b> ${endereco}</p>
</div>
`

var div1 = '<div>'
div1 += '<p><b>Nome:</b> ' + nome + '</p>'
div1 += '<p><b>Idade:</b> ' + idade + '</p>'
div1 += '<p><b>Endereço:</b> ' + endereco + '</p>'
div1 += '</div>'

const horas = new Date().getHours()
const mensagem1 = `Bom dia, são ${horas} horas`
console.log(mensagem1)

const mensagem2 = defineMensagem`Bom dia, são ${horas} horas`

function defineMensagem(strings, ...values) {
console.log(strings)
console.log(values)
}

const mensagem4 = defineMensagem`${""}${horas} horas`

function defineMensagem(strings, ...values) {
  const hora = values[1];
  if (hora >= 6 && hora <= 12) {
    values[0] = "Bom dia";
  } else if (hora > 12 && hora <= 18) {
    values[0] = "Boa tarde";
  } else {
    values[0] = "Boa noite";
  }
  values[0] = `${values[0]}, são`;
  return `${values[0]}${strings[0]}${hora}${strings[2]}`
}

// ARROW FUNCTIONS

// declaração da função
function desligar() {
  // corpo da função
}

// expressão de função
var funcaoDesligar = function () {
  // corpo da função
}

var funcaoDesligar = new Function('corpo da função')
var funcaoDesligarComParametros = new Function(arg1,arg2, 'corpo da função')


// ES5
var boasVindas = function (nome) {
  return "Seja bem-vindo, " + nome
}

console.log(boasVindas("Luiz"))


// ES6
// ex1
var boasVindas = (nome) => {
  return "Seja bem-vindo, " + nome
}

console.log(boasVindas("Tom"))

// ex2
var boasVindas = nome => {
  return "Seja bem-vindo, " + nome
}

console.log(boasVindas("Jerry"))

// ex3
var boasVindas = nome => "Seja bem-vindo, " + nome
console.log(boasVindas("Renato"))

// ex4
const boasVindasTeDou = nome => `Seja bem-vindo, ${nome}`
console.log(boasVindasTeDou("Renato Brito"))

console.log(this)

function impreMeuContextoDeExecucao() {
  console.log(this)
}

impreMeuContextoDeExecucao()

var objeto = {
  meuContexto: function () {
    console.log(this)
  }
}

objeto.meuContexto()

const equipeEx1 = {
  nome: 'Guerreiros Z',
  membros: ['Goku', 'Kuririn', 'Vegeta'],
  membrosDaEquipe: function () {
    this.membros.forEach(function (membro) {
      console.log(`${membro} é da equipe ${this.nome}`)
    })
  }
}

const equipeEx2 = {
  nome: 'Guerreiros Z',
  membros: ['Goku', 'Kuririn', 'Vegeta'],
  membrosDaEquipe: function() {
    const that = this
    this.membros.forEach(function(membro) {
      console.log(`${membro} é da equipe ${that.nome}.`)
    })
  }
}

equipeEx2.membrosDaEquipe()

const equipeEx3 = {
  nome: 'Guerreiros Z',
  membros: ['Goku', 'Kuririn', 'Vegeta'],
  membrosDaEquipe: function() {
    this.membros.forEach(membro => {
      console.log(`${membro} é da equipe ${this.nome}`)
    })
  }
}

equipeEx3.membrosDaEquipe()

function mostrarPropriedadeDoContexto(nomePropriedade) {
  console.log(this[nomePropriedade])
}

var mockLocation = {
  location: 'fake-location'
}

var funcao = mostrarPropriedadeDoContexto.bind(mockLocation)

const equipe = {
  nome: 'Guerreiros Z',
  membros: ['Goku', 'Kuririn', 'Vegeta'],
  membrosDaEquipe: function() {
    this.membros.forEach(function(membro) {
      console.log(`${membro} é da equipe ${this.nome}`)
    }.bind(this))
  }
}

equipe.membrosDaEquipe()

// MELHORIAS EM OBJETOS LITERAIS

function Livro(titulo) {
  this.titulo = titulo
}

var livro = new Livro('Entendendo ES6')
console.log(livro.titulo)

var livro = {
  titulo: 'Anjos e Demônios'
}

console.log(livro.titulo)

var outroLivro = livro
livro.titulo = 'O Código da Vinci'

console.log(outroLivro.titulo)
console.log(livro.titulo)

var livro = {
  titulo: 'Anjos e Demônios'
}

livro.autor = 'Dan Brown'
livro['mostrarLivro'] = function () {
  console.log(this.titulo + ', ' + this.autor)
}

livro.mostrarLivro()

// DECLARAÇÃO DE PROPRIEDADES

// ES5
var nome0 = 'Maria'
var sobrenome = 'Madalena'

var pessoa0 = {
  nome: nome0,
  sobrenome: sobrenome
}

// ES6
// ex1
const nome1 = 'Maria'
const sobrenome1 = 'Madalena'
const pessoa1 = { nome1, sobrenome1 }

console.log(pessoa1.nome1)
console.log(pessoa1.sobrenome1)

// ex2
const nome2 = 'Maria'
const sobrenome2 = 'Madalena'
const seApresentar = function() {
  console.log(`Olá! Sou a ${nome2} ${sobrenome2}`)
}

const pessoa2 = { nome2, sobrenome2, seApresentar}
pessoa2.seApresentar()

// ex3
const nome3 = 'Maria'
const sobrenome3 = 'Madalena'

const pessoa3 = {
  nome3,
  sobrenome3,
  seApresentar() {
    console.log(`Olá! Sou a ${this.nome3} ${this.sobrenome3}`)
  }
}

pessoa3.seApresentar()

// ÍNDICES DE PROPRIEDADES COMPUTADAS

const nomeMetodo = 'invocar'
const meuObjeto = {
  [nomeMetodo]() {
    console.log('executou o método')
  }
}

meuObjeto[nomeMetodo]()

const nomeFuncao = 'mostrar'
const propriedade0 = 'Nome'

const meuOutroObjeto = {
  Nome: 'Objeto',
  [`${nomeFuncao}${propriedade}`](){
    console.log(this[propriedade])
  }
}

meuOutroObjeto.mostrarNome()


const apelido = "apelido";
const umaPessoa = {
  nome: 'José',
  [apelido]: 'Zé'
}
console.log(umaPessoa[apelido])

// OBJETOS LITERAIS X JSON

// exemplo fictício
function obterDadosDaTela() {
  const nome = document.getElementById('nome').value
  const idade = document.getElementById('idade').value
  const sexo = document.getElementById('sexo').value
  const convenio = document.getElementById('convenio').value

  return { nome, idade, sexo, convenio }
}

const url = 'https://sistemasaude.com.br/api/cadastros/paciente'
const dados = obterDadosDaTela()

const dadosJson = JSON.stringify(dados)

$.ajax({
  url           : url,
  dataType      : 'json',
  contentType   : 'application/json; charset=UTF-8',
  data          : dadosJson,
  type          : 'POST',
  complete      : callback
})


// PARÂMETROS PREDEFINIDOS EM FUNÇÕES

function minhaMaeMandouEuEscolherEsseDaqui(qualEuEscolhi) {
  console.log(qualEuEscolhi)
}

minhaMaeMandouEuEscolherEsseDaqui('terceiro')
minhaMaeMandouEuEscolherEsseDaqui()

function imprimeNomeCompleto(nome, sobrenome, nomeDoMeio) {
  console.log(`${nome} ${nomeDoMeio} ${sobrenome}`)
}

imprimeNomeCompleto('Jorge', 'Reis')
imprimeNomeCompleto('Isabela', 'Joana Luiza', 'Jesus')

function imprimeNomeCompleto(nome, nomeDoMeio, sobrenome) {
  if(nomeDoMeio === undefined) {
    console.log(`${nome} ${sobrenome}`)
  } else {
    console.log(`${nome} ${nomeDoMeio} ${sobrenome}`)
  }
}

imprimeNomeCompleto('Romulo', 'Scampini')
imprimeNomeCompleto('Leticia', 'Aparecida', 'de Souza')


// ATRIBUINDO VALORES PADRÕES

function imprimeNomeCompleto(nome, sobrenome, nomeDoMeio = '') {
  console.log(`${nome} ${nomeDoMeio} ${sobrenome}`)
}

imprimeNomeCompleto('João', 'da Silva', 'Aparecido')
imprimeNomeCompleto('João', 'da Silva')


// VALORES UNDEFINED

function multiplicaPor(valor, multiplicador = 2) {
  return valor * multiplicador
}

const valor0 = multiplicaPor(2, undefined)
console.log(valor)

function print(valor = '') {
  console.log(valor)
}

print()
print(null)


// // REFERENCIANDO OUTROS VALORES PADRÕES

function calculaPotencia(x = 2, y = x) {
  console.log(Math.pow(x, y))
}

calculaPotencia()
calculaPotencia(2)
calculaPotencia(2,2)

/*
Na primeira ocorrência, quando invocamos a função sem
nenhum argumento, ele considerou o valor padrão que
estabelecemos para a variável x e atribuiu o valor de x na variável
y , o que resultou em dois ao quadrado. Na segunda ocorrência,
especificamos o primeiro argumento, mas não o segundo.
Novamente foi atribuído o valor das variáveis x a y , resultando
mais uma vez em dois ao quadrado. Na terceira ocorrência, como
passamos ambos parâmetros, o resultado foi o que já era esperado.
*/


// REFERENCIANDO VARIÁVEIS INTERNAS

const v = 'valor1'
function funcao(x = v) {
  const v = 'valor2'
  console.log(x)
}

funcao()


// UTILIZANDO FUNÇÕES COMO VALORES PADRÕES

function facaAlgoComMeuNome(nome, callback = z => {
  console.log(z)
}) {
  callback(nome)
}

facaAlgoComMeuNome('Muriel')


// TORNANDO VALORES OBRIGATÓRIOS

function parametroObrigatorio(parametro) {
  throw new Error(`O parâmetro "${parametro}" é obrigatório!`)
}

function inserirNaTela(objeto = parametroObrigatorio('objeto')) {
  // lógica de implementação do método
  }

inserirNaTela()


// PARÂMETROS INFINITOS COM OPERADOR REST

function montaQuerySelect() {
  const tabela = arguments[0]
  const qtdArgs = arguments.length
  let cols = ''
  if(qtdArgs > 1) {
    for(let index = 1; index < qtdArgs; index++) {
      cols += `${arguments[index]}, `
    }
    cols = cols.substring(0, cols.length - 2)
  } else {
    cols = '*'
  }

  return `SELECT ${cols} FROM ${tabela}`
}

const query1 = montaQuerySelect('tabela')
const query2 = montaQuerySelect('tabela', 'col1')
const query3 = montaQuerySelect('tabela', 'col1', 'col2')

console.log(query1)
console.log(query2)
console.log(query3)


// ENTENDA O QUE ARGUMENTS FAZ

function logarTodosArgumentos() {
  for(let i = 0; i < arguments.length; i++) {
    console.log(arguments[i])
  }
}

logarTodosArgumentos(1,2,3)

function somar() {
  let soma = 0
  const qtd = arguments.length
  for(let i = 0; i < qtd; i++) {
    soma += arguments[i]
  }

  return soma
}

console.log(somar(1,2))
console.log(somar(1,2,3))
console.log(somar(1,2,3,4))


// ARGUMENTS x OPERADOR REST

// ES5
function somar(...valores) {
  let soma = 0
  const qtd = valores.length
  for(let i = 0; i < qtd; i++) {
    soma += valores[i]
  }

  return soma
}

console.log(somar(1,2))
console.log(somar(1,2,3,))
console.log(somar(1,2,3,4))

// ES6
function somar2(...valores) {
  return valores.reduce((soma, valor) => {
    return soma + valor
  }, 0)
}

console.log(somar2(1,2))
console.log(somar2(1,2,3,))
console.log(somar2(1,2,3,4))


// PARTICULARIDADES DO OPERADOR REST

// incorreto
function numerosELetras(...numeros, ...letras) {
  // corpo da função
}

// correto
function numerosELetras(...numerosELetras) {
  // corpo da função
}


// PODEMOS UTILIZAR EM CONJUNTO COM PARÂMETROS “FIXOS”

function somaTudoEMultiplicaPor(multiplicador, ...valores) {
  return valores.reduce((soma, valor) => {
    return soma + (valor * multiplicador)
  }, 0)
}

console.log(somaTudoEMultiplicaPor(2,1,2))
console.log(somaTudoEMultiplicaPor(2,6,7))

function montaQuerySelect(tabela, ...cols) {
  let colsQuery = ''
  if(cols.length > 0) {
    colsQuery = cols.reduce((colsQuery, coluna) => {
      return colsQuery += `${coluna}, `
    }, '')
    colsQuery = colsQuery.substring(0, colsQuery.length - 2)
  } else {
    colsQuery = '*'
  }

  return `SELECT ${colsQuery} FROM ${tabela}`
}

const query1 = montaQuerySelect('tabela');
const query2 = montaQuerySelect('tabela', 'col1');
const query3 = montaQuerySelect('tabela', 'col1', 'col2');

console.log(query1)
console.log(query2)
console.log(query3)


// EXPANSÃO COM O OPERADOR SPREAD

// ES5
var argumentos = [1,2,3]
console.log.apply(console, argumentos)

// ES6
var argumentos = [1,2,3]
console.log(...argumentos)


// FAZENDO COMPRAS COM O SPREAD

const listaMae = ['leite', 'ovos', 'papel']
const listaNamorada = ['arroz', 'feijão', 'suco']
const listaEscritorio = ['adesivos', 'canetas', 'fita adesiva']

var listaCompras = [...listaMae, ...listaNamorada, ...listaEscritorio]

console.log(listaCompras)


// ADICIONANDO ITENS A UM ARRAY

const produtoSelecionado = {
  descricao: 'Blusa de Lã',
  preco: 'R$ 59,99'
}

const carrinho = [
  { descricao: 'Bota de Cano Médio', preco: 'R$ 199,90' },
  { descricao: 'Saia Colorida', preco: 'R$ 29,90' },
  { descricao: 'Vestido Longo', preco: 'R$ 399,90' }
]

const carrinhoAtualizado = [...carrinho, produtoSelecionado]

for(let produto of carrinhoAtualizado) {
  console.log(produto.descricao)
}


// OPERADOR SPREAD EM CHAMADAS DE FUNÇÕES

function soma(a,b) {
  console.log(a + b)
}

soma(1,2)

function soma(a,b) {
  console.log(a + b)
}

var numeros = [1,2]
soma(...numeros)

function contaQuantidadesVogaisNaoAcentuadas(palavra) {
  let qtdVogais = 0
  const palavraLowerCase = palavra.toLowerCase()
  const letras = [...palavraLowerCase]
  for(let letra of letras) {
    if("aeiou".indexOf(letra)) {
      qtdVogais++
    }
  }

  return qtdVogais
}

console.log(contaQuantidadesVogaisNaoAcentuadas('ecmascript'))
console.log(contaQuantidadesVogaisNaoAcentuadas('javascript'))
console.log(contaQuantidadesVogaisNaoAcentuadas('SWIFT'))
console.log(contaQuantidadesVogaisNaoAcentuadas('jAvA'))


//  OPERADOR REST x OPERADOR SPREAD

function contaQuantidadeVogaisNaoAcentuadas(...palavras) {
  let qtdVogais = 0
  for(let palavra of palavras) {
    let palavraLowerCase = palavra.toLowerCase()
    const letras = [...palavraLowerCase]
    for(let letra of letras) {
      if('aeiou'.indexOf(letra)) {
        qtdVogais++
      }
    }
  }

  return qtdVogais
}

console.log(contaQuantidadeVogaisNaoAcentuadas('es6'))
console.log(contaQuantidadeVogaisNaoAcentuadas('java', 'javascript', 'delphi'))
console.log(contaQuantidadeVogaisNaoAcentuadas('NãO ConSideRa AcentUADoS'))


// DESESTRUTURAMENTO DE ARRAYS E OBJETOS

const Usuario = {
  nome: 'Elliot',
  sobrenome: 'Alderson',
  senha: 'mrrobot',
  confirmacaoSenha: 'mrrobot',
  email: 'elliot.alderson@gmail.com',
  profissao: 'Engenheiro de Cibersegurança',
  github: 'https://github.com/ElliotAlderson'
}

const {email} = Usuario
console.log(email)

const {senha, confirmacaoSenha} = Usuario
console.log(senha)
console.log(confirmacaoSenha)

const {numeroDoCartao} = Usuario
console.log(numeroDoCartao)


// ROTULANDO PROPRIEDADES

const Pessoa = {
  sobrenome: 'Albert'
}

const {sobrenome:apelido} = Pessoa
console.log(sobrenome)
console.log(apelido)


// DESESTRUTURAMENTO DE VÁRIOS OBJETOS

const suco = {
  sabor: 'uva',
  quantidade: '500ml'
}

const doce = {
  tipo: 'açúcar'
}

function descreveSuco({sabor, quantidade}, {tipo}) {
  return `Este suco é de sabor ${sabor} e possui ${quantidade} adocicado com ${tipo}.`
}

console.log(descreveSuco(suco, doce))


// DESESTRUTURAMENTO EM RETORNO DE CHAMADAS DE MÉTODOS

// API hipotética
function recuperarDadosDaAPI() {
  // Realiza GET para o http://temperatura.com/api/temperatur/sp
  // Retorna JSON que veio na response
  return response.json
}

const {temperatura, maxima, minima} = recuperarDadosDaAPI()
console.log(temperatura)
console.log(maxima)
console.log(minima)


// DESESTRUTURAMENTO DE ARRAYS

const cores = ['azul', 'cinza', 'branco', 'preto']
console.log(cores[0])
console.log(cores[3])

const [cor1,,,cor2,cor3] = ['azul', 'cinza', 'branco', 'preto']
console.log(cor1)
console.log(cor2)
console.log(cor3)

const contatos = [
  {
    nome: 'Alex Júnior',
    numero: '1234-5678'
  },
  {
    nome: 'Carolina Moya',
    numero: '1234-6789'
  },
  {
    nome: 'Fernando Jorge',
    numero: '1234-5567'
  }
]

const [,Carol] = contatos

function mostraNumero({numero}) {
  console.log(numero)
}

mostraNumero(Carol)

function mostraNumeroDaCarol([,{numero}]) {
  console.log(numero)
}

mostraNumeroDaCarol(contatos)


// DESESTRUTURANDO ARRAYS - PARTE 2

const rotas = {
  rapidas: ['Rodovia', 'Estrada X', 'Estrada Y']
}

const {rapidas:[rapida]} = rotas
console.log(rapida)


// MODELANDO COM CLASSES

function Carro(modelo, chassi, qtdPortas) {
  this.modelo = modelo
  this.chassi = chassi
  this.qtdPortas = qtdPortas
}

const prototipo = new Carro('protótipo', '1290381209', 2)
console.log(prototipo.modelo)
console.log(prototipo.chassi)
console.log(prototipo.qtdPortas)

Carro.prototype.andar = function() {
  console.log('vrum vrum')
}

const sonix = new Carro('Sonix', '9120219', 4)
console.log(sonix.modelo)
sonix.andar()

function Sonix(modelo, chassi, qtdPortas) {
  Carro.call(this, modelo, chassi, qtdPortas)
}

Sonix.prototype = Object.create(Carro.prototype)
Sonix.prototype.constructor = Sonix

const sonixII = new Sonix('Sonix', '9120219', 4)
console.log(sonixII.modelo)
sonixII.andar()

Sonix.prototype.abrirTetoSolar = function() {
  console.log('abrindo teto solar')
}

const sonixIII = new Sonix('Sonix', '9120219', 4)
sonixIII.abrirTetoSolar()


// UTILIZE CLASSES DO ES6

class Carrao {
  constructor(modelo, chassi, qtdPortas) {
    this.modelo = modelo
    this.chassi = chassi
    this.qtdPortas = qtdPortas
  }

  andar() {
    console.log('vrum vrum')
  }
}

const basico = new Carrao('Básico', '123123', 2)

console.log(basico.modelo)
console.log(basico.chassi)
console.log(basico.qtdPortas)
basico.andar()


// ESTENDENDO CLASSES

class SonixU {
  abrirTetoSolar() {
    console.log('abrindo teto solar')
  }
}

class SonixII extends Carrao {
  abrirTetoSolar() {
    console.log('abrindo teto solar')
  }
}

const Carretao = new SonixU()
Carretao.abrirTetoSolar()

class SonixR extends Carrao {
  constructor(modelo, chassi, qtdPortas) {
    super(modelo, chassi, qtdPortas)
  }

  abrirTetoSolar() {
    console.log('abrindo teto solar')
  }
}

const meuSonix = new Sonix('Sonix', '9120219', 4)
meuSonix.abrirTetoSolar()
meuSonix.andar()
console.log(meuSonix.modelo)


// HOISTING EM CLASSES

const carro = new Carro('sonix')
console.log(carro.modelo)

function Carro(modelo) {
  this.modelo = modelo
}

const carro = new Carro('sonix')
class Carro {
  constructor(modelo) {
    this.modelo = modelo
  }
}


//  DECLARAÇÃO POR MEIO DE EXŔESSÕES

const Classe = class {

}

const instancia = new Classe()

const ClasseI = class Nome {
  getClassName() {
    return Nome.name
  }
}

const instanciaI = new Nome()
