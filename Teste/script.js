
function handleLoginForm() {
    // pega o form
    const loginForm = document.getElementById("loginForm")

    loginForm.addEventListener("submit", function (event) {
        // faz com que a página não seja recarregada ao apertar o botão
        event.preventDefault();
        const loginBase = 'gabriel123'
        const senha_base = '1234'

        const login = document.getElementById("loginInput").value
        const password = document.getElementById("passwordInput").value

        // verifica se os inputs estão preenchidos
        if (!login) {
            mostrarAviso('Digite seu login')
            return
        }

        if (!password) {
            mostrarAviso('Digite sua senha')
            return
        }

        // verifica se os inputs estão corretos
        if (login !== loginBase) {
            mostrarAviso('Login inválido')
            return
        }

        if (password !== senha_base) {
            mostrarAviso('Senha inválida')
            return
        }



        // manda o usuário para outra tela (home.html)
        location.href = "http://127.0.0.1:5500/Teste/home.html"
    })
}

function mostrarAviso(mensagem) {
    const message = document.getElementById("message")
    const messageDiv = document.getElementById("message-container")

    message.innerHTML = mensagem
    messageDiv.style.display = 'inherit'

    setTimeout(() => {
        messageDiv.style.display = 'none'
    }, 2000)

}


function handleLoginFormSimples() {
    const loginForm = document.getElementById("loginForm")

    loginForm.addEventListener("submit", function (event) {
        // faz com que a página não seja recarregada ao apertar o botão
        event.preventDefault();
        // manda o usuário para outra tela (home.html)
        location.href = "http://127.0.0.1:5500/Teste/home.html"
    })
}

function main() {
    // sem validar input
    // handleLoginFormSimples()

    //validando input
    // handleLoginForm()
}
main()