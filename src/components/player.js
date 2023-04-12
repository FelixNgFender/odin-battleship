/**
 * @fileoverview Player module
 * @author Thinh Nguyen
 * @version 1.0.0
 */

"use strict";

/**
 * Creates a player
 * @param {String} name Name of the player
 * @param {Object} gameboard Gameboard of the player
 * @return {Object} Public API
 */
export default function createPlayer(name, gameboard) {
  const publicAPI = {
    getGameboard() {
      return gameboard;
    },
    getName() {
      return name;
    },
    getAvailableMoves() {
      const positions = [];
      const board = gameboard.getBoard();
      for (let i = 0; i < board.length; ++i) {
        for (let j = 0; j < board[0].length; ++j) {
          if (board[i][j] !== "H" && board[i][j] !== "M") {
            positions.push([i, j]);
          }
        }
      }
      return positions;
    },
    randomMove() {
      const moves = this.getAvailableMoves();
      if (moves.length === 0) throw new Error("No available moves");
      const randomIndex = Math.floor(Math.random() * moves.length);
      return moves[randomIndex];
    },
    attack(enemy, move) {
      enemy.getGameboard().receiveAttack(move);
    },
  };
  return publicAPI;
}
