"use strict";

let parent = document.getElementById("parent");

let link = document.createElement("a");

link.setAttribute("href", "https://www.google.com");
link.setAttribute("target", "_blank");
link.textContent = "Google";
link.style.textDecoration = "none";
link.style.color = "white";

parent.appendChild(link);

