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
  setIsOpen: (prev: boolean) => void;
}

interface DialogProps {
  defaultOpen?: boolean;
}

const DialogContext = createContext<DialogContextProps>({
  isOpen: false,
  setIsOpen: (prev) => !prev,
});

/** Dialog Main 최상단 컴포넌트*/
function DialogMain({
  children,
  defaultOpen = false,
}: PropsWithChildren<DialogProps>) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <DialogContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </DialogContext.Provider>
  );
}

/** Dialog Toggle  */
function DialogToggle({ children }: PropsWithChildren) {
  const { isOpen, setIsOpen } = useContext(DialogContext);

  return <button onClick={() => setIsOpen(!isOpen)}>{children}</button>;
}

/** Dialog Toggle */
function DialogCloseToggle({ children }: PropsWithChildren) {
  const { setIsOpen } = useContext(DialogContext);

  return <button onClick={() => setIsOpen(false)}>{children}</button>;
}

/** Dialog Portal */
function DialogPortal({ children }: PropsWithChildren) {
  const { isOpen } = useContext(DialogContext);

  return isOpen ? createPortal(<>{children}</>, document.body) : null;
}

/** Dialog Overlay */
function DialogOverlay(props: HTMLAttributes<HTMLDivElement>) {
  return <div {...props} />;
}

/** Dialog Content */
function DialogContent(
  props: PropsWithChildren<HTMLAttributes<HTMLDivElement>>
) {
  return <div {...props}>{props.children}</div>;
}

export const Dialog = Object.assign(DialogMain, {
  Toggle: DialogToggle,
  Content: DialogContent,
  Portal: DialogPortal,
  Overlay: DialogOverlay,
  CloseToggle: DialogCloseToggle,
});
