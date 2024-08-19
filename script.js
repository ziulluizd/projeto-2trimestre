const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Vitória chegou em casa após o trabalho e recebeu uma notícia de que a região em que mora tem grandes riscos de enchentes. Qual foi o pensamento de Vitória? ",
        alternativas: [
            {
                texto:  "Meu Deus, alguém me tire daqui! ",
                afirmacao: "Ficou com medo do que poderia acontecer."
            },
            {
                texto: "Que nada a ver, não vai acontecer nada, É MENTIRAAA!",
                afirmacao: "Não deu atenção para a notícia e continuou sem se preocupar."
            }
        ]
    },
    {
        enunciado: "Enquanto dormia, sua mãe foi ao seu quarto avisando que a rua estava quase completamente alagada, e que elas deveriam arrumar imediatamente suas coisas. O que ela levou? ",
        alternativas: [
            {
                texto: "Coisas essenciais (roupas, calçados, coisas de higiene)",
                afirmacao: "Pensou e pegou as coisas que são mais necessárias."
            },
            {
                texto:  "Joias, maquiagem, muitos livros, câmera fotográfica.",
                afirmacao: "Pensou e pegou coisas que não seriam realmente necessárias."
            }
        ]
    },
    {
        enunciado: "Depois de pegar suas coisas logo um bombeiro em um barco apareceu para resgata-las, porém Vitória possui 2 gatos e 1 cachorro, e o bombeiro não aceita animais no barco. Vitoria foi sem os animais, ou obrigou o bombeiro a levá-los  ?",
        alternativas: [
            {
                texto: "Foi sem os animais. ",
                afirmacao: "Aceitou e chorou horrores, pois amava muito eles."
            },
            {
                texto:   "Obrigou o bombeiro a levá-los.",
                afirmacao: "Ficou contente que levou seus companheiros de vida."
            }   
        ]
    },
    {
        enunciado: "Vitória foi resgatada e levada a um abrigo em outra cidade, onde passou 3 semanas. A vida dela continuou normal ou mudou totalmente?",
        alternativas: [
            {
                texto:  "A vida continuou normalmente como era antes.",
                afirmacao: "Vitória continuou vivendo sua rotina normalmente com as doações, só que no abrigo e sem sair."
            },
            {
                texto: "A vida delas mudou completamente, virou de cabeça para a baixo.",
                afirmacao: "Vitória ficou totalmente traumatizada sem conseguir retomar seus hábitos."
            }  
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual]
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa))
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {  
    historiaFinal;
    atual++;
    mostraPergunta();
}

function mostraResultado() {
     caixaPerguntas.textContent = "Em 2049...";
     textoResultado.textContent = historiaFinal;
     caixaAlternativas.textContent = "Vitória já estava totalmente recuperada como os outros sobreviventes. O rio grande do sul esteve em reformas para previnir as enchentes e com isso todas as cidades foram recuperadas e os riscos de morte e entre outros acabaram diminuindo.";
}

mostraPergunta();