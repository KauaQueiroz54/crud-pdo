// ==========================================
// 1. NAVEGAÇÃO / REDIRECIONAMENTO
// ==========================================

// Redireciona para o cadastro através do botão com a classe correta
const createAccountBtn = document.querySelector(".create-account-button");
if (createAccountBtn) {
    createAccountBtn.addEventListener("click", () => {
        window.location.href = "cadastro.html";
    });
}

// ==========================================
// 2. LOGIN COM EMAIL E SENHA
// ==========================================
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        try {
            const { data, error } = await supabase.auth.signInWithPassword({ 
                email, 
                password 
            });

            if (error) {
                console.error("Erro retornado pelo Supabase:", error.message);
                alert("Erro no login: " + error.message);
            } else {
                console.log("Login efetuado com sucesso!", data);
                window.location.href = "dashboard.html";
            }
        } catch (err) {
            console.error("Erro crítico no fluxo de login:", err);
            alert("Ocorreu um erro ao tentar fazer login. Verifique o console.");
        }
    });
}

// ==========================================
// 3. LOGIN COM O GOOGLE (OAuth)
// ==========================================
const googleLoginBtn = document.getElementById('googleLogin');
if (googleLoginBtn) {
    googleLoginBtn.addEventListener('click', async () => {
        console.log("Iniciando fluxo de autenticação do Google...");
        
        try {
            const { error } = await supabase.auth.signInWithOAuth({
                provider: 'google',
                options: {
                    // ALTERADO: Agora redireciona exatamente para a página bemvindo.html
                    redirectTo: window.location.origin + '/bemvindo.html' 
                }
            });

            if (error) {
                console.error("Erro retornado pelo Google OAuth:", error.message);
                alert("Erro Google Auth: " + error.message);
            }
        } catch (err) {
            console.error("Erro crítico no fluxo do Google:", err);
            alert("Não foi possível conectar com o Google. Verifique suas configurações.");
        }
    });
}