"use strict";var slideIndex=1,slideTimer=1e4;showSlides(slideIndex);var next=document.querySelector(".next"),prev=document.querySelector(".prev");function nextSlide(e){showSlides(slideIndex+=e)}next.addEventListener("click",function(){return nextSlide(1)}),prev.addEventListener("click",function(){return nextSlide(-1)});var dots=document.querySelector(".dots");function currentSlide(e){var t=+e.target.getAttribute("data-dot");showSlides(slideIndex=t)}function showSlides(e){var t=document.querySelectorAll(".slider__item"),d=document.querySelectorAll(".dot");e>t.length&&(slideIndex=1),e<1&&(slideIndex=t.length);for(var n=0;n<t.length;n++)t[n].style.display="none";for(var i=0;i<d.length;i++)d[i].classList.remove("dot-active");t[slideIndex-1].style.display="block",d[slideIndex-1].classList.add("dot-active")}dots.addEventListener("click",function(e){return currentSlide(e)}),setTimeout(function e(){nextSlide(1),setTimeout(e,slideTimer)},slideTimer);