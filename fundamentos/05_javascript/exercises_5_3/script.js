function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
        const days = weekDays[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;

        weekDaysList.appendChild(dayListItem);
    };
};

createDaysOfTheWeek();


// Escreva seu código abaixo.
//Exercicios 1

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function adicionaDiasDezembro() {

    let ulDia = document.getElementById('days');

    for (let i = 0; i < dezDaysList.length; i += 1) {
        let dia = document.createElement('li');
        dia.className = 'day';
        dia.innerText = dezDaysList[i];
        if (dezDaysList[i] === 24 || dezDaysList[i] === 25 || dezDaysList[i] === 31) {
            dia.classList.add('holiday');
        }
        if (dezDaysList[i] === 4 || dezDaysList[i] === 11 || dezDaysList[i] === 18 || dezDaysList[i] === 25) {
            dia.classList.add('friday');
        }
        ulDia.appendChild(dia);
    }

}

adicionaDiasDezembro();

//Exercicio 2

function botaoFeriado(botao) {

    let posicaoform = document.getElementsByClassName('buttons-container')[0];

    let addBotao = document.createElement('button');

    addBotao.setAttribute('id', 'btn-holiday');
    addBotao.innerText = botao;
    posicaoform.appendChild(addBotao);
}

let botao = 'Feriados';
botaoFeriado(botao);

//Exercicio 3

function adicionaEventoBotao() {

    let clickFeriado = document.getElementById('btn-holiday');

    clickFeriado.addEventListener('click', function () {

        for (i = 0; i < document.getElementsByClassName("holiday").length; i+=1){
        document.getElementsByClassName("holiday")[i].style.backgroundColor = 'green';
        document.getElementsByClassName("holiday")[i].style.color = 'white';
    }

    });
}

adicionaEventoBotao();

//Questão 4
function botaoSextaFeira(sextaFeira) {

    let divPaibuttonsContainer = document.getElementsByClassName('buttons-container')[0];

    let botaoSexta = document.createElement('button');
    botaoSexta.setAttribute('id', 'btn-friday');
    botaoSexta.innerText = sextaFeira;

    divPaibuttonsContainer.appendChild(botaoSexta);
}

let sextaFeira = "Sexta-Feira";
botaoSextaFeira(sextaFeira);

//Questao 5

let botaoSextaEvento = document.getElementById('btn-friday');

botaoSextaEvento.addEventListener('click', function () {

    for(i = 0; i < document.getElementsByClassName('friday').length; i+= 1){
    let diasSexta = document.getElementsByClassName('friday')[i];
    diasSexta.style.backgroundColor = 'black';
    }
});

//Questão 6

let mesDezembro = document.getElementById('month');

function aumentaTextoMes(){
    
    mesDezembro.addEventListener('mouseover', function(){
        mesDezembro.style.fontSize = '50px';
    });
}

function retornaTamanhoNormal(){
    
    mesDezembro.addEventListener('mouseout', function(){
        mesDezembro.style.fontSize = '20px';
    });
}

aumentaTextoMes();
retornaTamanhoNormal();

//Questão 7
let myTasks = document.getElementsByClassName('my-tasks')[0];

function adicionaTarefaPersonalizada (tarefa){
    
    let novoSpan = document.createElement('span');
    novoSpan.innerText = tarefa;
    myTasks.appendChild(novoSpan);


}

let tarefa = "Praticar para me tornar alguém melhor";
adicionaTarefaPersonalizada(tarefa);

//Questão 8

function adicionaLegenda(cor, textoLegenda){
    
    let legenda = document.createElement('div');
    legenda.setAttribute('class', 'task');
    legenda.style.backgroundColor = cor;
    myTasks.appendChild(legenda);
}

let cor = 'green';
adicionaLegenda(cor);

//Questão 9

function selecionaTask(){
    let divEmFoco = document.getElementsByClassName('task')[0];

    divEmFoco.addEventListener('click', function(){
        divEmFoco.setAttribute('class','task-selected');
    })
}

selecionaTask();


//Questão 10


function adicionaMarcacao(cor){

    
    let diaCalendario = document.getElementsByClassName('day')[i];
    
    diaCalendario.addEventListener('click', function(){

        diaCalendario.style.backgroundColor = cor;
    });


}

adicionaMarcacao(cor);