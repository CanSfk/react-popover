import { createElement, useContext, useEffect, useRef } from "react";
import { PopoverContext } from "..";

export default function PopoverPanel({ as = "div", className, children }) {
  const { show, close, buttonRef, timeLine } = useContext(PopoverContext);
  const panelRef = useRef();

  useEffect(() => {
    const clickHandle = (e) => {
      if (
        !e.composedPath().includes(panelRef.current) &&
        !e.composedPath().includes(buttonRef.current)
      )
        close();
    };

    document.addEventListener("click", clickHandle);

    return () => {
      document.removeEventListener("click", clickHandle);
    };
  }, []);

  return createElement(
    as,
    {
      ref: panelRef,
      className:
        typeof className === "function"
          ? className({ show, timeLine })
          : className,
    },
    children
  );
}
