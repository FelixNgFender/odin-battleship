/**
 * @fileoverview Ship test module
 * @author Thinh Nguyen
 * @version 1.0.0
 */

"use strict";

import createShip from "../components/ship.js";

describe("Ship functions", () => {
  let testCarrier;

  beforeEach(() => {
    testCarrier = createShip(5);
  });

  test("Sunking works properly", () => {
    expect(testCarrier.isSunk()).toBe(false);
    testCarrier.hit();
    expect(testCarrier.isSunk()).toBe(false);
    testCarrier.hit();
    testCarrier.hit();
    testCarrier.hit();
    expect(testCarrier.isSunk()).toBe(false);
    testCarrier.hit();
    expect(testCarrier.isSunk()).toBe(true);
  });

  test("Sunking a sunk ship throws an error", () => {
    expect(() => {
      testCarrier.hit();
      testCarrier.hit();
      testCarrier.hit();
      testCarrier.hit();
      testCarrier.hit();
      testCarrier.hit();
    }).toThrow();
  });

  test("Length is correct", () => {
    expect(testCarrier.getLength()).toBe(5);
  });
});
