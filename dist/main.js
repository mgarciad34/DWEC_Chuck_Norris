(()=>{"use strict";function e(){var e=document.getElementById("textoChiste");console.log(e.value);var t=localStorage.getItem("categoria");"random"==t?fetch("https://api.chucknorris.io/jokes/random").then((e=>e.json())).then((t=>{e.innerHTML=t.value})).catch((e=>{console.error("Error al obtener el chiste:",e)})):fetch(`https://api.chucknorris.io/jokes/random?category=${t}`).then((e=>e.json())).then((t=>{e.innerHTML=t.value})).catch((e=>{console.error("Error al obtener el chiste:",e)}))}document.addEventListener("DOMContentLoaded",(function(){e()})),fetch("https://api.chucknorris.io/jokes/categories").then((e=>e.json())).then((e=>{const t=document.getElementById("tablaCategorias");e.forEach((e=>{const o=document.createElement("a");o.href="frase.html",o.target="_blank",o.textContent=e,o.addEventListener("click",(function(){localStorage.setItem("categoria",e)}));const n=document.createElement("br");t.appendChild(o),t.appendChild(n)}))})).catch((e=>{console.error("Error al obtener las categorías:",e)})),e()})();