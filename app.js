// Variáveis iniciais
let listaNumerosSorteados = [];
let tentativas = 0;
let numeroLimite = 5;
let numeroAleatorio = gerarNumeroAleatorio();
// Função para escrever na tela
function escreverNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial() {
    escreverNaTela('p', 'Digite um numero de 0 a 10');
    escreverNaTela('h1', 'Jogo do Numero Aleatorio');
}
exibirMensagemInicial();

// Função para gerar um número aleatório entre 0 e 10
function gerarNumeroAleatorio() {
    let numeroSorteado = parseInt((Math.random() * (numeroLimite) + 1));
    let quantidadeElementosLista = listaNumerosSorteados.length;

    if (quantidadeElementosLista == numeroLimite){
        listaNumerosSorteados = [];
    }

    if (listaNumerosSorteados.includes(numeroSorteado)) {
        return gerarNumeroAleatorio();
    } else {
        listaNumerosSorteados.push(numeroSorteado);
        return numeroSorteado;
    }
}

// Função para verificar o chute do jogador
function verificarChute() {
    let numeroDigitado = parseInt(document.querySelector('.container__input').value);
    tentativas++;
    if (numeroDigitado > numeroAleatorio) {
        escreverNaTela('p', 'O número secreto é menor');
    } else if (numeroDigitado < numeroAleatorio) {
        escreverNaTela('p', 'O número secreto é maior');
    } else {
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemVitoria = `Você conseguiu resolver com ${tentativas} ${palavraTentativa}!`;
        escreverNaTela('h1','Você Acertou!');
        escreverNaTela('p', mensagemVitoria);
    }
    document.getElementById('reiniciar').disabled = false;
}

// Função para resetar o jogo
function resetarJogo() {
    tentativas = 0;
    numeroAleatorio = gerarNumeroAleatorio();
    escreverNaTela('h1', 'Jogo do Numero Secreto');
    escreverNaTela('p', 'Digite um número de 0 a 10');
    document.getElementById('reiniciar').disabled = true;
}
