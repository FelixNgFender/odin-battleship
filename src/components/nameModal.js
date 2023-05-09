/**
 * @fileoverview Name modal component
 * @author Thinh Nguyen
 * @version 1.0.0
 */

"use strict";

import { initializeGame } from "./gameController";

/**
 * Creates a name modal component
 * @return {HTMLElement} Name modal component
 */
export default function createNameModalComponent() {
  const nameModal = document.createElement("form");
  nameModal.id = "nameModal";
  nameModal.classList.add("nameModal");
  nameModal.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = nameInput.value;
    nameModal.remove();
    initializeGame(name);
  });
  const nameInput = document.createElement("input");
  nameInput.id = "nameInput";
  nameInput.classList.add("nameInput");
  nameInput.type = "text";
  nameInput.placeholder = "Ahoy! State yer name";
  nameInput.required = true;
  nameModal.appendChild(nameInput);
  const nameSubmit = document.createElement("input");
  nameSubmit.id = "nameSubmit";
  nameSubmit.classList.add("nameSubmit");
  nameSubmit.type = "submit";
  nameSubmit.value = "Set Sail!";
  nameModal.appendChild(nameSubmit);
  return nameModal;
}
