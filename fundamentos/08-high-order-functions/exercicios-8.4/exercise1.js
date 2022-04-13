
// // Requisito 1: Transformar tudo em um array
// const arrays = [
//     ['1', '2', '3'],
//     [true],
//     [4, 5, 6],
// ];

// function flatten(array) {
//     array.reduce((acc, nome) => {
//      acc.push(nome);
//     }),[];
// }

// console.log(flatten(arrays));

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

//Requisito 2
//  function unificaNome (acc, nome) {
//    acc.name += nome.name;
//   }

//   const expectedResult = books.author.reduce(unificaNome).name;


//   console.log(expectedResult);

// // Requisito 3

// const mediaIdade = books.reduce((acc, idade) => ({
//   acc.numeroAutores: acc += 1,
//   acc.somaDeValores: acc += idade
// }));

// //Requisito 4

// const maiorNome = books.reduce((acc, nome) => {
//  if (acc.name.length > nome.name.length ) {
//    return acc;
//  } return nome;
// });

// console.log (maiorNome);

//Requisito 5
// const names = [
//   'Aanemarie', 'Adervandes', 'Akifusa',
//   'Abegildo', 'Adicellia', 'Aladonata',
//   'Abeladerco', 'Adieidy', 'Alarucha',
// ];

// const vezesAa = names.reduce ((acc, nome) => {
//   if (nome.includes('a')) {
//     return {acc.maiusculo += 1, acc.minusculo = acc.minusculo};
//   } else if (nome.includes('A')) {
//     return {acc.minusculo = acc.minusculo, acc.minusculo += 1};
//   }
// });

// vezesAa();