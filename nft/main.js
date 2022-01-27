
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
  
  });

  var swiper = new Swiper(".mySwiper2", {
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
  });
    document.querySelector('.ham').addEventListener("click",()=>{
    document.querySelector('.nav').classList.toggle('nav-hide');
  
    });

    var thum = document.querySelector('.pop-op') [0];
    var thum1 = document.querySelector('.pop-op') [1];
    var close1 = document.querySelector('.close');
    var md1   = document.querySelector('.modal-box');
    var imb = document.querySelector('#md-img')
    
    thum .onclick = function(){
      md1.style.display="block";
      imb.src=this.src;
    }
    thum1 .onclick = function(){
      md1.style.display="block";
      imb.src=this.src;
    }
    close1.onclick=function(){
      md1.style.display="none";
    }
