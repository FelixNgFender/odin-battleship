/**
 * @fileoverview Battleship app
 * @author Thinh Nguyen
 * @version 1.0.0
 */

"use strict";

import createGameboard from "./components/gameboard.js";
import createShip from "./components/ship.js";
import createPlayer from "./components/player.js";
import createGameLoop from "./components/gameLoop.js";

const player1Gameboard = createGameboard();
const player2Gameboard = createGameboard();
const player1 = createPlayer("Player 1", player1Gameboard);
const player2 = createPlayer("Player 2", player2Gameboard);
const gameLoop = createGameLoop(player1, player2);

const player1Ships = [
	createShip(5),
	createShip(4),
	createShip(3),
	createShip(3),
	createShip(2)
];

const player2Ships = [
	createShip(5),
	createShip(4),
	createShip(3),
	createShip(3),
	createShip(2)
];

// Place ships
player1Gameboard.placeShip(player1Ships[0], [0, 0], true);
player1Gameboard.placeShip(player1Ships[1], [1, 0], false);
player1Gameboard.placeShip(player1Ships[2], [1, 1], true);
player1Gameboard.placeShip(player1Ships[3], [2, 1], true);
player1Gameboard.placeShip(player1Ships[4], [3, 1], true);

player2Gameboard.placeShip(player2Ships[0], [0, 0], true);
player2Gameboard.placeShip(player2Ships[1], [1, 0], false);
player2Gameboard.placeShip(player2Ships[2], [1, 1], true);
player2Gameboard.placeShip(player2Ships[3], [2, 1], true);
player2Gameboard.placeShip(player2Ships[4], [3, 1], true);

// Play from CLI
gameLoop.randomPlay();
	

