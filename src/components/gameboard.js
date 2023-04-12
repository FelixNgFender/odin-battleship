/**
 * @fileoverview Gameboard module
 * @author Thinh Nguyen
 * @version 1.0.0
 */

"use strict";

import Ship from "./ship.js";

/**
 * Creates a gameboard
 * @return {Object} Public API
 */
export default function createGameboard() {
  const board = [
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
  ];
  const ships = [];
  const publicAPI = {
    getBoard() {
      return board;
    },
    getShips() {
      return ships;
    },
    placeShip(ship, position, isHorizontal) {
      const positions = [];
      if (isHorizontal) {
        for (let i = 0; i < ship.getLength(); ++i) {
          positions.push([position[0], position[1] + i]);
        }
      } else {
        for (let i = 0; i < ship.getLength(); ++i) {
          positions.push([position[0] + i, position[1]]);
        }
      }
      positions.forEach((pos) => {
        if (
          board[pos[0]][pos[1]] !== null ||
          pos[0] < 0 ||
          pos[0] > board[0].length - 1 ||
          pos[1] < 0 ||
          pos[1] > board.length - 1
        ) {
          throw new Error("Invalid ship placement");
        }
      });
      positions.forEach((pos) => {
        board[pos[0]][pos[1]] = ship;
      });
      ships.push(ship);
      return;
    },
    receiveAttack(position) {
      if (board[position[0]][position[1]] === null) {
        board[position[0]][position[1]] = "M";
        return;
      }
      if (board[position[0]][position[1]] instanceof Ship) {
        board[position[0]][position[1]].hit();
        board[position[0]][position[1]] = "H";
        return;
      }
      if (
        board[position[0]][position[1]] === "H" ||
        board[position[0]][position[1]] === "M"
      ) {
        throw new Error("Invalid attack");
      }
    },
    allShipsSunk() {
      return ships.every((ship) => ship.isSunk());
    },
  };
  return publicAPI;
}
