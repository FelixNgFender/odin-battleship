/**
 * @fileoverview Initialize page load
 * @author Thinh Nguyen
 * @version 1.0.0
 */

"use strict";

import appleTouchIconHref from "../assets/favicon/apple-touch-icon.png";
import favicon32Href from "../assets/favicon/favicon-32x32.png";
import favicon16Href from "../assets/favicon/favicon-16x16.png";
import manifestHref from "../assets/favicon/site.webmanifest";
import maskIconHref from "../assets/favicon/safari-pinned-tab.svg";
// import shortcutIconHref from "../assets/favicon/favicon.ico";
import msConfigHref from "../assets/favicon/browserconfig.xml";
import createNameModalComponent from "./nameModal";

/**
 * Add favicons to the page.
 * @return {void}
 */
function loadFavicons() {
  const appleTouchIcon = document.createElement("link");
  const favicon32 = document.createElement("link");
  const favicon16 = document.createElement("link");
  const manifest = document.createElement("link");
  // const shortcutIcon = document.createElement("link");
  const maskIcon = document.createElement("link");
  const msTileColor = document.createElement("meta");
  const msConfig = document.createElement("meta");
  const themeColor = document.createElement("meta");
  appleTouchIcon.rel = "apple-touch-icon";
  appleTouchIcon.sizes = "180x180";
  appleTouchIcon.href = appleTouchIconHref;
  favicon32.rel = "icon";
  favicon32.type = "image/png";
  favicon32.sizes = "32x32";
  favicon32.href = favicon32Href;
  favicon16.rel = "icon";
  favicon16.type = "image/png";
  favicon16.sizes = "16x16";
  favicon16.href = favicon16Href;
  manifest.rel = "manifest";
  manifest.href = manifestHref;
  // shortcutIcon.rel = "shortcut icon";
  // shortcutIcon.href = shortcutIconHref;
  maskIcon.rel = "mask-icon";
  maskIcon.href = maskIconHref;
  maskIcon.color = "#b91d47";
  msTileColor.name = "msapplication-TileColor";
  msTileColor.content = "#b91d47";
  msConfig.name = "msapplication-config";
  msConfig.content = msConfigHref;
  themeColor.name = "theme-color";
  themeColor.content = "#ffffff";
  document.head.appendChild(appleTouchIcon);
  document.head.appendChild(favicon32);
  document.head.appendChild(favicon16);
  document.head.appendChild(manifest);
  document.head.appendChild(maskIcon);
  // document.head.appendChild(shortcutIcon);
  document.head.appendChild(msTileColor);
  document.head.appendChild(msConfig);
  document.head.appendChild(themeColor);
}

/**
 * Create the main component.
 * @return {HTMLElement} Main element
 */
function main() {
  const main = document.createElement("main");
  main.classList.add("wideScreenWrapper");
  main.id = "wideScreenWrapper";
  main.appendChild(createNameModalComponent());
  return main;
}

/**
 * Create the footer component.
 * @return {HTMLElement} Footer element
 */
function footer() {
  loadKit();
  const footer = document.createElement("footer");
  const footerText = document.createElement("p");
  const footerLink = document.createElement("a");
  const footerIcon = document.createElement("i");
  footer.classList.add("footer");
  footerIcon.classList.add("fab", "fa-github");
  footerText.textContent =
    "Copyright © " + new Date().getFullYear() + " FelixNgFender";
  footerLink.href = "https://github.com/FelixNgFender";
  footerLink.target = "_blank";
  footerLink.rel = "noopener noreferrer";
  footerLink.appendChild(footerIcon);
  footer.appendChild(footerText);
  footer.appendChild(footerLink);
  return footer;
}

/**
 * Load the fontawesome kit.
 * @return {void}
 */
function loadKit() {
  const fontawesomeKit = document.createElement("script");
  fontawesomeKit.src = "https://kit.fontawesome.com/b6b40a3902.js";
  fontawesomeKit.crossOrigin = "anonymous";
  document.head.appendChild(fontawesomeKit);
}

/**
 * Load Google Fonts.
 * @return {void}
 */
function loadGoogleFonts() {
  const googleFonts = document.createElement("link");
  googleFonts.rel = "preconnect";
  googleFonts.href = "https://fonts.googleapis.com";
  document.head.appendChild(googleFonts);
  const googleFonts2 = document.createElement("link");
  googleFonts2.rel = "preconnect";
  googleFonts2.href = "https://fonts.gstatic.com";
  googleFonts2.crossOrigin = "anonymous";
  document.head.appendChild(googleFonts2);
  const googleFonts3 = document.createElement("link");
  googleFonts3.href =
    "https://fonts.googleapis.com/css2?family=Pirata+One&display=swap";
  googleFonts3.rel = "stylesheet";
  document.head.appendChild(googleFonts3);
}

/**
 * Initialize page load.
 * @return {void}
 * @exports
 */
export default function pageLoad() {
  const body = document.getElementById("content");
  body.appendChild(main());
  body.appendChild(footer());
  loadFavicons();
  loadGoogleFonts();
}