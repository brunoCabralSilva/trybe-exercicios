
// Requisito 1: Dada uma matriz, transforme em um array.
// const arrays = [
//     ['1', '2', '3'],
//     [true],
//     [4, 5, 6],
// ];

// function flatten(array) {
//   return arrays.reduce((acumulaArray, posicao) => {
    
//   });
// }

console.log(flatten());

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// // Requisito 2 - Crie uma string com os nomes de todas as pessoas autoras.

// function reduceNames() {
//   return lista = books.reduce((nomes, nomeAtual, index) => {
//     let frase = `${nomes += nomeAtual.author.name}, ` ;
//     return frase;
//   }, '');
// }

// console.log(reduceNames());

// // Requisito 3 Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.

// function averageAge() {
//   let somatorio = 0;
//   return books.reduce((acumuladorMedia, idade) => {
//     let age = idade.releaseYear - idade.author.birthYear;
//     let qtd = books.length;
//     somatorio += age;
//     return acumuladorMedia = somatorio / qtd;
//   },0);
// }

// console.log(averageAge());

// //Requisito 4

// const maiorNome = books.reduce((acc, nome) => {
//  if (acc.name.length > nome.name.length ) {
//    return acc;
//  } return nome;
// });

// console.log (maiorNome.name);

//Requisito 5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.
// const names = [
//   'Aanemarie', 'Adervandes', 'Akifusa',
//   'Abegildo', 'Adicellia', 'Aladonata',
//   'Abeladerco', 'Adieidy', 'Alarucha',
// ];

// function containsA() {
 
// }

//Requisito 6 - Agora vamos criar um novo array de objetos a partir das informações abaixo, onde cada objeto terá o formato { name: nome do aluno, average: media das notas } . Para isso vamos assumir que a posição 0 de notas refere-se ao aluno na posição 0 de alunos , aqui além de reduce será necessário utilizar também a função map . Dica: Você pode acessar o index do array dentro de map , e você pode ver o objeto esperado na constante expected .

// const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
// const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

// function studentAverage() {
  
//   return students.map((aluno, index) => ({ 
//     nome: aluno,
//     average: ((grades[index].reduce((acumulador, nota) => {
//       return (acumulador += nota);
//     },0))/ grades[index].length).toFixed(1),
//   }
//   ));
// }

// console.log(studentAverage());
