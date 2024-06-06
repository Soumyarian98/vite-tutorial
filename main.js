import "./src/state";
import "./src/styles/main.css";
import style from "./src/styles/main.css?inline";

import styleA from "./src/styles/styleA.module.css";
import styleB from "./src/styles/styleB.module.css";

console.log(style);

document.querySelector(".heading").classList.add(styleA.heading);
