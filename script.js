document.addEventListener("DOMContentLoaded", function() {
    document.addEventListener("contextmenu", event => event.preventDefault()); // Bloquea clic derecho
    document.addEventListener("keydown", function(event) {
        if (event.key === "F12" || (event.ctrlKey && event.key === "u")) {
            event.preventDefault();
        }
    });
});

function checkCode() {
    var userInput = document.getElementById('userInput').value;
    var correctCode = atob("aGFja2VyMjAyNQ=="); // "hacker2025" codificado en Base64

    if (userInput === correctCode) {
        document.getElementById('response').innerHTML = "✅ Acceso permitido! Desbloqueando la excursión...";
        
        setTimeout(() => {
            window.location.href = "excursiones.html"; // Redirige después de 2 segundos
        }, 2000);
    } else {
        document.getElementById('response').innerHTML = "❌ Código incorrecto. Inténtalo de nuevo.";
    }
}

