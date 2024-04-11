
window.onload = function() {

  const registros = 25;

  
  $.getJSON('carrega_dados.php',{}, function(retorno){
      
    for(let i=0; i < registros; i++){
            
      if(retorno[i]['selecionado'] == "n"){
        
        // Seleciona o elemento body
        var elementoPai = document.getElementById("conteudo_itens");

        // Cria um novo elemento div
        var div1 = document.createElement("div");

        // Define o atributo class do novo elemento
        div1.setAttribute("class", "col-lg-4 col-md-6 d-flex align-items-stretch");
        div1.setAttribute("data-aos", "zoom-in");
        div1.setAttribute("data-aos-delay", "100");
        elementoPai.appendChild(div1);

        // Cria div2
        var div2 = document.createElement("div");
        div2.setAttribute("class", "icon-box iconbox-blue");
        div1.appendChild(div2);

        // Cria div3
        var div3 = document.createElement("div");
        div3.setAttribute("class", "icon");
        div2.appendChild(div3);

        // Cria img
        var img = document.createElement("img");
        img.setAttribute("src", retorno[i]['img']);
        div3.appendChild(img);

        // Cria H4
        var h4 = document.createElement("h4");
        div2.appendChild(h4);

        // Cria titulo + link
        var aa = document.createElement("a");
        aa.setAttribute("id", retorno[i]['id']);
        aa.setAttribute("class", "item");
        aa.setAttribute("href", "   javascript:clicou("+retorno[i]['id']+ ")");
        aa.textContent = retorno[i]['titulo'];
        h4.appendChild(aa);

        // Cria descricao
        var desc = document.createElement("p");
        desc.textContent = retorno[i]['descricao'];
        div2.appendChild(desc);

      }
    }
  });

};




function clicou(id) {
  var escolha = id;
  window.location.href = 'selecao_presente.html?id=' + escolha;
}







/*   Funcionando com ALERT
function clicou(id)
{
  var nome = prompt("Para escolher este item, por favor, escrever seu nome abaixo.");
  var email = prompt("Por favor, digite seu E-MAIL:");

  if(nome == "" || nome == null){
    alert("CANCELADO. (escreva seu nome e clique em OK)");
  }else{

    let id_chosen = id;
    let nome_chosen = nome;
    let email_chosen = email;

    $.getJSON('carrega_dados.php',{}, function(retorno){
        
      let cont = 0;
      for(let i=0; i < 4; i++){
        if(retorno[i]['id'] == id){
          if (retorno[i]['selecionado'] == "s"){
            alert ("por favor, escolha outro.");
            cont++;
            break;
          }
        }
      }

      if(cont == 0){
        $.getJSON('salva_selecao.php',{id: id_chosen, quem_selecionou: nome_chosen, email: email_chosen}, function(retorno){
          console.log(retorno);
          
        });
      }
    });
    alert("MUITO OBRIGADO, " + nome + "!!! Estamos muito felizes com seu carinho!");
    window.location.reload();
  }
}
*/








/*
const btn = document.getElementById("btn_sub");
btn.addEventListener("click", function(e) {
  e.preventDefault();
  console.log("btnnn");
  
  let id = "1";
  let nome = "to escolhendo coisas!";

  $.getJSON('carrega_dados.php',{}, function(retorno){
      
    let cont = 0;
    for(let i=0; i < 4; i++){
      if(retorno[i]['id'] == id){
        if (retorno[i]['selecionado'] == "s"){
          alert ("por favor, escolha outro.");
          cont++;
          break;
        }
      }
    }

    if(cont == 0){
      $.getJSON('salva_selecao.php',{id: id, quem_selecionou: nome}, function(retorno){
        console.log(retorno);
      });
      alert ("foi!!!");

    }

  });


  
});

*/




















/**
* Template Name: MyResume - v4.10.0
* Template URL: https://bootstrapmade.com/free-html-bootstrap-template-my-resume/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos,
      behavior: 'smooth'
    })
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('body').classList.toggle('mobile-nav-active')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let body = select('body')
      if (body.classList.contains('mobile-nav-active')) {
        body.classList.remove('mobile-nav-active')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Preloader
   */
  let preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove()
    });
  }

  /**
   * Hero type effect
   */
  const typed = select('.typed')
  if (typed) {
    let typed_strings = typed.getAttribute('data-typed-items')
    typed_strings = typed_strings.split(',')
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }

  /**
   * Skills animation
   */
  let skilsContent = select('.skills-content');
  if (skilsContent) {
    new Waypoint({
      element: skilsContent,
      offset: '80%',
      handler: function(direction) {
        let progress = select('.progress .progress-bar', true);
        progress.forEach((el) => {
          el.style.width = el.getAttribute('aria-valuenow') + '%'
        });
      }
    })
  }

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        portfolioIsotope.on('arrangeComplete', function() {
          AOS.refresh()
        });
      }, true);
    }

  });

  /**
   * Initiate portfolio lightbox 
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  /**
   * Initiate portfolio details lightbox 
   */
  const portfolioDetailsLightbox = GLightbox({
    selector: '.portfolio-details-lightbox',
    width: '90%',
    height: '90vh'
  });

  /**
   * Portfolio details slider
   */
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

  /**
   * Initiate Pure Counter 
   
  new PureCounter();
*/
})()