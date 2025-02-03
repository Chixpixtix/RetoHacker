// script.js
function checkPassword() {
    let password = document.getElementById("password").value;
    if (password === "3xpl0it_2025") {
        window.location.href = "nivel2.html";  // Redirige al siguiente nivel
    } else {
        document.getElementById("message").innerHTML = "⚠️ Acesso negado. Tente novamente.";
    }
}


