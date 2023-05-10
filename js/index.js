// When the user scrolls down 20px from the top of the document, slide down the navbar
// When the user scrolls to the top of the page, slide up the navbar (50px out of the top view)
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 450 || document.documentElement.scrollTop > 450) {
    document.getElementById("nav-bar").style.top = "0";
    document.getElementById("sub-title-PVA").style.color = "black";
    document.getElementById("sub-title-PVA").style.top = "0px";
    document.getElementById("sub-title-PVA").style.animation = "fadeIn 2s forwards";
  } else {
    document.getElementById("nav-bar").style.top = "-50px";
    document.getElementById("sub-title-PVA").style.color = "white";
    document.getElementById("sub-title-PVA").style.animation = "-50px";
    document.getElementById("sub-title-PVA").style.animation = "fadeOut 2s forwards";
  }
}


console.log('Js Loaded.')