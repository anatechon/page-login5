document.addEventListener('DOMContentLoaded', function() {
    createStars();

    document.getElementById('login-form').addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();
        const errorMessage = document.getElementById('error-message');

        // Verifica se os campos estão preenchidos
        if (username === '' || password === '') {
            errorMessage.textContent = 'Por favor, preencha o nome de usuário e a senha.';
            errorMessage.style.display = 'block';
            return;
        }

        // Validação da senha
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{6,}$/;
        if (!passwordRegex.test(password)) {
            errorMessage.textContent = 'A senha deve ter pelo menos 6 caracteres, com um número, uma letra maiúscula e um símbolo.';
            errorMessage.style.display = 'block';
            return;
        }

        // Limpa a mensagem de erro se os campos estiverem preenchidos
        errorMessage.textContent = '';
        errorMessage.style.display = 'none';

        const button = document.getElementById('login-button');
        button.classList.add('active');

        setTimeout(() => {
            button.classList.remove('active');
            alert('Login simulado!');
        }, 1000);
    });

    function createStars() {
        const starsContainer = document.querySelector('.stars');
        const numberOfStars = 100;

        for (let i = 0; i < numberOfStars; i++) {
            const star = document.createElement('div');
            star.classList.add('star');

            // Posição aleatória
            star.style.top = `${Math.random() * 100}%`;
            star.style.left = `${Math.random() * 100}%`;

            // Tamanho aleatório
            const size = Math.random() * 6 + 4;
            star.style.fontSize = `${size}px`;

            // Duração da animação aleatória
            star.style.animationDuration = `${Math.random() * 2 + 1}s`;

            starsContainer.appendChild(star);
        }
    }
});
