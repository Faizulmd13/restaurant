import "./styles.css";

import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadAbout from "./about.js";
import loadReserves from "./reserves.js";

loadHome();

document.getElementById("home").addEventListener("click", loadHome);
document.getElementById("menu").addEventListener("click", loadMenu);
document.getElementById("about").addEventListener("click", loadAbout);
document.getElementById("reserve").addEventListener("click", loadReserves);
