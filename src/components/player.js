/**
 * @fileoverview Player module
 * @author Thinh Nguyen
 * @version 1.0.0
 */

"use strict";

import createGameboard from "./gameboard.js";

/**
 * Creates a player
 * @param {String} name Name of the player
 * @return {Object} Public API
 */
export default function createPlayer(name) {
  const gameboard = createGameboard();
  const publicAPI = {
    getGameboard() {
      return gameboard;
    },
    getName() {
      return name;
    },
  };
  return publicAPI;
}
