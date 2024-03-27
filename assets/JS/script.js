let viewport = window.screen.width;
let show = document.querySelector(".show_more");
let transition = document.querySelector(".transition");
let left = document.querySelector(".left");
let right = document.getElementsByClassName("right");

document.querySelector(".show_more").addEventListener("click", () => {
  if (transition.style.display == "block") {
    transition.style.display = "none";

    transition.classList.add("animationTransition1");
    left.classList.add("animationLeft1");

    transition.classList.remove("animationTransition0");
    left.classList.remove("animationLeft0");

    if (viewport <= 360) {
      show.innerHTML = `<img src="assets/img/up.svg" /></div>`;
    } else {
      show.innerHTML = `show more <img src="assets/img/up.svg" /></div>`;
    }
  } else {
    transition.style.display = "block";

    transition.classList.remove("animationTransition1");
    left.classList.remove("animationLeft1");

    transition.classList.add("animationTransition0");
    left.classList.add("animationLeft0");

    if (viewport <= 360) {
      show.innerHTML = `<img src="assets/img/down.svg" /></div>`;
    } else {
      show.innerHTML = `show less <img src="assets/img/down.svg" /></div>`;
    }
  }
});

// ViewPort Settings.

if (viewport <= 360) {
  show.innerHTML = `<img src="assets/img/up.svg" /></div>`;
} else {
  show.innerHTML = `show more <img src="assets/img/up.svg" /></div>`;
}

let leftHeight = left.offsetHeight;
right.style.minHeight=`calc(100vh - ${leftHeight})`
