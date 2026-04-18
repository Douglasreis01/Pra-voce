function mostrarMensagem() {
    const msg = document.getElementById("mensagemOculta");
    msg.style.display = "block"; // Faz aparecer a div com a foto e o texto
    
    // Opcional: faz o botão sumir depois de clicado para o layout ficar limpo
    document.getElementById("botãoMensagem").style.display = "none";
}