let submitBTN = document.getElementById("submitBTN");
let form = document.querySelector("form");
submitBTN.addEventListener("click", function (event) {
  let name = document.getElementById("name").value;
  let pass = document.getElementById("password").value;

  if (name.length < 5) {
    event.preventDefault();
    console.log("name is too short");
  } else {
    form.submit();
  }
});
