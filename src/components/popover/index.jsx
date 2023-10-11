import { createContext, createElement, useState, useRef } from "react";
import PopoverButton from "./popoverButton";
import PopoverPanel from "./popoverPanel";

export const PopoverContext = createContext();

export default function Popover({ as = "div", className, children }) {
  const buttonRef = useRef();

  const [timeLine, setTimeLine] = useState(false);
  const [show, setShow] = useState(false);
  const data = {
    show,
    buttonRef,
    close: () => setShow(false),
    toggle: () => setShow(!show),
  };

  const button = children.find((c) => c.type == Popover.Button);
  const panel = children.find((c) => c.type == Popover.Panel);

  return createElement(
    as,
    { className },
    <PopoverContext.Provider value={data}>
      {button}
      {show && panel}
    </PopoverContext.Provider>
  );
}

Popover.Panel = PopoverPanel;
Popover.Button = PopoverButton;
