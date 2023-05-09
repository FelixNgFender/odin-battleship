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
    isGameOver() {
      return (
        player1.getGameboard().allShipsSunk() ||
        player2.getGameboard().allShipsSunk()
      );
    },
    randomPlay() {
      let move;
      while (!this.isGameOver()) {
        try {
          move = otherPlayer.randomMove();
        } catch (error) {
          console.log(error.message);
          break;
        }
        currentPlayer.attack(otherPlayer, move);
        this.switchPlayers();
      }
      console.table(player1.getGameboard().getBoard());
      console.table(player2.getGameboard().getBoard());
      if (player1.getGameboard().allShipsSunk()) {
        console.log(player2.getName() + ", ye be the winner!");
        return;
      }
      console.log(player1.getName() + ", ye be the winner!");
      return;
    },
    play() {},
  };
  return publicAPI;
}
