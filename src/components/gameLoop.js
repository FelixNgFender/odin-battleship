/**
 * @fileoverview Game loop module
 * @author Thinh Nguyen
 * @version 1.0.0
 */

"use strict";

/**
 * Creates a game loop
 * @param {Object} player1 Player 1
 * @param {Object} player2 Player 2
 * @return {Object} Public API
 */
export default function createGameLoop(player1, player2) {
  let currentPlayer = player1;
  let otherPlayer = player2;
  const publicAPI = {
    getCurrentPlayer() {
      return currentPlayer;
    },
    getOtherPlayer() {
      return otherPlayer;
    },
    switchPlayers() {
      [currentPlayer, otherPlayer] = [otherPlayer, currentPlayer];
    },
  };
  return publicAPI;
}
