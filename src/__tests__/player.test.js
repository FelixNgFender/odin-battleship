/**
 * @fileoverview Player test module
 * @author Thinh Nguyen
 * @version 1.0.0
 */

"use strict";

import createShip from "../components/ship.js";
import createPlayer from "../components/player.js";
import createGameboard from "../components/gameboard.js";

describe("Player functions", () => {
  let testPlayer;
  let testGameboard;
  let testEnemy;
  let testEnemyGameboard;
  let testCarrier;

  beforeEach(() => {
    testGameboard = createGameboard();
    testPlayer = createPlayer("Test Player", testGameboard);
    testEnemyGameboard = createGameboard();
    testEnemy = createPlayer("Test Enemy", testEnemyGameboard);
    testCarrier = createShip(5);
  });

  test("Get name works properly", () => {
    expect(testPlayer.getName()).toBe("Test Player");
  });

  test("Get gameboard works properly", () => {
    expect(testPlayer.getGameboard()).toBe(testGameboard);
  });

  test("Available moves works properly", () => {
    for (let i = 0; i < 10; ++i) {
      for (let j = 0; j < 9; ++j) {
        testGameboard.receiveAttack([i, j]);
      }
    }
    expect(testPlayer.getAvailableMoves()).toEqual([
      [0, 9],
      [1, 9],
      [2, 9],
      [3, 9],
      [4, 9],
      [5, 9],
      [6, 9],
      [7, 9],
      [8, 9],
      [9, 9],
    ]);
    for (let i = 0; i < 10; i++) {
      testGameboard.receiveAttack([i, 9]);
    }
    expect(testPlayer.getAvailableMoves()).toEqual([]);
  });

  test("Random move works properly", () => {
    const moves = testPlayer.getAvailableMoves();
    const randomMove = testPlayer.randomMove();
    expect(moves).toContainEqual(randomMove);
  });

  test("Random move throws error when no moves are available", () => {
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        testGameboard.receiveAttack([i, j]);
      }
    }
    expect(() => {
      testPlayer.randomMove();
    }).toThrow();
  });

  test("Attack works properly", () => {
    testEnemyGameboard.placeShip(testCarrier, [0, 0], true);
    testPlayer.attack(testEnemy, [0, 0]);
    expect(testEnemy.getGameboard().getBoard()[0][0]).toBe("H");
    testPlayer.attack(testEnemy, [1, 0]);
    expect(testEnemy.getGameboard().getBoard()[1][0]).toBe("M");
  });
});
