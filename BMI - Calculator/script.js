function calculadora() {
    let peso = parseFloat(document.getElementById('peso').value);
    let altura = parseFloat(document.getElementById('altura').value);
    let resultado = document.getElementById('resultado_final');

    if (isNaN(peso) || isNaN(altura) || altura <= 0 || peso <= 0) {
        resultado.textContent = 'Por favor, insira valores válidos para peso e altura.';
        return;
    }
    
    let alturaEmMetros = altura / 100;
    let imc = peso / (alturaEmMetros ** 2);
    

    resultado.textContent = `O seu IMC é de ${imc.toFixed(2)}`;
}


document.addEventListener('DOMContentLoaded', function() {
    const sr = ScrollReveal({
        duration: 1000, 
        delay: 200,
        easing: 'ease', 
        distance: '50px',
    });
    
    sr.reveal('.coluna-esquerda', {
        origin: 'bottom',
    })

    sr.reveal('.imagem', {
        origin: 'top',
    })
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
