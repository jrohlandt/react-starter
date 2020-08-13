import nav from "./nav";
import { top, bottom } from "./footer";
import { top as topc, bottom as bottomc } from "./footer-common";
import Button from "./button";

document.body.appendChild(Button("Happy button"));

console.log(nav, top, bottom, topc, bottomc);
