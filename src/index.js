import nav from "./nav";
import { top, bottom } from "./footer";
import { top as topc, bottom as bottomc } from "./footer-common";
import Button from "./button";
import "./nav.css";
import "./button.css";

document.body.appendChild(Button("Happy button"));
document.body.appendChild(nav());
console.log(nav, top, bottom, topc, bottomc, "ddd");
