import React, {
  createContext,
  HTMLAttributes,
  PropsWithChildren,
  useContext,
  useState,
} from "react";
import { createPortal } from "react-dom";

interface DialogContextProps {
  isOpen: boolean;
  toggle: (prev: boolean) => void;
}

const DialogContext = createContext<DialogContextProps>({
  isOpen: false,
  toggle: (prev) => !prev,
});

// Toggle;
function Toggle({ children }: PropsWithChildren) {
  const { isOpen, toggle } = useContext(DialogContext);

  return <button onClick={() => toggle(!isOpen)}>{children}</button>;
}

function CloseToggle({ children }: PropsWithChildren) {
  const { toggle } = useContext(DialogContext);

  return <button onClick={() => toggle(false)}>{children}</button>;
}

// Content;
function Content(props: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) {
  return <div {...props}>{props.children}</div>;
}

// Portal;
function Portal({ children }: PropsWithChildren) {
  const { isOpen } = useContext(DialogContext);

  return isOpen ? createPortal(<>{children}</>, document.body) : null;
}

// Overlay;
function Overlay(props: HTMLAttributes<HTMLDivElement>) {
  return <div {...props} />;
}

// DialogMain;
function DialogMain({
  children,
  defaultOpen = false,
}: PropsWithChildren<{ defaultOpen?: boolean }>) {
  const [isOpen, toggle] = useState(defaultOpen);

  return (
    <DialogContext.Provider value={{ isOpen, toggle }}>
      {children}
    </DialogContext.Provider>
  );
}

export const Dialog = Object.assign(DialogMain, {
  Toggle: Toggle,
  Content: Content,
  Portal: Portal,
  Overlay: Overlay,
  CloseToggle: CloseToggle,
});
