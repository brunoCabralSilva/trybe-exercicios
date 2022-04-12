//Exercicio 1
// function peopleWork(nome) {
//     return { nomeCompleto: nome, email: (nome.replace(' ', '_') + '@trybe.com').toLowerCase() };
// }

// function newEmployees(callback) {
//     const employees = {
//         id1: callback('Bruno Gabryell'),
//         id2: callback('Antonio Amaro'),
//         id3: callback('Jose Fabio'),
//         id4: callback('Maria Freitas'),
//     }
//     return employees;
// }

// console.log(newEmployees(peopleWork));

// function geraNumero (numero, verificaNumero) {
//     verificaNumero(numero, numeroSorteado = Math.floor(Math.random()*5 +1));
// }

//Exercicio 2
// function verificaNumero (numero, numeroSorteado) {
//     if (numero === numeroSorteado) {
//         console.log(`Parabéns, você ganhou! O número sorteado foi ${numeroSorteado} e você escolheu o ${numero}`);
//     } else {
//         console.log(`Tente novamente. O número sorteado foi ${numeroSorteado} e você escolheu o ${numero}`);
//     }
// }

// geraNumero(4,verificaNumero);

//Exercicio 3

// const right_answers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
// const student_answers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

// function verificaResposta(arrayGabarito, arrayEstudante) {
//     let pontuacao = 0;
//     for (let i = 0; i < arrayGabarito.length; i += 1) {
//         if (arrayEstudante[i] === 'N.A') {
//             pontuacao = pontuacao;
//         } else if (arrayGabarito[i] === arrayEstudante[i]) {
//             pontuacao += 1;
//         } else {
//             pontuacao += 0.5;
//         }
//     }
//     console.log(`Pontuação Total: ${pontuacao}`);
// }

// function hofVerifica(right_answers, student_answers, verificaResposta) {
//     return verificaResposta(right_answers, student_answers);
// }


// hofVerifica(right_answers, student_answers, verificaResposta);
const paragrafo = document.getElementById('combate');
const turnButton = document.getElementById('novoTurno');

const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
};

const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
};

const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const mago = document.createElement('p');
mago.setAttribute('class', 'char');
mago.setAttribute('id', 'magician');
mago.innerText = `Pontos de vida do Mago : ${mage.healthPoints}\nPontos de inteligencia do Mago: ${mage.intelligence}\nPontos de mana do Mago: ${mage.mana}\nPontos de dano do Mago: ${mage.damage}`;
paragrafo.appendChild(mago);

const guerreiro = document.createElement('p');
guerreiro.setAttribute('class', 'char');
mago.setAttribute('id', 'soldier');
guerreiro.innerText = `Pontos de vida do Guerreiro : ${warrior.healthPoints}\nPontos de força do guerreiro: ${warrior.strength}\nPontos de dano de arma do Guerreiro: ${warrior.weaponDmg}\nPontos de dano do Guerreiro: ${warrior.damage}`;
paragrafo.appendChild(guerreiro);

const dragao = document.createElement('p');
dragao.setAttribute('class', 'char');
mago.setAttribute('id', 'monster');
dragao.innerText = `Pontos de vida do Dragão : ${dragon.healthPoints}\nPontos de força do Dragão: ${dragon.strength}\nPontos de dano do Dragão: ${dragon.damage}`;
paragrafo.appendChild(dragao);

turnButton.addEventListener('click', () => {

    if (warrior.healthPoints === 0 && mage.healthPoints === 0) {
        alert('Guerreiro e Mago vão ao chão diante da Fúria do Dragão! O Dragão mais uma vez triunfou!');
        turnButton.setAttribute('disabled', '');
    } else if (dragon.healthPoints === 0) {
        alert('O Guerreiro e o Mago colocaram ao chão o orgulho do Dragão antes que ambos pudessem morrer! Ele está morto!');
        turnButton.setAttribute('disabled', '');
    } else if (warrior.healthPoints === 0 && mage.healthPoints === 0 && dragon.healthPoints === 0) {
        alert('Guerreiro, Mago e Dragão tombaram. Bardos cantarão sobre este combate!');
        turnButton.setAttribute('disabled', '');
    } else {

        function retornaDanoDragao(dragao) {
            return dragao.damage = Math.floor(Math.random() * dragao.strength - 15) + 15;
        }

        function retornaDanoWarrior(warrior) {
            return warrior.damage = Math.floor(Math.random() * warrior.strength * warrior.weaponDmg - warrior.strength) + warrior.strength;
        }

        function retornaDanoManaMago(mago) {
            const danoMana = {};
            if (mago.mana > 15) {
                danoMana.dano = Math.floor(Math.random() * mago.intelligence * 2 - mago.intelligence) + mago.intelligence;
                mago.mana -= 15;
                return mago.damage = danoMana.dano;
            } else {
                danoMana.dano = 0;
                mago.mana -= 0;
                console.log(danoMana.dano);
                return mago.damage = danoMana.dano;
            }
        }

        const gameAction = {
            warriorTurn: (retornaDanoWarrior) => {
                dragon.healthPoints -= retornaDanoWarrior(warrior);
                if (warrior.healthPoints <= 0) {
                    guerreiro.innerText = `O Guerreiro morreu por chegar a 0 pontos de vida ou menos`;
                    warrior.healthPoints = 0;
                    warrior.strength = 0,
                    warrior.weaponDmg = 0;
                    warrior.damage = 0;
                    soldier.style.backgroundColor = 'black';
                    soldier.style.color = 'white';
                } else {
                    guerreiro.innerText = `Pontos de vida do Guerreiro : ${warrior.healthPoints}\nPontos de força do guerreiro: ${warrior.strength}\nPontos de dano de arma do Guerreiro: ${warrior.weaponDmg}\nPontos de dano do Guerreiro: ${warrior.damage}`;
                }
            },
            magoTurn: (retornaDanoManaMago) => {
                dragon.healthPoints -= retornaDanoManaMago(mage);
                if (mage.healthPoints <= 0) {
                    mago.innerText = `O Mago morreu por chegar a 0 pontos de vida ou menos`;
                    mage.healthPoints = 0;
                    mage.intelligence = 0;
                    mage.mana = 0;
                    mage.damage = 0;
                    magician.style.backgroundColor = 'black';
                    magician.style.color = 'white';
                } else {
                    mago.innerText = `Pontos de vida do Mago : ${mage.healthPoints}\nPontos de inteligencia do Mago: ${mage.intelligence}\nPontos de mana do Mago: ${mage.mana}\nPontos de dano do Mago: ${mage.damage}`;
                }
            },
            dragonTurn: (retornaDanoDragao) => {
                const danoDragao = retornaDanoDragao(dragon);
                mage.healthPoints -= danoDragao;
                warrior.healthPoints -= danoDragao;
                if (dragon.healthPoints <= 0) {
                    dragon.innerText = `O Dragão morreu por chegar a 0 pontos de vida ou menos`;
                    dragon.healthPoints = 0;
                    dragon.strength = 0;
                    dragon.damage = 0;
                    monster.style.backgroundColor = 'black';
                    monster.style.color = 'white';
                } else {
                    dragao.innerText = `Pontos de vida do Dragão : ${dragon.healthPoints}\nPontos de força do Dragão: ${dragon.strength}\nPontos de dano do Dragão: ${dragon.damage}`;
                }
            }
        };

        gameAction.warriorTurn(retornaDanoWarrior);
        gameAction.magoTurn(retornaDanoManaMago);
        gameAction.dragonTurn(retornaDanoDragao);
    }

});