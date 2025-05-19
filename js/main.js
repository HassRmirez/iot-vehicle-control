const API_URL = "http://44.204.2.193:5000/api/devices";

let ipPublica = "";

function obtenerIpPublica() {
    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            ipPublica = data.ip;
            console.log("IP Pública obtenida:", ipPublica);
        })
        .catch(error => {
            console.error("Error al obtener la IP pública:", error);
        });
}

function enviarComando(comando) {
    document.getElementById("movimientoActual").innerText = comando.toUpperCase();

    const payload = {
        name: "Hassem Ramirez",
        ip: ipPublica,
        status: comando
    };

    fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    })
    .then(response => {
        if (response.ok) {
            console.log("Comando enviado correctamente:", comando);
        } else {
            console.error("Error al enviar comando");
        }
    })
    .catch(error => {
        console.error("Error de conexión:", error);
    });
}

window.addEventListener('DOMContentLoaded', obtenerIpPublica);
