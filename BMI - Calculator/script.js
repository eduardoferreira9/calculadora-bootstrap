function calculadora() {
    let peso = parseFloat(document.getElementById('peso').value);
    let altura = parseFloat(document.getElementById('altura').value);
    let resultado = document.getElementById('resultado_final');
    let triangulo = document.getElementById('triangulo');

    if (isNaN(peso) || isNaN(altura) || altura <= 0 || peso <= 0) {
        resultado.textContent = 'Por favor, insira valores válidos para peso e altura.';
        triangulo.style.left = '0%'; // Posição padrão em caso de erro
        triangulo.style.borderTopColor = '#FF6D6D'; // Cor padrão para erro
        return;
    }
    
    let alturaEmMetros = altura / 100;
    let imc = peso / (alturaEmMetros ** 2);

    resultado.textContent = `O seu IMC é de ${imc.toFixed(2)}`;
    
    let posicao = '0%'; // Posição padrão
    let cor = '#FF6D6D'; // Cor padrão para erro

    if (imc < 18.5) {
        posicao = '10%';
        cor = '#6C63FF'; //Magreza
    } else if (imc >= 18.5 && imc < 24.9) { //Saudável
        posicao = '30%';
        cor = '#6fb157';
    } else if (imc >= 25 && imc < 29.9) { //Acima do peso
        posicao = '50%';
        cor = '#fffd91';
    } else if (imc >= 30 && imc < 34.9) { //Obesidade Grau 1
        posicao = '70%';
        cor = '#f3cc79';
    } else if (imc >= 35) { //Obesidade Grau 2
        posicao = '85%';
        cor = '#f87b7b';
    }

    triangulo.style.left = posicao;
    triangulo.style.borderTopColor = cor;
}

// Inicializar a posição do triângulo
document.addEventListener('DOMContentLoaded', function() {
    const sr = ScrollReveal({
        duration: 1000, 
        delay: 200,
        easing: 'ease', 
        distance: '50px',
    });

    sr.reveal('.imagem', {
        origin: 'top',
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.custom-button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove a classe 'pressed' de todos os botões
            buttons.forEach(btn => btn.classList.remove('pressed'));

            // Adiciona a classe 'pressed' ao botão clicado
            button.classList.add('pressed');
        });
    });
});
