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
  return announcer;
}
