document.addEventListener('DOMContentLoaded', function () {
    var contactForm = document.getElementById('contactForm');

    // Adiciona uma mÃ¡scara ao campo de telefone
    var phoneInput = document.getElementById('phone');
    var phoneMask = new IMask(phoneInput, {
      mask: '(00) 00000-0000'
    });
    contactForm.addEventListener('submit', function (event) {
      // Adicione aqui a lÃ³gica para processar o envio do formulÃ¡rio, se necessÃ¡rio
      event.preventDefault(); // Evita o envio real do formulÃ¡rio para este exemplo
      
      // Obtenha os dados do formulÃ¡rio
      var formData = new FormData(contactForm);

      // FaÃ§a uma solicitaÃ§Ã£o AJAX para o arquivo PHP
      var xhr = new XMLHttpRequest();
      xhr.open('POST', '../assets/php/processa_formulario.php', true);

      // Configura o evento de conclusÃ£o da solicitaÃ§Ã£o
      xhr.onload = function () {
        if (xhr.status === 200) {
          // Verifica se o PHP retornou um sucesso (pode ajustar isso com base no retorno do seu PHP)
          if (xhr.responseText.trim() === 'success') {
            alert('FormulÃ¡rio enviado!');
          } else {
            alert('Ops! Algo deu errado, tente novamente!');
          }
        }
      };

      // Envie os dados do formulÃ¡rio
      xhr.send(formData);
    });
});