/**
 * @fileoverview Battleship app
 * @author Thinh Nguyen
 * @version 1.0.0
 */

"use strict";

export const BOT_NAME = "World Government";

import pageLoad from "./components/pageLoad";
import "./styles/styles-reset.css";
import "./styles/styles.css";

/**
 * Starts the app
 */
function startApp() {
  const body = document.querySelector("body");
  body.id = "content";
  pageLoad();
}

startApp();