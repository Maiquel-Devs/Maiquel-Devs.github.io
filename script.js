// Função para calcular o Poder de Compra
function calcularPC() {
    const initialValue = parseFloat(document.getElementById('initial-value').value.replace(',', '.'));
    const percentage = parseFloat(document.getElementById('percentage').value.replace(',', '.'));

    if (isNaN(initialValue) || isNaN(percentage)) {
        document.getElementById('result-text').textContent = "Por favor, insira valores válidos.";
        return;
    }

    // Caso de moeda estável (quando a variação é 0%)
    if (percentage === 0) {
        document.getElementById('result-text').innerHTML = `
            <p><strong>~PC = ${initialValue.toFixed(2)}NV</strong></p>
            <p><strong>MPC = ${initialValue.toFixed(2)}</strong></p>
            <p>O poder de compra não sofreu alterações.</p>
        `;
        return;
    }

    // Calcula o PC final
    const finalPC = initialValue + (initialValue * (percentage / 100));
    // Calcula a diferença (ganho ou perda)
    const difference = Math.abs(finalPC - initialValue);
    // Calcula o MPC (Multiplicador de Poder de Compra)
    const MPC = finalPC;

    // Determina se é ganho ou perda e ajusta o texto
    const isGanho = finalPC >= initialValue;
    const pcSign = isGanho ? "+" : "-";
    const ganhoOuPerda = isGanho ? `Ganho = ${difference.toFixed(2)}` : `Perda = ${difference.toFixed(2)}`;

    // Exibe os resultados no formato solicitado
    document.getElementById('result-text').innerHTML = `
        <p><strong>${pcSign}PC = ${finalPC.toFixed(2)}</strong></p>
        <p><strong>${ganhoOuPerda}</strong></p>
        <p><strong>MPC = ${MPC.toFixed(2)}</strong></p>
    `;
}

// Adicionando eventos para navegação e cálculos

document.getElementById('initial-value').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Impede o comportamento padrão
        document.getElementById('percentage').focus(); // Foca no próximo campo
    }
});

document.getElementById('percentage').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Impede o comportamento padrão
        // Verifica se ambos os campos estão preenchidos
        if (document.getElementById('initial-value').value !== '' && document.getElementById('percentage').value !== '') {
            calcularPC(); // Chama a função de cálculo
        }
    }
});

// Quando o botão for clicado, chama a função de cálculo
document.getElementById('calculate-btn').addEventListener('click', calcularPC);

