import { createElement, useContext } from "react";
import { PopoverContext } from "..";

export default function PopoverButton({ as = "button", className, children }) {
  const { toggle, show, buttonRef } = useContext(PopoverContext);

  return createElement(
    as,
    {
      ref: buttonRef,
      className:
        typeof className == "function" ? className({ show }) : className,
      onClick: toggle,
    },
    typeof children === "function" ? children({ show }) : children
  );
}
