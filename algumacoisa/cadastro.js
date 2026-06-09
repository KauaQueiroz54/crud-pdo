// Configuração do Supabase (Substitua com as credenciais do seu projeto)
const SUPABASE_URL = "SUA_URL_DO_SUPABASE";
const SUPABASE_ANON_KEY = "SUA_CHAVE_ANON_DO_SUPABASE";

const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Botão para voltar à tela de login
document.getElementById("backToLogin").addEventListener("click", () => {
    window.location.href = "index.html";
});

// Evento de envio do formulário de cadastro
document.getElementById("registerForm").addEventListener("submit", async (e) => {
    e.preventDefault();
document.getElementById("backToLogin").addEventListener("click", () => {
    window.location.href = "index.html";
});

document.getElementById("registerForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("regEmail").value;
    const password = document.getElementById("regPassword").value;

    const { error } = await supabase.auth.signUp({ email, password });

    if (error) {
        alert("Erro ao cadastrar: " + error.message);
    } else {
        alert("Cadastro realizado! Verifique seu e-mail para confirmação se aplicável.");
        window.location.href = "index.html";
    }
});
    const email = document.getElementById("regEmail").value;
    const password = document.getElementById("regPassword").value;

    // Envia os dados para o Supabase criar o usuário
    const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
    });

    if (error) {
        alert("Erro ao cadastrar: " + error.message);
    } else {
        alert("Cadastro realizado com sucesso! Verifique seu e-mail para confirmação.");
        window.location.href = "index.html"; // Retorna para a tela de login
    }
});