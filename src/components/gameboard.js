/**
 * @fileoverview Gameboard module
 * @author Thinh Nguyen
 * @version 1.0.0
 */

"use strict";

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
        if (board[pos[0]][pos[1]] !== null || this.isPosOutOfBounds(pos)) {
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
      if (this.isPosOutOfBounds(position)) {
        throw new Error("Position is out of bounds");
      }
      if (board[position[0]][position[1]] === null) {
        board[position[0]][position[1]] = "M";
        return;
      }
      if (board[position[0]][position[1]] instanceof Object) {
        board[position[0]][position[1]].hit();
        board[position[0]][position[1]] = "H";
        return;
      }
      throw new Error("Position has already been attacked");
    },
    allShipsSunk() {
      return ships.every((ship) => ship.isSunk());
    },
    isPosOutOfBounds(position) {
      return (
        position[0] < 0 ||
        position[0] > board[0].length - 1 ||
        position[1] < 0 ||
        position[1] > board.length - 1
      );
    },
  };
  return publicAPI;
}

/**
 * Create a gameboard component representing the gameboard object
 * of a player
 * @param {Object} gameboard Gameboard object
 * @param {Object} player Player object
 * @return {HTMLElement} Gameboard component
 */
export function createGameboardComponent(gameboard, player) {
  const gameboardComponent = document.createElement("div");
  gameboardComponent.id = "gameboard-" + player.getName();
  const board = gameboard.getBoard();
  for (let i = 0; i < board.length; ++i) {
    for (let j = 0; j < board[0].length; ++j) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.dataset.row = i;
      cell.dataset.col = j;
      cell.dataset.player = player.getName();
      gameboardComponent.appendChild(cell);
    }
  }
  return gameboardComponent;
}