"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export function ScrollButton() {

  function scrollToMainContent() {
    document.querySelector("main")?.scrollIntoView({
      behavior: "smooth", block: "start"
    })
  }

  return (
    <button
      type="button"
      id="scroll-button"
      aria-label="Scroll to main content"
      onClick={scrollToMainContent}
      className="size-14 group p-2 rounded-full transition-colors duration-500 ease cursor-pointer hover:bg-black/5 active:bg-black/10"
    >
      <FontAwesomeIcon icon={faChevronDown} size="2x" className="group-hover:animate-move-down" />
    </button>
  );
}
