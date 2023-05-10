// When the user scrolls down 20px from the top of the document, slide down the navbar
// When the user scrolls to the top of the page, slide up the navbar (50px out of the top view)
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 450 || document.documentElement.scrollTop > 450) {
    document.getElementById("nav-bar").style.top = "0";
    let reveals = document.querySelector(".reveals")
    reveals.classList.remove(".active")
    
    // document.getElementById("sub-title-PVA").style.color = "black";
  } else {
    document.getElementById("nav-bar").style.top = "-50px";
    let reveals = document.querySelector(".reveals")
    reveals.classList.add(".active")
    // document.getElementById("sub-title-PVA").style.color = "white";
  }
}


console.log('Js Loaded.')