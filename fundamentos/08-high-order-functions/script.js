
// // Faça uma lista com as suas frutas favoritas
// const specialFruit = ['Acerola', 'Maracujá', ' Laranja', 'Limão'];

// // Faça uma lista de complementos que você gostaria de adicionar
// const additionalItens = ['Água', 'Açúcar', 'Gelo'];

// const fruitSalad = (fruit, additional) => {
//     const arraySalada = [...fruit, ...additional];
//     return arraySalada;
// };

// console.log(fruitSalad(specialFruit, additionalItens));

// // Fixar Object

// const user = {
//     name: 'Maria',
//     age: 21,
//     nationality: 'Brazilian',
//   };
  
//   const jobInfos = {
//     profession: 'Software engineer',
//     squad: 'Rocket Landing Logic',
//     squadInitials: 'RLL',
//   };

//   const dadosGerais = {
//       ...user,
//       ...jobInfos
//   };


// const retornaInformation = ({name, age, nationality, profession, squad, squadInitials}) => {
//   console.log(`Hi, my name is ${name}, I'm ${age} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials}-${squad}`);
// };

// retornaInformation(dadosGerais);

// //Fixar Array

// const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

// Produza o mesmo resultado acima, porém utilizando array destructuring
// const [saudacao1, saudacao2] = saudacoes;

// saudacao2(saudacao1);

// let comida = 'gato';
// let animal = 'água';
// let bebida = 'arroz'; 

// console.log(comida, animal, bebida); 

// const getNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

// const person = {
//   firstName: 'João',
//   lastName: 'Jr II',
// };

// const otherPerson = {
//   firstName: 'Ivan',
//   lastName: 'Ivanovich',
//   nationality: 'Russian',
// };

// const {nationality = 'brazilian'} = person;

// console.log(getNationality(otherPerson)); // Ivan is Russian
// console.log(getNationality(person));

// let numerosPares = [1, 3, 5, 6, 8, 10, 12];
// console.log(numerosPares); // [6, 8, 10, 12];


// // Fixação de Object Property Shorthand
// const getPosition = (latitude, longitude) => ({
//     latitude,
//     longitude,
// });
  
//   console.log(getPosition(-19.8157, -43.9542));

// //Fixação de Default Parameters

// const multiply = (number = 'default', value = 'default') => {
//     if (number === 'default') {
//         return number;
//     } else if (value === 'default') {
//         return value;
//     } return number * value;
//   };
  
//   console.log(multiply(8, 4));