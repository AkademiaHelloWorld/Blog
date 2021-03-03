window.onload = function () {
    slider();
}

window.slideIndex = 0;

function slider() {
    const images = document.getElementsByClassName('sliderImage');
    images[slideIndex].style.display = 'none';
    window.slideIndex++;

    if (window.slideIndex >= images.length) {
        window.slideIndex = 0;
    }
    images[slideIndex].style.display = 'block';
    setTimeout(slider, 3000);
}

let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
  } else {
    document.getElementById("header").style.top = "-70px";
  }
  prevScrollpos = currentScrollPos;
}