document.getElementById("calculate-btn").addEventListener("click", function () {
    const initialValue = parseFloat(document.getElementById("initial-value").value);
    const percentage = parseFloat(document.getElementById("percentage").value);

    const resultText = document.getElementById("result-text");

    if (isNaN(initialValue) || isNaN(percentage)) {
        resultText.textContent = "Por favor, insira valores válidos.";
        return;
    }

    const variation = (initialValue * percentage) / 100;
    const finalValue = initialValue + variation;
    const mpc = Math.abs(variation);

    if (percentage > 0) {
        resultText.innerHTML = `<code>+PC = ${finalValue.toFixed(2)} → ${mpc.toFixed(2)}</code> <br> MPC = ${finalValue.toFixed(2)} reais`;
    } else if (percentage < 0) {
        resultText.innerHTML = `<code>-PC = ${finalValue.toFixed(2)} → ${mpc.toFixed(2)}</code> <br> MPC = ${finalValue.toFixed(2)} reais`;
    } else {
        resultText.innerHTML = `<code>PC~ = ${initialValue.toFixed(2)}NV</code> <br> MPC = ${initialValue.toFixed(2)} reais`;
    }
});
