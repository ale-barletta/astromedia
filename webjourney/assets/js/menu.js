  // Abre e fecha menu mobile.
  document.addEventListener('DOMContentLoaded', function () {
    var menuButton = document.querySelector('.uil-bars');
    var menuNav = document.querySelector('.menu-nav');
    var closeButton = document.querySelector('.close-button');

    menuButton.addEventListener('click', function () {
      menuNav.classList.toggle('menu-open');
    });

    closeButton.addEventListener('click', function () {
        menuNav.classList.remove('menu-open');
      });
  });

  // Adiciona cor aos menus no scroll.

  document.addEventListener('DOMContentLoaded', function () {
    var menuMobile = document.querySelector('.menu-mobile');
    var menuDesk = document.querySelector('.menu-desk');


    window.addEventListener('scroll', function () {
      if (window.scrollY > 50) {
        menuMobile.classList.add('menu-scrolled');
        menuDesk.classList.add('menu-scrolled');

      } else {
        menuMobile.classList.remove('menu-scrolled');
        menuDesk.classList.remove('menu-scrolled');

      }
    });
  });

  // Rola atÃ© a seÃ§Ã£o e ativa os links.
  document.addEventListener('DOMContentLoaded', function () {
    var menuLinks = document.querySelectorAll('.menu-link');
    var menuMobile = document.querySelector('.menu-mobile');
    var closeButton = document.querySelector('.close-button');

    // Adiciona um ouvinte de eventos de clique a cada link do menu
    menuLinks.forEach(function (link) {
      link.addEventListener('click', function (event) {
        event.preventDefault();

        var targetId = this.getAttribute('href').substring(1);
        var targetSection = document.getElementById(targetId);

        // Calcula a posiÃ§Ã£o de destino com uma folga de 10vh
        var targetPosition = targetSection.offsetTop - (window.innerHeight * 0.1);

        // Scrolle suavemente atÃ© a posiÃ§Ã£o de destino
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });

        // Remove a classe 'active-link' de todos os links
        menuLinks.forEach(function (link) {
          link.classList.remove('active-link');
        });

        // Adiciona a classe 'active-link' apenas ao link clicado
        this.classList.add('active-link');

        // Fecha o menu mobile apÃ³s clicar em um link
        menuMobile.classList.remove('active');
      });
    });

    // Adiciona um ouvinte de eventos de rolagem Ã  janela para destacar o link ativo
    window.addEventListener('scroll', function () {
      var fromTop = window.scrollY + (window.innerHeight * 0.2); // Adiciona a folga de 10vh

      // Itera sobre as seÃ§Ãµes e destaca o link do menu ativo
      menuLinks.forEach(function (link) {
        var section = document.getElementById(link.getAttribute('href').substring(1));

        if (
          section.offsetTop <= fromTop &&
          section.offsetTop + section.offsetHeight > fromTop
        ) {
          // Remove a classe 'active-link' de todos os links
          menuLinks.forEach(function (link) {
            link.classList.remove('active-link');
          });

          // Adiciona a classe 'active-link' apenas ao link correspondente Ã  seÃ§Ã£o ativa
          link.classList.add('active-link');
        }
      });
    });

    // Adiciona um ouvinte de eventos de clique no botÃ£o de fechar do menu mobile
    closeButton.addEventListener('click', function () {
      menuMobile.classList.remove('active');
    });

    // Adiciona um ouvinte de eventos de clique no Ã­cone de menu para mostrar o menu mobile
    document.querySelector('.uil-bars').addEventListener('click', function () {
      menuMobile.classList.add('active');
    });
  });