// script.js

function checkPassword() {
    let password = document.getElementById("password").value;

    // Cambia la clave que consideres correcta para desbloquear el siguiente nivel
    if (password === "3xpl0it_2025") {
        // Redirige al siguiente nivel (página de inyección SQL)
        window.location.href = "nivel2.html";
    } else {
        // Muestra un mensaje de error si la clave es incorrecta
        document.getElementById("message").innerHTML = "⚠️ Acesso negado. Tente novamente.";
    }
}

    } else {
        document.getElementById('response').innerHTML = "❌ Código incorrecto. Inténtalo de nuevo.";
    }
}

