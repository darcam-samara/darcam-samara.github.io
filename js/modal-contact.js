"use strict";var openmodal=document.querySelector(".openmodal"),infomodal=document.querySelector(".infomodal"),reviewsmodal=document.querySelector(".reviewsmodal"),salemodal=document.querySelector(".salemodal"),span=document.querySelector(".close"),contactForm=document.querySelector(".contact-page-right__form"),reviewsForm=document.querySelector(".reviews-form"),footerForm=document.querySelector(".footer-form"),saleForm=document.querySelector(".sale-form"),consultationForm=void 0,contactPageForm=void 0;contactForm.addEventListener("submit",function(e){return submitForm(e)}),reviewsForm.addEventListener("submit",function(e){return submitForm(e)}),footerForm.addEventListener("submit",function(e){return submitForm(e)}),saleForm.addEventListener("submit",function(e){return submitForm(e)});var openContactForm=function(e){window[e].style.display="block"},closeContactForm=function(e){window[e].style.display="none"};window.onclick=function(e){e.target==openmodal&&(openmodal.style.display="none"),e.target==infomodal&&(infomodal.style.display="none"),e.target==reviewsmodal&&(reviewsmodal.style.display="none"),e.target==salemodal&&(salemodal.style.display="none")};var submitEmail=function(e,o){var t=window.atob("aHR0cHM6Ly9nZXRzaW1wbGVmb3JtLmNvbS9tZXNzYWdlcz9mb3JtX2FwaV90b2tlbj05MDE4YjYwZTNjMzAwYTcxOWQwY2IxMDU0MzllODQwNA=="),n={"sale-form":"name="+o.name+"&phone="+o.phone,"footer-form":"name="+o.name+"&phone="+o.phone,"consultation-form":"name="+o.name+"&phone="+o.phone,"contact-page-right__form":"name="+o.name+"&phone="+o.phone,"reviews-form":"name="+o.name+"&phone="+o.phone+"&description="+o.description,"contact-page-form":"name="+o.name+"&phone="+o.phone+"&description="+o.description};fetch(""+t,{credentials:"same-origin",mode:"no-cors",method:"POST",headers:{"Content-type":"application/x-www-form-urlencoded; charset=UTF-8"},body:n[e]}).catch(function(e){return console.log(e)})},submitSms=function(e,o){var t=window.atob("aHR0cHM6Ly9zbXMucnUvc21zL3NlbmQ/YXBpX2lkPUIxNTY2OUQzLTUyNjYtQjVDOC0zODhFLUEwNjRDQTZCQzJDNQ=="),n=window.atob("NzkyNzAwOTY2MTY="),a={"sale-form":"to="+n+"&msg=Заявка на звонок: "+o.name+" "+o.phone+"&json=1","footer-form":"to="+n+"&msg=Заявка на звонок: "+o.name+" "+o.phone+"&json=1","consultation-form":"to="+n+"&msg=Заявка на звонок: "+o.name+" "+o.phone+"&json=1","contact-page-right__form":"to="+n+"&msg=Заявка на звонок: "+o.name+" "+o.phone+"&json=1","reviews-form":"to="+n+"&msg=На почту пришло письмо с сайта.&json=1","contact-page-form":"to="+n+"&msg=На почту пришло письмо с сайта.&json=1"};fetch(""+t,{credentials:"same-origin",mode:"no-cors",method:"POST",headers:{"Content-type":"application/x-www-form-urlencoded; charset=UTF-8"},body:a[e]}).catch(function(e){return console.log(e)})},clearModalForm=function(e){e[0].value="",e[1].value="",e[2].value=""},closeInfoMessage=function(){setTimeout(function(){infomodal.style.display="none"},5e3)},submitForm=function(e){e.preventDefault();var o=e.target.classList[0],t={"reviews-form":reviewsForm,"contact-page-right__form":contactForm,"consultation-form":consultationForm,"footer-form":footerForm,"contact-page-form":contactPageForm,"sale-form":saleForm}[o],n=t[0].value,a=t[1].value,r=t[2].value;submitEmail(o,{name:n,phone:a,description:r}),submitSms(o,{name:n,phone:a,description:r}),console.log(n),console.log(a),closeContactForm("openmodal"),closeContactForm("reviewsmodal"),closeContactForm("salemodal"),clearModalForm(t),openContactForm("infomodal"),closeInfoMessage()},getSale=function(){return localStorage.getItem("time")},setSale=function(){localStorage.setItem("time",Date.now())},startTime=getSale(),endTime=Date.now(),timer=3e5,resaultTime=endTime-startTime>timer;(null==getSale()||resaultTime)&&setSale(),window.screen.availWidth>=768&&resaultTime&&setTimeout(function(){salemodal.style.display="block"},7e3);