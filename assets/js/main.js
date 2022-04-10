window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("abajo", window.scrollY>50)
})

//HISTORIA SCROLL REVEAL//

/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle')  
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('show-menu')
    })
}


/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu')
    })
}

window.addEventListener("scroll", function(){
    var showMenu = document.querySelector("div.show-menu");
    showMenu.classList.toggle("down", window.scrollY>50)
})

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__content')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__content, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== NAV MODAL ====================*/

const modalViews = document.querySelectorAll('.nav__modal'),
      modalBtns = document.querySelectorAll('.nav__button'),
      modalCloses = document.querySelectorAll('.nav__modal-close')

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal')
        })
    })
})

modalBtns.forEach((modalBtn, i)=>{
    modalBtn.addEventListener('click', () => {
        modal(i)
    })
})

/*===== SLIDES =====*/

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

function openNav() {
    document.getElementById("myNav").style.width="100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

// Formularios de inscripcion

document.querySelector("#submit").addEventListener("click", () => {
    e.preventDefault();
  
    //INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
    let telefono = "573008768930";
  
    let cliente = document.querySelector("#cliente").value;
    let edad = document.querySelector("#edad").value;
    let servicio = document.querySelector("#servicio").value;
    let telefonoAspirante = document.querySelector('#telefono').value;
    let email = document-querySelector('#email').value;
  
    resp.classList.remove("fail");
    resp.classList.remove("send");
  
    let url = `https://api.whatsapp.com/send?phone=${telefono}&text=
          *Fundacion FAEV*%0A
          *interesado en el curso*%0A%0A
          *nombre:*%0A
          ${cliente}%0A
          *edad:*%0A
          ${edad}%0A
          *curso de interes*%0A
          ${servicio}%0A
          *telefono*%0A
          ${telefonoAspirante}%0A
          *correo*%0A
          ${email}`;
  
    if (cliente === "" || edad === "" || telefonoAspirante === "") {
      resp.classList.add("fail");
      resp.innerHTML = `Faltan algunos datos, ${cliente}`;
      return false;
      }
    resp.classList.remove("fail");
    resp.classList.add("send");
    resp.innerHTML = `Se ha enviado tu solicitud de inscripción, ${cliente}`;
    window.open(url);
  });
  