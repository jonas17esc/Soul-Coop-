const cenas = {
    inicio: {
        texto: "Will acorda, faz sua rotina e escreve uma carta para seu neto. Agora ele precisa sair para depositá-la.",
        opcoes: [
            { texto: "Ir para o rio", destino: "rio" },
            { texto: "Ir para o celeiro", destino: "celeiro" },
            { texto: "Ir para a vila", destino: "vila" }
        ]
    },

    // RIO
    rio: {
        texto: "Will chega ao rio. A água está calma.",
        opcoes: [
            { texto: "Ir para a roda d’água", destino: "roda" },
            { texto: "Seguir o rio", destino: "seguirRio" }
        ]
    },

    roda: {
        texto: "Will tenta pescar perto da roda d’água...",
        opcoes: [
            { texto: "Tentar pescar", destino: "pesca" }
        ]
    },

    pesca: {
        texto: Math.random() > 0.5 
            ? "A pesca foi bem-sucedida!" 
            : "A pesca falhou...",
        opcoes: [
            { texto: "Continuar", destino: "final" }
        ]
    },

    seguirRio: {
        texto: "Will encontra um pescador e conversa com ele.",
        opcoes: [
            { texto: "Continuar", destino: "final" }
        ]
    },

    // CELEIRO
    celeiro: {
        texto: "Will chega ao celeiro.",
        opcoes: [
            { texto: "Organizar o celeiro", destino: "organizar" },
            { texto: "Verificar o curral", destino: "curral" }
        ]
    },

    organizar: {
        texto: "O celeiro está organizado e tranquilo.",
        opcoes: [
            { texto: "Continuar", destino: "final" }
        ]
    },

    curral: {
        texto: "Will encontra manchas de sangue no chão...",
        opcoes: [
            { texto: "Investigar", destino: "investigar" }
        ]
    },

    investigar: {
        texto: "O mistério permanece sem resposta.",
        opcoes: [
            { texto: "Continuar", destino: "final" }
        ]
    },

    // VILA
    vila: {
        texto: "Will chega à vila.",
        opcoes: [
            { texto: "Ir à farmácia", destino: "farmacia" },
            { texto: "Fazer compras", destino: "compras" }
        ]
    },

    farmacia: {
        texto: "Will compra um antidepressivo.",
        opcoes: [
            { texto: "Continuar", destino: "final" }
        ]
    },

    compras: {
        texto: "Will compra mantimentos essenciais.",
        opcoes: [
            { texto: "Continuar", destino: "final" }
        ]
    },

    final: {
        texto: "Will retorna para casa após um dia cheio de experiências. A carta foi apenas o começo de uma jornada inesperada.",
        opcoes: [
            { texto: "Recomeçar", destino: "inicio" }
        ]
    }
};

const textoElemento = document.getElementById("texto");
const opcoesElemento = document.getElementById("opcoes");

function mostrarCena(cenaAtual) {
    const cena = cenas[cenaAtual];

    textoElemento.innerText = cena.texto;

    opcoesElemento.innerHTML = "";

    cena.opcoes.forEach(opcao => {
        const botao = document.createElement("button");
        botao.innerText = opcao.texto;

        botao.onclick = () => {
            mostrarCena(opcao.destino);
        };

        opcoesElemento.appendChild(botao);
    });
}
mostrarCena("inicio");