// ===== SISTEMA DE SIMULADOS =====
let questoesAtuais = [];
let questaoAtual = 0;
let respostasUsuario = [];
let tempoInicio = 0;
let temporizador = null;

// ===== INICIAR SIMULADO =====
function iniciarSimulado(tipo) {
    // Busca as questões do tipo selecionado
    if (tipo === 'teorico') {
        questoesAtuais = shuffleArray([...questoes.teorico]);
    } else if (tipo === 'oficial') {
        questoesAtuais = shuffleArray([...questoes.oficial]);
    } else if (tipo === 'organista') {
        questoesAtuais = shuffleArray([...questoes.organista]);
    }
    
    // Seleciona apenas 10 questões (ou menos se tiver menos)
    const totalQuestoes = Math.min(questoesAtuais.length, 10);
    questoesAtuais = questoesAtuais.slice(0, totalQuestoes);
    
    questaoAtual = 0;
    respostasUsuario = [];
    tempoInicio = Date.now();
    
    // Esconde o botão de início e mostra as questões
    document.getElementById('tela-inicial').style.display = 'none';
    document.getElementById('tela-questoes').style.display = 'block';
    
    // Inicia o timer
    if (temporizador) clearInterval(temporizador);
    let tempoRestante = 3600; // 10 minutos em segundos
    document.getElementById('timer').textContent = '60:00';
    
    temporizador = setInterval(() => {
        tempoRestante--;
        const minutos = Math.floor(tempoRestante / 60);
        const segundos = tempoRestante % 60;
        document.getElementById('timer').textContent = 
            `${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}`;
        
        if (tempoRestante <= 0) {
            clearInterval(temporizador);
            finalizarSimulado();
        }
    }, 1000);
    
    // Mostra a primeira questão
    mostrarQuestao();
}

// ===== MOSTRAR QUESTÃO =====
function mostrarQuestao() {
    if (questaoAtual >= questoesAtuais.length) {
        finalizarSimulado();
        return;
    }
    
    const questao = questoesAtuais[questaoAtual];
    document.getElementById('progresso').textContent = 
        `Questão ${questaoAtual + 1} de ${questoesAtuais.length}`;
    document.getElementById('pergunta').textContent = questao.pergunta;
    
    const alternativasContainer = document.getElementById('alternativas');
    alternativasContainer.innerHTML = '';
    
    const letras = ['A', 'B', 'C', 'D'];
    questao.alternativas.forEach((alt, index) => {
        const button = document.createElement('button');
        button.className = 'alternativa-btn';
        button.innerHTML = `<span class="letra">${letras[index]}</span> ${alt}`;
        button.dataset.index = index;
        button.onclick = () => selecionarAlternativa(index);
        
        // Se já respondeu, marca a opção
        if (respostasUsuario[questaoAtual] !== undefined) {
            button.style.borderColor = '#ccc';
            if (respostasUsuario[questaoAtual] === index) {
                button.style.background = '#c9a84c';
                button.style.color = '#1a2a4a';
            }
        }
        
        alternativasContainer.appendChild(button);
    });
    
    // Atualiza botões de navegação
    document.getElementById('btn-anterior').style.display = questaoAtual > 0 ? 'inline-block' : 'none';
}

// ===== SELECIONAR ALTERNATIVA =====
function selecionarAlternativa(index) {
    respostasUsuario[questaoAtual] = index;
    mostrarQuestao();
}

// ===== PRÓXIMA QUESTÃO =====
function proximaQuestao() {
    if (questaoAtual < questoesAtuais.length - 1) {
        questaoAtual++;
        mostrarQuestao();
    } else {
        finalizarSimulado();
    }
}

// ===== QUESTÃO ANTERIOR =====
function questaoAnterior() {
    if (questaoAtual > 0) {
        questaoAtual--;
        mostrarQuestao();
    }
}

// ===== FINALIZAR SIMULADO =====
function finalizarSimulado() {
    clearInterval(temporizador);
    
    // Calcula resultado
    let acertos = 0;
    const total = questoesAtuais.length;
    
    questoesAtuais.forEach((questao, index) => {
        if (respostasUsuario[index] === questao.correta) {
            acertos++;
        }
    });
    
    const porcentagem = Math.round((acertos / total) * 100);
    const aprovado = porcentagem >= 70;
    
    // Salva no histórico (localStorage)
    const historico = JSON.parse(localStorage.getItem('historicoCCB') || '[]');
    historico.push({
        data: new Date().toLocaleDateString(),
        tipo: document.querySelector('.simulado-tipo')?.textContent || 'Simulado',
        acertos: acertos,
        total: total,
        porcentagem: porcentagem,
        aprovado: aprovado
    });
    localStorage.setItem('historicoCCB', JSON.stringify(historico));
    
    // Mostra resultado
    document.getElementById('tela-questoes').style.display = 'none';
    document.getElementById('tela-resultado').style.display = 'block';
    
    document.getElementById('resultado-acertos').textContent = `${acertos}/${total}`;
    document.getElementById('resultado-porcentagem').textContent = `${porcentagem}%`;
    document.getElementById('resultado-status').textContent = aprovado ? '✅ APROVADO!' : '❌ REPROVADO';
    document.getElementById('resultado-status').style.color = aprovado ? '#28a745' : '#dc3545';
    
    // Mostra revisão das questões
    const revisaoContainer = document.getElementById('revisao-questoes');
    revisaoContainer.innerHTML = '';
    
    questoesAtuais.forEach((questao, index) => {
        const div = document.createElement('div');
        div.className = 'revisao-item';
        const acertou = respostasUsuario[index] === questao.correta;
        const respostaCorreta = questao.alternativas[questao.correta];
        const respostaUsuario = respostasUsuario[index] !== undefined ? 
            questao.alternativas[respostasUsuario[index]] : 'Não respondeu';
        
        div.innerHTML = `
            <div style="display:flex; justify-content:space-between; align-items:center;">
                <strong>${index + 1}. ${questao.pergunta}</strong>
                <span style="color: ${acertou ? '#28a745' : '#dc3545'}; font-weight:bold;">
                    ${acertou ? '✅' : '❌'}
                </span>
            </div>
            <div style="font-size:14px; margin-top:5px;">
                <span style="color:#28a745;">✓ Correta: ${respostaCorreta}</span><br>
                <span style="color:${respostasUsuario[index] === questao.correta ? '#28a745' : '#dc3545'};">
                    Sua resposta: ${respostaUsuario}
                </span>
            </div>
            <hr style="margin: 10px 0; border-color: #eee;">
        `;
        revisaoContainer.appendChild(div);
    });
}

// ===== VOLTAR PARA PÁGINA DE SIMULADOS =====
function voltarSimulados() {
    window.location.href = 'pages/simulados.html';
}

// ===== FUNÇÃO AUXILIAR: EMBARALHAR ARRAY =====
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}