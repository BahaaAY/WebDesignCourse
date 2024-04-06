let btn = document.getElementById("btn");
console.log(btn);
btn.onclick = function () {
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);
  parent.style.backgroundColor = "#" + randomColor;
};
