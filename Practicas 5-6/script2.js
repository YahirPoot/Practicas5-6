class TorresHanoi {
    constructor(numeroDiscos) {
        this.numeroDiscos = numeroDiscos;
        this.pasos = [];
        this.movimientos = 0;
    }

    resolver() {
        this.pasos = [];
        this.movimientos = 0;
        this.moverDiscos(this.numeroDiscos, 'A', 'B', 'C');
        this.mostrarResultado();
    }

    moverDiscos(lugar, torreOrigen, torreAuxiliar, torreDestino) {
        if (lugar === 1) {
            this.pasos.push(`Mover disco 1 desde la torre ${torreOrigen} a la torre ${torreDestino}`);
            this.movimientos++;
            return;
        }

        this.moverDiscos(lugar - 1, torreOrigen, torreDestino, torreAuxiliar);
        this.pasos.push(`Mover disco ${lugar} desde la torre ${torreOrigen} a la torre ${torreDestino}`);
        this.movimientos++;
        this.moverDiscos(lugar - 1, torreAuxiliar, torreOrigen, torreDestino);
    }

    mostrarResultado() {
        const resultadoDiv = document.getElementById("resultado2");
        resultadoDiv.innerHTML = `${this.pasos.join('<br>')}`;
        resultadoDiv.innerHTML +=`<br>El total de movimientos fueron: <strong>${this.movimientos}.</strong>`;
    }
}

document.getElementById("resolverBtn").addEventListener("click", function (){
    const numeroDiscos = parseInt(document.getElementById("numeroDiscos").value);
    const respuestaFinal = new TorresHanoi(numeroDiscos);
    respuestaFinal.resolver();
});