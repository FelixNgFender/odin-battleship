/**
 * @fileoverview Ship module
 * @author Thinh Nguyen
 * @version 1.0.0
 */

"use strict";

/**
 * Creates a ship
 * @param {Number} length Length of the ship
 * @return {Object} Public API
 */
export default function createShip(length) {
  let hits = 0;
  const publicAPI = {
    isSunk() {
      return hits === length;
    },
    hit() {
      if (this.isSunk()) {
        throw new Error("Ship is already sunk");
      }
      ++hits;
    },
    getLength() {
      return length;
    },
  };
  return publicAPI;
}
