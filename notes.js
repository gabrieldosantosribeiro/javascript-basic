/*
// variaveis, constantes e tipos de dados

// let - utilizado para criar variaveis
// const - utilizado para criar constantes
// var - variavel acessivel em toda a função

// undefined - variavel nao inicializada ou sem valor definido
// null - variavel intencionalmente definida como 'sem valor'


// number (número)
const x = 10
// number (número)
const y = 2.5
// string (sequência de caracteres)
const nome = 'gabriel'
// string (sequência de caracteres)
const sobrenome = 'santos'
// bollean (booleano)
const verdadeiro = true
// bollean (booleano)
const falso = false
// null (nulo)
const nulo = null
// undefined (não definido)
const nao_definido = undefined

// typeof(variavel) - usado para verificar o tipo de variavel
*/


//--------------------------------------------------------------------------------------


// operadores aritiméticos
const x = 4
const y = 5

const soma = x + y
const subtracao = x - y
const multiplicacao = x * y
const divisao = x / y
const modulo = x % y // retorna o resto da divisão de x por y

console.log(modulo)

// atribuição
let z = 1

z = z + 1 // atribuição aritmética
z += 1 // atribuição composta
z++ // operador de incremento pós-fixo - para subtração é desencremento
++z // operador de incremento pré-fixo - para subtração é desencremento

// operadores de comparação

/*
    > maior que
    < menor que
    >= maior ou igual a
    <= menor ou igual a
    != diferente de
    == igual a - não diferencia tipos
    === igual a - verifica tipo e valor
*/

// operadores lógicos

/*
    && AND
    || OR
    ! NOT
*/


//--------------------------------------------------------------------------------------


// strings

// criação
const str = 'Olá, mundo!'
const nome = 'gabriel'

// concatenação
const apresenteacao = 'meu nome é ' + nome

// template literal
const apresenteacao2 = `meu nome é ${nome}`

// acesso a caracteres
str.charAt(1) // retorna o caractere da posição 1
str.charCodeAt(1) // retorna o código unicode do caractere da posição 1

// modificação de strings
str.toUpperCase() // converte a string para maiúsculas
str.toLowerCase() // converte a string para minúsculas
str.trim() // remove os espaços em branco do início e do fim da string

// busca e substituição
str.indexOf('l') // retorna a posição da primeira ocorrencia de 'l'
str.lastIndexOf('a') // retorna a posição da ultima ocorrencia de 'a'
str.includes('mundo') // verifica se 'mundo' está presente na string
str.replace('mundo', 'universo') // substitui a primeira ocorrencia de 'mundo'
str.replaceAll('mundo', 'universo') // substitui todas as ocorrencias de 'mundo'

// divisão e junção
str.split() // divide a strinf em um array

let array = [ 'olá', 'mundo!']
array.join(' ') // junta elementos do array em uma string (utiliza ' ' nas junções)

// extraindo substrings
str.substring(0, 3) // retorna a parte da strinf entre os índices 0 e 3
str.slice(1, 3) // semelhante a substring, aceita índices negativos


//--------------------------------------------------------------------------------------


// vetores - arrays

// criação
const vetor = ['a', 10, 'oi', 1.5, true]

const numeros = [1, 2, 3, 4, 5]
const frutas = ['maçã', 'laranja', 'pera', 'uva']

// obter um valor
numeros[0] // acessa o elemento do índice 0
frutas[1] // acessa o elemento do índice 1

// adicionar um elemento
frutas[4] = 'melancia' // adiciona no índice estabelecido
frutas.push('morango') // adiciona no final do vetor
frutas.unshift('manga') // adiciona no início do vetor

// alterar o valor de um elemento
frutas[1] = 'limão'

// remover elementos
frutas.pop() // remove o ultimo elemento do vetor - retorna o elemento que foi removido
frutas.shift() // rmeove o primeiro elemento do vetor - retorna o elemento removido

// encontrar elementos
frutas.indexOf('limão') // retorna o índice de 'limão'

// verificação de vetores
Array.isArray(frutas) // retorna se é ou não um vetor


//--------------------------------------------------------------------------------------


// objetos

const pessoa = {
    nome: 'gabriel',
    sobrenome: 'santos',
    idade: 18,
    passatempos: ['musica', 'programação'],
    endereco: {
        pais: 'brasil',
        estado: 'sp',
        cidade: 'suzano'
    }
}

// acessando uma propriedade
pessoa.nome

// acessando um elemento de uma propriedade vetor
pessoa.passatempos[0]

// acessando uma propriedade de uma propriedade objeto
pessoa.endereco.cidade

// definindo uma nova propriedade
pessoa.email = 'gabriel@gmail.com'

// formatando um objeto para formato JSON
JSON.stringify(pessoa)


//--------------------------------------------------------------------------------------


// estruturas condicionais
const i = 20
const j = 10

/*
if (i == j) {
    console.log('i é igual a j')
} else {
    console.log('i não é igual a j')
}
*/

if (i < j) {
    console.log('i é menor que j')
} else if (i > j) {
    console.log('i é maior que j')
} else {
    console.log('i é igual a j')
}

const cor = 'azul'

switch (cor) {
    case 'vermelho':
        console.log('a cor é vermelho')
        break
    case 'verde':
        console.log('a cor é verde')
        break
    case 'azul':
        console.log('a cor é azul')
        break
    default:
        console.log('a cor nao é vermelho, nem verde, nem azul')
}

const sexo = 'M'

switch (sexo) {
    case 'M':
    case 'm':
        console.log('masculino')
        break
    case 'F':
    case 'f':
        console.log('feminino')
        break
    default:
        console.log('invalido')
}

// operador ternário
let numero = cor == 'vermelho' ? 10 : 20
console.log(numero)


//--------------------------------------------------------------------------------------


// estruturas de repetição

let contador = 0

// estrutura de repetição com teste lógico no início
while (contador < 3) {
    console.log('miau')
    contador++
}

// estrutura de repetição com teste lógico no final
do {
    console.log('au')
    contador--
} while (contador > 0)

// estrutura de repetição com variável de controle
for (let z = 0 ; z < 10; z++) {
    console.log(z)
}

let tarefas = ['estudar', 'almoçar', 'trabalhar']

for (let tarefa of tarefas) {
    console.log(tarefa)
}


//--------------------------------------------------------------------------------------


// funções
function cumprimentar(nome) {
    console.log(`olá ${nome}`)
}
cumprimentar('gabriel') // quando nao especificado o argumento retornara 'olá undefined'

function apresentacao(nome, idade='?') {
    console.log(`meu nome é ${nome} e eu tenho ${idade} anos.`)
}
apresentacao('gabriel', '18')

function nome_completo(nome, sobrenome) {
    return `${nome} ${sobrenome}`
}
const nomeCompleto = nome_completo('gabriel', 'santos')
cumprimentar(nomeCompleto)

// funções seta
const dizer_oi = () => console.log('oi')
dizer_oi()

const dizer_ola = () => { // para mais de uma linha
    console.log('ola')
    // ...
}
dizer_ola()

const somar = (a, b) => a + b // retorno implícito
console.log(somar(2, 4))


//--------------------------------------------------------------------------------------


// funções de ordem maior

/*
    .forEach() - percorre os itens de um vetor e fazer algum tipo de operação
    .map() - percorre os itens de um vetor e transformar em algo que definir
    .filter() - percorrer os itens de um vetor e filtrar
    .reduce() - percorrer os itens de um vetor aplicar uma operação e retornar apenas um valor
*/

const nums = [1, 2, 3, 4, 5]

// forEach()
nums.forEach(function (num) {
    console.log(num)
})

const letras = ['A', 'B', 'C', 'D']

letras.forEach(function (letra, index) {
    console.log(`${index}: ${letra}`)
})

letras.forEach(function (letra, index, vetor){
    console.log(`${index}: ${letra}`)
    console.log(`${vetor}`)
})

// map()
tasks = [
    {
        id: 1,
        task: 'estudar',
        completed: true
    },
    {
        id: 2,
        task: 'trabalhar',
        completed: false
    },
    {
        id: 3,
        task: 'faculdade',
        completed: true
    }
]

const vetorDeTextosDasTarefas = tasks.map(function (i) {
    return `tarefa ${i.id}: ${i.task}`
})
console.log(vetorDeTextosDasTarefas)

// filter()
const tarefa1 = tasks.filter (function (i) {
        return i.id === 1
})
console.log(tarefa1)

// reduce()
const lista = [1, 2, 3, 4, 5]
const valorInicial = 0

const sum = lista.reduce(function (acumulador, ele) {
    return acumulador + ele
}, valorInicial)
console.log(sum)


//--------------------------------------------------------------------------------------


// programação orientada a objetos

const pessoaA = {
    nome: 'gabriel',
    sobrenome: 'santos',
    nascimento: new Date('10-21-2006'),
    obterNomeCompleto() {
        return `${this.nome} ${this.sobrenome}`
    },
    obterAnoNascimento() {
        return this.nascimento.getFullYear()
    }
}
console.log(pessoaA.nome)
console.log(pessoaA.sobrenome)
console.log(pessoaA.obterNomeCompleto())
console.log(pessoaA.obterAnoNascimento())

// função construtora
function Pessoa(nome, sobrenome, nascimento) {
    this.nome = nome
    this.sobrenome = sobrenome
    this.nascimento = new Date(nascimento)
    this.amigos = []
    this.obterAnoNascimento = function() {
        return this.nascimento.getFullYear()
    }
    this.adicionarAmigo = function (amigo) {
        this.amigos.push(amigo)
    }
}

// adiciona um novo metodo ou propriedade a um objeto
Pessoa.prototype.obterNomeCompleto = function() {
    return `${this.nome} ${this.sobrenome}`
}

const pessoa1 = new Pessoa('joao', 'silva', '7-8-2000')
const pessoa2 = new Pessoa('pedro', 'santos', '1-1-2010')
console.log(pessoa1)

pessoa1.adicionarAmigo(pessoa2)
console.log(pessoa1)

//--------------------------------------------------------------------------------------

// clases ES6

class Pessoa {
    constructor(nome, sobrenome, nascimento) {
        this.nome = nome
        this.sobrenome = sobrenome
        this.nascimento = new Date(nascimento)
    }

    obterNomeCompleto() {
        return `${this.nome} ${this.sobrenome}`
    }
}

class Cliente extends Pessoa {
    constructor(nome, sobrenome, nascimento, saldo) {
        super(nome, sobrenome, nascimento)
        this.saldo = saldo
    }
}

const cliente1 = new Cliente('joao', 'silva', '7-8-2000', 1000)