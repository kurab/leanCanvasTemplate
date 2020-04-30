const author = document.querySelector("#author");

function getAuthor() {
  if (localStorage.getItem("author") === null) {
    author.textContent = "Author";
  } else {
    author.textContent = localStorage.getItem("author");
  }
}

function setAuthor(e) {
  if (e.type === "keypress") {
    // Make sure enter is pressed.
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem("author", e.target.innerText);
      author.blur();
    } else {
      localStorage.setItem("author", e.target.innerText);
    }
  }
}

author.addEventListener("keypress", setAuthor);
author.addEventListener("blur", setAuthor);

getAuthor();
