/**
 * @fileoverview Announcer component
 * @author Thinh Nguyen
 * @version 1.0.0
 */

"use strict";

/**
 * Creates an announcer component
 * @return {HTMLElement} Announcer component
 */
export default function createAnnouncerComponent() {
  const announcer = document.createElement("div");
  announcer.id = "announcer";
  announcer.classList.add("announcer");
  announcer.textContent = "Welcome to Battleship!";
  return announcer;
}

/**
 * Announces a message
 * @param {String} message Message to announce
 * @return {undefined}
 */
export function announce(message) {
  const announcer = document.querySelector("#announcer");
  announcer.textContent = message;
}

/**
 * Announces an error message. Reverts back to previous message after a delay
 * @param {String} message Error message to announce
 * @param {Number} delay Delay in milliseconds
 * @return {undefined} 
 */
export function briefAnnounce(message, delay) {
  const announcer = document.querySelector("#announcer");
  const previousMessage = announcer.textContent;
  announcer.textContent = message;
  setTimeout(() => {
    announcer.textContent = previousMessage;
    console.log("hehe");
    }, delay);
}
