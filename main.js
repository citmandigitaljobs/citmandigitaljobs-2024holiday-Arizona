// HAMBURGER MENU
/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
//AND ADDED EVENT LISTENER TO MAKE MENU CLOSE ON LINK CLICK
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
  x.addEventListener("click", function () {
    x.style.display = "none";
  });
}

// START CAROUSEL

let imageIndex = 1;
showSlideImage(imageIndex);

// Next/previous controls
function plusSlideImage(m) {
  showSlideImage((imageIndex += m));
}

// Thumbnail image controls
function currentSlideImage(m) {
  showSlideImage((imageIndex = m));
}

function showSlideImage(m) {
  let j;
  let slideImage = document.getElementsByClassName("image");
  if (m > slideImage.length) {
    imageIndex = 1;
  }
  if (m < 1) {
    imageIndex = slideImage.length;
  }
  for (j = 0; j < slideImage.length; j++) {
    slideImage[j].style.display = "none";
  }
  
    slideImage[imageIndex - 1].style.display = "block";
  // dotsMonth[imageIndex - 1].className += " active";
}
// END CAROUSEL

// ----------------

// START CAROUSEL2
let imageIndex2 = 1;
showSlideImage2(imageIndex2);

// Next/previous controls
function plusSlideImage2(m) {
  showSlideImage2((imageIndex2 += m));
}

// Thumbnail image controls
function currentSlideImage2(m) {
  showSlideImage2((imageIndex2 = m));
}

function showSlideImage2(m) {
  let j;
  let slideImage2 = document.getElementsByClassName("image2");
  if (m > slideImage2.length) {
    imageIndex2 = 1;
  }
  if (m < 1) {
    imageIndex2 = slideImage2.length;
  }
  for (j = 0; j < slideImage2.length; j++) {
    slideImage2[j].style.display = "none";
  }
  
    slideImage2[imageIndex2 - 1].style.display = "block";
  // dotsMonth2[imageIndex2 - 1].className += " active";
}
// END CAROUSEL2
