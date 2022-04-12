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

// Requisito 1: Concluído
const livro = books.map((dadosDoLivro) => `${dadosDoLivro.name} - ${dadosDoLivro.genre} - ${dadosDoLivro.author.name}`);
console.log(livro);



//Requisito 2: Concluído
const idadeAutor = books.map((livro) => ({
    age: livro.releaseYear, 
    author: livro.author.name
}));

idadeAutor.sort((age1,age2) => {
    if (age1.age > age2.age){
        return 1;
    } else if (age2.age > age1.age) {
        return -1;
    } return 0;
});
console.log(idadeAutor);



//Requisito 3: Concluído
const cientificFantasy = books.filter((livro) => livro.genre === 'Ficção Científica' || livro.genre === 'Fantasia');
console.log(cientificFantasy);



// Requisito 4: Pendente ordenar por releaseYear
const livrosPorIdade = (books.filter((livro) => 2022 - livro.releaseYear > 60));
livrosPorIdade.sort((year1, year2) => {
    if (year1.releaseYear > year2.releaseYear){
        return 1;
    } else if (year2.releaseYear > year1.releaseYear){
        return -1;
    } return 0;
});
console.log(livrosPorIdade);



// Requisito 5: Concluído
const arrayAutores = (cientificFantasy.map((autor) => autor.author.name));
arrayAutores.sort();
console.log(arrayAutores);

// Requisito 6:
const autoresComObrasMaioresQue60 = livrosPorIdade.map((titulo) => titulo.name);
console.log(autoresComObrasMaioresQue60);


//Requisito 7: Cada inicial termina com um ponto.
const autoresTresIniciais = books.filter((autor) => (autor.author.name).includes('.'));

console.log(autoresTresIniciais);

