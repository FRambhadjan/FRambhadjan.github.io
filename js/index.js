
const profileDark = document.querySelector(".profile-img-dark");
const profileLight = document.querySelector(".profile-img-light");

profileDark.addEventListener('click', function () {
  window.location.href = "../profiel.html";
})

profileLight.addEventListener('click', function () {
  window.location.href = "../profiel.html";
})

window.onscroll = function () { scrollFunction(), scrollFunction2() };

function scrollFunction() {
  if (document.body.scrollTop > 650 || document.documentElement.scrollTop > 650) {
    document.getElementById("nav-bar").style.top = "0";
    document.getElementById("sub-title-PVA").style.top = "0px";
    document.getElementById("sub-title-PVA").style.animation = "fadeIn 1.5s forwards";

    document.getElementById("sub-title-content-animation-unit1").style.top = "0px";
    document.getElementById("sub-title-content-animation-unit1").style.animation = "fadeIn 2s forwards";
    document.getElementById("sub-title-content-animation-unit1").style.animationDelay = "0.5s";

    document.getElementById("sub-title-content-animation-unit1b").style.top = "0px";
    document.getElementById("sub-title-content-animation-unit1b").style.animation = "fadeIn 2s forwards";
    document.getElementById("sub-title-content-animation-unit1b").style.animationDelay = "0.5s";

    document.getElementById("sub-title-content-animation-unit1b-href").style.animation = "fadeInHref 2s forwards";
    document.getElementById("sub-title-content-animation-unit1b-href").style.animationDelay = "0.5s";

    document.getElementById("sub-title-content-animation-unit2").style.top = "0px";
    document.getElementById("sub-title-content-animation-unit2").style.animation = "fadeIn 2s forwards";
    document.getElementById("sub-title-content-animation-unit2").style.animationDelay = "0.7s";

    document.getElementById("sub-title-content-animation-unit2b").style.top = "0px";
    document.getElementById("sub-title-content-animation-unit2b").style.animation = "fadeIn 2s forwards";
    document.getElementById("sub-title-content-animation-unit2b").style.animationDelay = "0.7s";

    document.getElementById("sub-title-content-animation-unit2b-href").style.animation = "fadeInHref 2s forwards";
    document.getElementById("sub-title-content-animation-unit2b-href").style.animationDelay = "0.5s";

    document.getElementById("sub-title-content-animation-unit3").style.top = "0px";
    document.getElementById("sub-title-content-animation-unit3").style.animation = "fadeIn 2s forwards";
    document.getElementById("sub-title-content-animation-unit3").style.animationDelay = "0.9s";

    document.getElementById("sub-title-content-animation-unit3b").style.top = "0px";
    document.getElementById("sub-title-content-animation-unit3b").style.animation = "fadeIn 2s forwards";
    document.getElementById("sub-title-content-animation-unit3b").style.animationDelay = "0.9s";

    document.getElementById("sub-title-content-animation-unit3b-href").style.animation = "fadeInHref 2s forwards";
    document.getElementById("sub-title-content-animation-unit3b-href").style.animationDelay = "0.5s";

  } else {
    document.getElementById("nav-bar").style.top = "-50px";
    document.getElementById("sub-title-PVA").style.animation = "-50px";
    document.getElementById("sub-title-PVA").style.animation = "fadeOut 2s forwards";

    document.getElementById("sub-title-content-animation-unit1").style.animation = "-50px";
    document.getElementById("sub-title-content-animation-unit1").style.animation = "fadeOut 2s forwards";

    document.getElementById("sub-title-content-animation-unit1b").style.animation = "-50px";
    document.getElementById("sub-title-content-animation-unit1b").style.animation = "fadeOut 2s forwards";

    document.getElementById("sub-title-content-animation-unit1b-href").style.animation = "-50px";
    document.getElementById("sub-title-content-animation-unit1b-href").style.animation = "fadeOutHref 2s forwards";

    document.getElementById("sub-title-content-animation-unit2").style.animation = "-50px";
    document.getElementById("sub-title-content-animation-unit2").style.animation = "fadeOut 2s forwards";

    document.getElementById("sub-title-content-animation-unit2b").style.animation = "-50px";
    document.getElementById("sub-title-content-animation-unit2b").style.animation = "fadeOut 2s forwards";

    document.getElementById("sub-title-content-animation-unit2b-href").style.animation = "fadeOutHref 2s forwards";
    document.getElementById("sub-title-content-animation-unit2b-href").style.animationDelay = "0.5s";

    document.getElementById("sub-title-content-animation-unit3").style.animation = "-50px";
    document.getElementById("sub-title-content-animation-unit3").style.animation = "fadeOut 2s forwards";

    document.getElementById("sub-title-content-animation-unit3b").style.animation = "-50px";
    document.getElementById("sub-title-content-animation-unit3b").style.animation = "fadeOut 2s forwards";

    document.getElementById("sub-title-content-animation-unit3b-href").style.animation = "fadeOutHref 2s forwards";
    document.getElementById("sub-title-content-animation-unit3b-href").style.animationDelay = "0.5s";
  }
}

function scrollFunction2() {
  if (document.body.scrollTop > 2500 || document.documentElement.scrollTop > 2500) {


    document.getElementById("sub-title-project").style.top = "0px";
    document.getElementById("sub-title-project").style.animation = "fadeIn 1.5s forwards";

    document.getElementById("project-title-content-animation-unit1").style.top = "0px";
    document.getElementById("project-title-content-animation-unit1").style.animation = "fadeIn 2s forwards";
    document.getElementById("project-title-content-animation-unit1").style.animationDelay = "0.5s";
    
    document.getElementById("project-title-content-animation-unit1b").style.top = "0px";
    document.getElementById("project-title-content-animation-unit1b").style.animation = "fadeIn 2s forwards";
    document.getElementById("project-title-content-animation-unit1b").style.animationDelay = "0.5s";

    document.getElementById("project-title-content-animation-unit1b-href").style.animation = "fadeInHref 2s forwards";
    document.getElementById("project-title-content-animation-unit1b-href").style.animationDelay = "0.5s";

    document.getElementById("project-title-content-animation-unit1c-href").style.animation = "fadeInHref 2s forwards";
    document.getElementById("project-title-content-animation-unit1c-href").style.animationDelay = "0.5s";

    document.getElementById("project-title-content-animation-unit2").style.top = "0px";
    document.getElementById("project-title-content-animation-unit2").style.animation = "fadeIn 2s forwards";
    document.getElementById("project-title-content-animation-unit2").style.animationDelay = "0.7s";

    document.getElementById("project-title-content-animation-unit2b").style.top = "0px";
    document.getElementById("project-title-content-animation-unit2b").style.animation = "fadeIn 2s forwards";
    document.getElementById("project-title-content-animation-unit2b").style.animationDelay = "0.7s";

    document.getElementById("project-title-content-animation-unit2b-href").style.animation = "fadeInHref 2s forwards";
    document.getElementById("project-title-content-animation-unit2b-href").style.animationDelay = "0.7s";

    document.getElementById("project-title-content-animation-unit2c-href").style.animation = "fadeInHref 2s forwards";
    document.getElementById("project-title-content-animation-unit2c-href").style.animationDelay = "0.7s";

    document.getElementById("project-title-content-animation-unit3").style.top = "0px";
    document.getElementById("project-title-content-animation-unit3").style.animation = "fadeIn 2s forwards";
    document.getElementById("project-title-content-animation-unit3").style.animationDelay = "0.9s";

    document.getElementById("project-title-content-animation-unit3b").style.top = "0px";
    document.getElementById("project-title-content-animation-unit3b").style.animation = "fadeIn 2s forwards";
    document.getElementById("project-title-content-animation-unit3b").style.animationDelay = "0.9s";

    document.getElementById("project-title-content-animation-unit3b-href").style.animation = "fadeInHref 2s forwards";
    document.getElementById("project-title-content-animation-unit3b-href").style.animationDelay = "0.9s";

    document.getElementById("project-title-content-animation-unit3c-href").style.animation = "fadeInHref 2s forwards";
    document.getElementById("project-title-content-animation-unit3c-href").style.animationDelay = "0.9s";

    document.getElementById("project-title-content-animation-unit4").style.top = "0px";
    document.getElementById("project-title-content-animation-unit4").style.animation = "fadeIn 2s forwards";
    document.getElementById("project-title-content-animation-unit4").style.animationDelay = "1.1s";
    
    document.getElementById("project-title-content-animation-unit4b").style.top = "0px";
    document.getElementById("project-title-content-animation-unit4b").style.animation = "fadeIn 2s forwards";
    document.getElementById("project-title-content-animation-unit4b").style.animationDelay = "1.1s";

    document.getElementById("project-title-content-animation-unit4b-href").style.animation = "fadeInHref 2s forwards";
    document.getElementById("project-title-content-animation-unit4b-href").style.animationDelay = "1.1s";

    document.getElementById("project-title-content-animation-unit4c-href").style.animation = "fadeInHref 2s forwards";
    document.getElementById("project-title-content-animation-unit4c-href").style.animationDelay = "1.1s";

    document.getElementById("project-title-content-animation-unit5").style.top = "0px";
    document.getElementById("project-title-content-animation-unit5").style.animation = "fadeIn 2s forwards";
    document.getElementById("project-title-content-animation-unit5").style.animationDelay = "1.3s";
    
    document.getElementById("project-title-content-animation-unit5b").style.top = "0px";
    document.getElementById("project-title-content-animation-unit5b").style.animation = "fadeIn 2s forwards";
    document.getElementById("project-title-content-animation-unit5b").style.animationDelay = "1.3s";

    document.getElementById("project-title-content-animation-unit5b-href").style.animation = "fadeInHref 2s forwards";
    document.getElementById("project-title-content-animation-unit5b-href").style.animationDelay = "1.3s";

    document.getElementById("project-title-content-animation-unit5c-href").style.animation = "fadeInHref 2s forwards";
    document.getElementById("project-title-content-animation-unit5c-href").style.animationDelay = "1.3s";

    document.getElementById("project-title-content-animation-unit6").style.top = "0px";
    document.getElementById("project-title-content-animation-unit6").style.animation = "fadeIn 2s forwards";
    document.getElementById("project-title-content-animation-unit6").style.animationDelay = "1.5s";
    
    document.getElementById("project-title-content-animation-unit6b").style.top = "0px";
    document.getElementById("project-title-content-animation-unit6b").style.animation = "fadeIn 2s forwards";
    document.getElementById("project-title-content-animation-unit6b").style.animationDelay = "1.5s";

    document.getElementById("project-title-content-animation-unit6b-href").style.animation = "fadeInHref 2s forwards";
    document.getElementById("project-title-content-animation-unit6b-href").style.animationDelay = "1.5s";

    document.getElementById("project-title-content-animation-unit6c-href").style.animation = "fadeInHref 2s forwards";
    document.getElementById("project-title-content-animation-unit6c-href").style.animationDelay = "1.5s";

    console.log('2')

  } else {

    document.getElementById("sub-title-project").style.animation = "-50px";
    document.getElementById("sub-title-project").style.animation = "fadeOut 2s forwards";

    document.getElementById("project-title-content-animation-unit1").style.animation = "-50px";
    document.getElementById("project-title-content-animation-unit1").style.animation = "fadeOut 2s forwards";

    document.getElementById("project-title-content-animation-unit1b").style.animation = "-50px";
    document.getElementById("project-title-content-animation-unit1b").style.animation = "fadeOut 2s forwards";

    document.getElementById("project-title-content-animation-unit1b-href").style.animation = "-50px";
    document.getElementById("project-title-content-animation-unit1b-href").style.animation = "fadeOutHref 2s forwards";

    document.getElementById("project-title-content-animation-unit1c-href").style.animation = "-50px";
    document.getElementById("project-title-content-animation-unit1c-href").style.animation = "fadeOutHref 2s forwards";

    document.getElementById("project-title-content-animation-unit2").style.animation = "-50px";
    document.getElementById("project-title-content-animation-unit2").style.animation = "fadeOut 2s forwards";

    document.getElementById("project-title-content-animation-unit2b").style.animation = "-50px";
    document.getElementById("project-title-content-animation-unit2b").style.animation = "fadeOut 2s forwards";

    document.getElementById("project-title-content-animation-unit2b-href").style.animation = "fadeOutHref 2s forwards";
    document.getElementById("project-title-content-animation-unit2b-href").style.animationDelay = "0.5s";

    document.getElementById("project-title-content-animation-unit2c-href").style.animation = "fadeOutHref 2s forwards";
    document.getElementById("project-title-content-animation-unit2c-href").style.animationDelay = "0.5s";

    document.getElementById("project-title-content-animation-unit3").style.animation = "-50px";
    document.getElementById("project-title-content-animation-unit3").style.animation = "fadeOut 2s forwards";

    document.getElementById("project-title-content-animation-unit3b").style.animation = "-50px";
    document.getElementById("project-title-content-animation-unit3b").style.animation = "fadeOut 2s forwards";

    document.getElementById("project-title-content-animation-unit3b-href").style.animation = "fadeOutHref 2s forwards";
    document.getElementById("project-title-content-animation-unit3b-href").style.animationDelay = "0.5s";

    document.getElementById("project-title-content-animation-unit3c-href").style.animation = "fadeOutHref 2s forwards";
    document.getElementById("project-title-content-animation-unit3c-href").style.animationDelay = "0.5s";

    document.getElementById("project-title-content-animation-unit4").style.animation = "-50px";
    document.getElementById("project-title-content-animation-unit4").style.animation = "fadeOut 2s forwards";

    document.getElementById("project-title-content-animation-unit4b").style.animation = "-50px";
    document.getElementById("project-title-content-animation-unit4b").style.animation = "fadeOut 2s forwards";

    document.getElementById("project-title-content-animation-unit4b-href").style.animation = "-50px";
    document.getElementById("project-title-content-animation-unit4b-href").style.animation = "fadeOutHref 2s forwards";

    document.getElementById("project-title-content-animation-unit4c-href").style.animation = "-50px";
    document.getElementById("project-title-content-animation-unit4c-href").style.animation = "fadeOutHref 2s forwards";

    document.getElementById("project-title-content-animation-unit5").style.animation = "-50px";
    document.getElementById("project-title-content-animation-unit5").style.animation = "fadeOut 2s forwards";

    document.getElementById("project-title-content-animation-unit5b").style.animation = "-50px";
    document.getElementById("project-title-content-animation-unit5b").style.animation = "fadeOut 2s forwards";

    document.getElementById("project-title-content-animation-unit5b-href").style.animation = "-50px";
    document.getElementById("project-title-content-animation-unit5b-href").style.animation = "fadeOutHref 2s forwards";

    document.getElementById("project-title-content-animation-unit5c-href").style.animation = "-50px";
    document.getElementById("project-title-content-animation-unit5c-href").style.animation = "fadeOutHref 2s forwards";

    document.getElementById("project-title-content-animation-unit6").style.animation = "-50px";
    document.getElementById("project-title-content-animation-unit6").style.animation = "fadeOut 2s forwards";

    document.getElementById("project-title-content-animation-unit6b").style.animation = "-50px";
    document.getElementById("project-title-content-animation-unit6b").style.animation = "fadeOut 2s forwards";

    document.getElementById("project-title-content-animation-unit6b-href").style.animation = "-50px";
    document.getElementById("project-title-content-animation-unit6b-href").style.animation = "fadeOutHref 2s forwards";

    document.getElementById("project-title-content-animation-unit6c-href").style.animation = "-50px";
    document.getElementById("project-title-content-animation-unit6c-href").style.animation = "fadeOutHref 2s forwards";
  }
}


console.log('Js Loaded.');