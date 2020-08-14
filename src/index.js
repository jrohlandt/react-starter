import nav from "./nav";
import { top, bottom } from "./footer";
import { top as topc, bottom as bottomc } from "./footer-common";
import Button from "./button";
import "./nav.css";
import "./button.css";
import headerLogo from "../resources/img/webpack-header-logo.jpg";
import headerLogoDark from "../resources/svg/webpack-header-logo-dark.svg";
import makeImage from "./image.js";

console.log(headerLogo);
document.body.appendChild(makeImage(headerLogo, 300));
document.body.appendChild(makeImage(headerLogoDark, 300, "auto", "black"));

document.body.appendChild(Button("Happy button"));
document.body.appendChild(nav());

console.log(nav, top, bottom, topc, bottomc, "ddd");
