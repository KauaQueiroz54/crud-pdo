// TESTE RÁPIDO DE CARREGAMENTO
console.log("O arquivo recuperar.js foi carregado com sucesso!");

const requestForm = document.getElementById('requestForm');
if (!requestForm) {
    console.error("ERRO CRÍTICO: O JavaScript não encontrou o formulário 'requestForm' no seu HTML.");
}

// Fluxo 1: Pedir o link de recuperação
document.getElementById('requestForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    console.log("Botão 'Enviar Link' clicado! Tentando falar com o Supabase...");

    const msgElemento = document.getElementById('mensagemSucesso');

    try {
        const email = document.getElementById('resetEmail').value;
        
        const { error } = await supabase.auth.resetPasswordForEmail(email, {
            redirectTo: window.location.origin + '/recuperar.html',
        });

        if (error) {
            console.error("Erro retornado pelo Supabase:", error.message);
            alert("Erro do Supabase: " + error.message);
        } else {
            console.log("Supabase aceitou o pedido!");
            
            // ATUALIZADO: Mostra a mensagem direto na tela sem usar o alert tradicional
            msgElemento.innerText = "Link enviado! Verifique sua caixa de entrada.";
            msgElemento.style.display = "block";

            // Limpa o campo de texto do e-mail pra ficar caprichado
            document.getElementById('resetEmail').value = "";
        }
    } catch (err) {
        console.error("Erro geral no código do Fluxo 1:", err);
    }
});

// Fluxo 2: Definir a nova senha (quando o usuário volta pelo e-mail)
document.getElementById('updateForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    console.log("Botão 'Atualizar Senha' clicado!");

    try {
        const password = document.getElementById('newPassword').value;

        const { error } = await supabase.auth.updateUser({ password });

        if (error) {
            console.error("Erro ao atualizar senha:", error.message);
            alert("Erro ao atualizar: " + error.message);
        } else {
            console.log("Senha updated com sucesso!");
            alert("Senha atualizada com sucesso! Faça login.");
            window.location.href = "index.html";
        }
    } catch (err) {
        console.error("Erro geral no código do Fluxo 2:", err);
    }
});

// Atalho para voltar ao login
document.querySelectorAll(".back-btn").forEach(btn => {
    btn.addEventListener("click", () => window.location.href = "index.html");
});