import { FOCUSABLE_ELEMENTS } from "constants/elements";

export const focusTrap = (node: HTMLElement) => {
  const elemWhitelist = String(FOCUSABLE_ELEMENTS);
  let elemFirst: HTMLElement;
  let elemLast: HTMLElement;

  const onFirstElemKeydown = (e: KeyboardEvent) => {
    if (e.shiftKey && e.code === "Tab") {
      e.preventDefault();
      elemLast.focus();
    }
  };

  const onLastElemKeydown = (e: KeyboardEvent) => {
    if (!e.shiftKey && e.code === "Tab") {
      e.preventDefault();
      elemFirst.focus();
    }
  };

  const onInit = () => {
    const focusableElements: HTMLElement[] = Array.from(node.querySelectorAll(elemWhitelist));

    if (focusableElements.length) {
      elemFirst = focusableElements[0];
      elemLast = focusableElements[focusableElements.length - 1];
      elemFirst.focus();
      elemFirst.addEventListener("keydown", onFirstElemKeydown);
      elemLast.addEventListener("keydown", onLastElemKeydown);
    }
  };

  onInit();

  const onDestroy = () => {
    if (elemFirst) elemFirst.removeEventListener("keydown", onFirstElemKeydown);

    if (elemLast) elemLast.removeEventListener("keydown", onLastElemKeydown);
  };

  return {
    update() {
      onInit();
    },
    destroy() {
      onDestroy();
    }
  };
};
