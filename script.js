'use strict';
((d)=>{
  const $btnMenu = d.querySelector(".menu-btn"),
    $menu = d.querySelector(".menu");

  $btnMenu.addEventListener("click", event =>{
    $menu.classList.toggle("is-active");
  });

  $menu.addEventListener("click", event =>{
    if(event.target.matches(".menu a")) $menu.classList.remove("is-active");
  });
})(document);