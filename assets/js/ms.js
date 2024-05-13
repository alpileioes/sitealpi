/* menu*/ 
let menu = document.querySelector('.menulinks');
let menuDois = document.querySelector('#menuBtn');
menuDois.onclick = () =>{
    menu.classList.toggle('active');
} 
/*scroll */
window.onscroll = () =>{
  let topoSite = document.querySelector("head");
  topoSite.classList.toggle('sticky' , window.scrollY > 100);
}
/* slide destaque*/ 
var swiper = new Swiper(".msSlider", {
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  /*inicio contador*/
  let campoConta = document.querySelectorAll('.numero');
  let  intervalo = 1000;
  campoConta.forEach((campoConta) =>{
    let valorInicial = 0;
    let finalValor = parseInt(campoConta.getAttribute("msflix-c-valor"));
    let duracao = Math.floor(intervalo/finalValor);
    let contador = setInterval(function(){
      valorInicial += 1;
      campoConta.textContent = valorInicial;
      if(valorInicial == finalValor){
        clearInterval(contador);
      }
  }, duracao);
  });
  /*fim contador */
  /*slide depoimentos */
  var swiper = new Swiper(".meusDepoimentos", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },
    breakpoints:{
      640:{
        slidesPerView :1,
        spaceBetween:10,
      },
      768:{
        slidesPerView :2,
        spaceBetween:40,
      },
      1024:{
        slidesPerView :3,
        spaceBetween:50,
      },
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
