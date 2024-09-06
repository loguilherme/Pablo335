const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "você separa o lixo na sua casa?",
        alternativas: [
            {
                texto: "Sim!",
                afirmacao: "Você é uma pessoa que tem conscientização com o meio ambiente. "
            },
            {
                texto: "Não!",
                afirmacao: "Você é uma pessoa trabalhadora que as vezes não sobra tempo para separar o lixo."
            }
        ]
    },
    {
        enunciado: "Você acha que o desmatamento é crucial para o meio ambiente?",
        alternativas: [
            {
                texto: "Sim.",
                afirmacao: "O desmatamento pode ser visto como crucial em alguns contextos econômicos imediatos."
            },
            {
                texto: "Não.",
                afirmacao: "o desmatamento não é crucial para o mundo; na verdade, é extremamente prejudicial para o meio ambiente e para a vida no planeta.."
            }
        ]
    },
    {
        enunciado: "A conservação dos oceanos é vital para a saúde global do planeta?",
        alternativas: [
            {
                texto: "Sim.",
                afirmacao: "pois os oceanos regulam o clima, fornecem alimentos e sustentam uma biodiversidade rica.."
            },
            {
                texto: "Não.",
                afirmacao: "A utilização de plásticos descartáveis não é um problema significativo para o meio ambiente, pois há muitos métodos eficazes de gestão de resíduos que evitam impactos negativos."
            }
        ]
    },
    {
      


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
