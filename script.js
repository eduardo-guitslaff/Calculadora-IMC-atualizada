document.querySelector('.imc-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário e recarregamento da página
  
    const peso = parseFloat(document.querySelector('.peso').value); // Obtém o peso e converte para número
    const altura = parseFloat(document.querySelector('.altura').value); // Obtém a altura e converte para número
  
    if (peso > 0 && altura > 0) { // Verifica se os valores inseridos são válidos
      const imc = (peso / (altura * altura)).toFixed(2); // Calcula o IMC com 2 casas decimais
      let classificacao = ''; // Variável para armazenar a classificação do IMC
  
      // Define a classificação do IMC com base no valor calculado
      if (imc < 18.5) {
        classificacao = 'Abaixo do peso';
      } else if (imc >= 18.5 && imc <= 24.9) {
        classificacao = 'Peso normal';
      } else if (imc >= 25 && imc <= 29.9) {
        classificacao = 'Sobrepeso';
      } else {
        classificacao = 'Obesidade';
      }
  
              // Exibe o resultado e a classificação no parágrafo com id 'resultado'
      document.getElementById('resultado').textContent = `Seu IMC é ${imc} (${classificacao}).`;
      resultado.classList.add('res');
    } else {
              // Caso valores inválidos sejam inseridos
      document.getElementById('resultado').textContent = 'Por favor, insira valores válidos.';
  
    }
  });
              // Adiciona um evento para o botão de "Limpar"
      document.querySelector('.btn-limpar').addEventListener('click',function(){
              // Limpa os campos de entrada
      document.querySelector('.peso').value = '';
      document.querySelector('.altura').value = '';
              // Limpa o resultado do IMC
      document.getElementById('resultado').textContent = '';
              // Remove qualquer classe de cor do resultado (caso tenha sido aplicado)
      document.getElementById('resultado').classList.remove('res');
  
      });
  // Função para exibir/ocultar a seção de FAQ
      function toggleFAQ() {
              const faqSection = document.querySelector('.faq-section');
              faqSection.style.display = (faqSection.style.display === 'none' || faqSection.style.display === '') ? 'block' : 'none';
          }
  