"use strict";for(var menuLi=document.querySelectorAll(".menu-item"),i=0;i<menuLi.length;i++)menuLi[i].addEventListener("mouseenter",function(e){return hoverRed(e)});for(i=0;i<menuLi.length;i++)menuLi[i].addEventListener("mouseleave",function(e){return hoverWhite(e)});function hoverRed(e){var n=e.target;n.style.background="#232933",n.children[0].style.color="#ffffff"}function hoverWhite(e){var n=e.target;n.style.background="#D7AF47",n.children[0].style.color="#ffffff"}