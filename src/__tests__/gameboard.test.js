/**
 * @fileoverview Gameboard test module
 * @author Thinh Nguyen
 * @version 1.0.0
 */

"use strict";

import createGameboard from "../components/gameboard.js";
import createShip from "../components/ship.js";

describe("Gameboard functions", () => {
  let testGameboard;
  let testCarrier;
  let testBattleship;
  let testCruiser;

  beforeEach(() => {
    testGameboard = createGameboard();
    testCarrier = createShip(5);
    testBattleship = createShip(4);
    testCruiser = createShip(3);
  });

  test("Placing a ship works properly", () => {
    testGameboard.placeShip(testCarrier, [0, 0], true);
    expect(testGameboard.getBoard()[0][0]).toBe(testCarrier);
    expect(testGameboard.getBoard()[0][1]).toBe(testCarrier);
    expect(testGameboard.getBoard()[0][2]).toBe(testCarrier);
    expect(testGameboard.getBoard()[0][3]).toBe(testCarrier);
    expect(testGameboard.getBoard()[0][4]).toBe(testCarrier);
    expect(testGameboard.getBoard()[0][5]).toBe(null);
  });

  test("Placing a ship out of bounds throws an error", () => {
    expect(() => {
      testGameboard.placeShip(testCarrier, [0, 6], true);
    }).toThrow();
  });

  test("Placing a ship on top of another ship throws an error", () => {
    expect(() => {
      testGameboard.placeShip(testCarrier, [0, 0], true);
      testGameboard.placeShip(testBattleship, [0, 0], true);
    }).toThrow();
  });

  test("Placing a ship vertically works properly", () => {
    testGameboard.placeShip(testBattleship, [0, 0], false);
    expect(testGameboard.getBoard()[0][0]).toBe(testBattleship);
    expect(testGameboard.getBoard()[1][0]).toBe(testBattleship);
    expect(testGameboard.getBoard()[2][0]).toBe(testBattleship);
    expect(testGameboard.getBoard()[3][0]).toBe(testBattleship);
    expect(testGameboard.getBoard()[4][0]).toBe(null);
  });

  test("Get all ships works properly", () => {
    testGameboard.placeShip(testCarrier, [0, 0], true);
    testGameboard.placeShip(testBattleship, [1, 0], false);
    testGameboard.placeShip(testCruiser, [1, 1], true);
    expect(testGameboard.getShips()).toEqual([
      testCarrier,
      testBattleship,
      testCruiser,
    ]);
  });

  test("Out of bounds attack throws an error", () => {
    expect(() => {
      testGameboard.receiveAttack([-1, 9]);
    }).toThrow();
  });

  test("Receive attack works properly", () => {
    testGameboard.placeShip(testCarrier, [0, 0], true);
    testGameboard.placeShip(testBattleship, [1, 0], false);
    testGameboard.placeShip(testCruiser, [1, 1], true);
    expect(() => {
      testGameboard.receiveAttack([-1, 0]);
    }).toThrow();
    testGameboard.receiveAttack([5, 5]);
    testGameboard.receiveAttack([0, 0]);
    testGameboard.receiveAttack([0, 1]);
    testGameboard.receiveAttack([0, 2]);
    testGameboard.receiveAttack([0, 3]);
    expect(testGameboard.getBoard()[5][5]).toBe("M");
    expect(testGameboard.getBoard()[0][0]).toBe("H");
    expect(() => {
      testGameboard.receiveAttack([5, 5]);
    }).toThrow();
    expect(() => {
      testGameboard.receiveAttack([0, 0]);
    }).toThrow();
    expect(testCarrier.isSunk()).toBe(false);
    testGameboard.receiveAttack([0, 4]);
    expect(testCarrier.isSunk()).toBe(true);
  });

  test("All ships are sunk works properly", () => {
    testGameboard.placeShip(testCarrier, [0, 0], true);
    testGameboard.placeShip(testBattleship, [1, 0], false);
    testGameboard.placeShip(testCruiser, [1, 1], true);
    expect(testGameboard.allShipsSunk()).toBe(false);
    testCarrier.hit();
    testCarrier.hit();
    testCarrier.hit();
    testCarrier.hit();
    testCarrier.hit();
    expect(testGameboard.allShipsSunk()).toBe(false);
    testBattleship.hit();
    testBattleship.hit();
    testBattleship.hit();
    testBattleship.hit();
    expect(testGameboard.allShipsSunk()).toBe(false);
    testCruiser.hit();
    testCruiser.hit();
    testCruiser.hit();
    expect(testGameboard.allShipsSunk()).toBe(true);
  });
});
