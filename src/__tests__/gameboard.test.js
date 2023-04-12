/**
 * @fileoverview Gameboard test module
 * @author Thinh Nguyen
 * @version 1.0.0
 */

"use strict";

import createGameboard from "../components/gameboard.js";

describe("Gameboard functions", () => {
  let testGameboard;

  beforeEach(() => {
    testGameboard = createGameboard();
  });

  test("Placing a ship works properly", () => {
    expect(testGameboard.placeShip(1, 1, 5, "horizontal")).toBe(true);
    expect(testGameboard.placeShip(2, 2, 5, "vertical")).toBe(true);
    expect(testGameboard.placeShip(3, 3, 5, "horizontal")).toBe(true);
    expect(testGameboard.placeShip(4, 4, 5, "vertical")).toBe(true);
    expect(testGameboard.placeShip(5, 5, 5, "horizontal")).toBe(true);
    expect(testGameboard.placeShip(6, 6, 5, "vertical")).toBe(true);
    expect(testGameboard.placeShip(7, 7, 5, "horizontal")).toBe(true);
    expect(testGameboard.placeShip(8, 8, 5, "vertical")).toBe(true);
    expect(testGameboard.placeShip(9, 9, 5, "horizontal")).toBe(true);
    expect(testGameboard.placeShip(10, 10, 5, "vertical")).toBe(true);
  });

  test("Placing a ship out of bounds throws an error", () => {
    expect(() => {
      testGameboard.placeShip(1, 1, 5, "vertical");
    }).toThrow();
  });

  test("Placing a ship on top of another ship throws an error", () => {
    expect(() => {
      testGameboard.placeShip(1, 1, 5, "horizontal");
      testGameboard.placeShip(1, 1, 5, "horizontal");
    }).toThrow();
  });

  test("Placing a ship on top of another ship throws an error", () => {
    expect(() => {
      testGameboard.placeShip(1, 1, 5, "horizontal");
      testGameboard.placeShip(1, 1, 5, "horizontal");
    }).toThrow();
  });

  test("Placing a ship on top of another ship throws an error", () => {
    expect(() => {
      testGameboard.placeShip(1, 1, 5, "horizontal");
      testGameboard.placeShip(1, 1, 5, "horizontal");
    }).toThrow();
  });

  test("Placing a ship on top of another ship throws an error", () => {
    expect(() => {
      testGameboard.placeShip(1, 1, 5, "horizontal");
      testGameboard.placeShip(1, 1, 5, "horizontal");
    }).toThrow();
  });

  test("Placing a ship on top of another ship throws an error", () => {
    expect(() => {
      testGameboard.placeShip(1, 1, 5, "horizontal");
      testGameboard.placeShip(1, 1, 5, "horizontal");
    }).toThrow();
  });

  test("Placing a ship on top of another ship throws an error", () => {
    expect(() => {
      testGameboard.placeShip(1, 1, 5, "horizontal");
      testGameboard.placeShip(1, 1, 5, "horizontal");
    }).toThrow();
  });
});
