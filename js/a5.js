const body = document.querySelector("body");

function handleSize() {
  if (window.innerWidth < 600) {
    body.classList.add("tomato");
    body.classList.remove("greenyellow");
    body.classList.remove("steelblue");
  } else if (window.innerWidth >= 600 && window.innerWidth < 1000) {
    body.classList.remove("tomato");
    body.classList.add("greenyellow");
    body.classList.remove("steelblue");
  } else if (window.innerWidth >= 1000) {
    body.classList.remove("tomato");
    body.classList.remove("greenyellow");
    body.classList.add("steelblue");
  }
}

body.classList.add("tomato");
window.addEventListener("resize", handleSize);
