class CambioAutomatico {
    constructor() {
        this.monedas = [100, 50, 20, 10, 5, 1, 0.5, 0.2, 0.01];
        this.nombresMonedas = ["100 pesos", "50 pesos", "20 pesos", "10 pesos", "5 pesos", "1 pesos", "0.5 pesos", "0.2 pesos", "0.01 pesos"];
    }

    calcularCambio() {
        const total = parseFloat(document.getElementById("total").value);
        const pago = parseFloat(document.getElementById("pago").value);
        const resultadoDiv = document.getElementById("resultado");

        const cambio = [];
        const monedasNoUtilizadas = [];

        let cambioResultado = pago - total;
        if(cambioResultado < 0) {
            resultadoDiv.innerHTML = "El pago es insuficiente";
            return;
        }

        for (let i = 0; i < this.monedas.length; i++) {
            const monedas = this.monedas[i];
            const nombresMonedas = this.nombresMonedas[i];

            if (cambioResultado >= monedas) {
                const cantidad = Math.floor(cambioResultado / monedas);
                cambio.push(`${cantidad} moneda${cantidad !== 1 ? 's' : ''} de ${nombresMonedas}`);
                cambioResultado -= cantidad * monedas;
                cambioResultado = parseFloat(cambioResultado.toFixed(2));
            } else {
                monedasNoUtilizadas.push(`0 monedas de ${nombresMonedas}`);
            }
        }

        const resultado = cambio.concat(monedasNoUtilizadas);
        resultadoDiv.innerHTML = "Resultado: <br>" + resultado.join("<br>");
    }
}

document.getElementById("calcularBtn").addEventListener("click", function () {
    const cajero = new CambioAutomatico();
    cajero.calcularCambio();
});

