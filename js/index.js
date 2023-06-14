

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


    console.log('2')

  } else {

  }
}


console.log('Js Loaded.');