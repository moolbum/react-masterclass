import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useState,
} from "react";
import { createPortal } from "react-dom";

interface ModalContextProps {
  isOpen: boolean;
  toggle: (prev: boolean) => void;
}

const ModalContext = createContext<ModalContextProps>({
  isOpen: false,
  toggle: (prev) => !prev,
});

// Toggle;
function Toggle({ children }: PropsWithChildren) {
  const { isOpen, toggle } = useContext(ModalContext);

  console.log("ModalContext>>>>", ModalContext);
  console.log("isOpen>>>>", isOpen);
  console.log("toggle>>>>", toggle);

  return <button onClick={() => toggle(!isOpen)}>{children}</button>;
}

// List;
function List({ children }: PropsWithChildren) {
  const { isOpen } = useContext(ModalContext);

  return isOpen ? createPortal(<ul>{children}</ul>, document.body) : null;
}

// Item;
function Item({ children }: PropsWithChildren) {
  return <li>{children}</li>;
}

// Modal Main;
function Main({
  children,
  defaultOpen = false,
}: PropsWithChildren<{ defaultOpen?: boolean }>) {
  const [isOpen, toggle] = useState(defaultOpen);

  return (
    <ModalContext.Provider value={{ isOpen, toggle }}>
      {children}
    </ModalContext.Provider>
  );
}

export const Dialog = Object.assign(Main, {
  Toggle: Toggle,
  List: List,
  Item: Item,
});
