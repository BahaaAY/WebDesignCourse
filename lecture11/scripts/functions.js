function userInfo(name, age, major) {
  let msg = `Name: ${name}, Age: ${age}, Major: ${major}`;
  return msg;
}

let userName = prompt("Enter your name: ");
let userAge = prompt("Enter your age: ");
let userMajor = prompt("Enter your Major: ");
let userInfo1 = userInfo(userName, userAge, userMajor);

let output = document.getElementById("output");
output.innerHTML = userInfo1;
output.style.color = "red";
output.style.width = "50%";
output.style.height = "500px";
output.style.backgroundColor = "lightgray";
output.style.fontSize = "20px";
output.style.textAlign = "center";
console.log(output.innerHTML);
output.style.display = "flex";
output.style.justifyContent = "center";
output.style.alignContent = "center";
output.style.alignItems = "center";
output.style.flexDirection = "column";
output.style.border = "2px solid black";
console.log(userInfo1);
