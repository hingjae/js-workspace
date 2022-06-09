const title = document.querySelector(".title");
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];

const superEventHandler = {
  titleEnter: function () {
    title.innerText = "Mouse is here !";
    title.style.color = colors[0];
  },
  titleLeave: function () {
    title.innerText = "Mouse is gone !";
    title.style.color = colors[1];
  },
  contextMenu: function (event) {
    event.preventDefault();
    title.innerText = "right button of the mouse was clicked !";
    title.style.color = colors[2];
  },
  handleWindowResize: function () {
    title.innerText = "Window was resized !";
    title.style.color = colors[3];
  },
};

title.addEventListener("mouseenter", superEventHandler.titleEnter);
title.addEventListener("mouseleave", superEventHandler.titleLeave);
window.addEventListener("resize", superEventHandler.handleWindowResize);
window.addEventListener("contextmenu", superEventHandler.contextMenu);
