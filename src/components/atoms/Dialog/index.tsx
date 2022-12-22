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
  toggle: React.Dispatch<React.SetStateAction<boolean>>;
}

interface DialogProps {
  defaultOpen?: boolean;
}

interface DialogToggleProps {
  onChange?: () => void;
}

export const DialogContext = createContext<DialogContextProps | undefined>(
  undefined
);

/** Dialog Main 최상단 컴포넌트*/
function DialogMain({
  children,
  defaultOpen = false,
}: PropsWithChildren<DialogProps>) {
  const [isOpen, toggle] = useState(defaultOpen);

  return (
    <DialogContext.Provider value={{ isOpen, toggle }}>
      {children}
    </DialogContext.Provider>
  );
}

/** Dialog Toggle  */
function DialogToggle({
  children,
  onChange,
}: PropsWithChildren<DialogToggleProps>) {
  const { isOpen, toggle } = useContext(
    DialogContext as React.Context<DialogContextProps>
  );

  console.log("toggle isOpen >>>", isOpen);
  const handleOnChange = () => {
    if (onChange) onChange();
    toggle(!isOpen);
  };

  return (
    <button onClick={() => (onChange ? handleOnChange() : toggle(!isOpen))}>
      {children}
    </button>
  );
}

/** Dialog Toggle */
function DialogCloseToggle({ children }: PropsWithChildren) {
  const { toggle } = useContext(
    DialogContext as React.Context<DialogContextProps>
  );

  return <button onClick={() => toggle(false)}>{children}</button>;
}

/** Dialog Portal */
function DialogPortal({ children }: PropsWithChildren) {
  const { isOpen } = useContext(
    DialogContext as React.Context<DialogContextProps>
  );

  return isOpen ? createPortal(<>{children}</>, document.body) : null;
}

/** Dialog Overlay */
function DialogOverlay(props: HTMLAttributes<HTMLDivElement>) {
  const { toggle } = useContext(
    DialogContext as React.Context<DialogContextProps>
  );

  return <div {...props} onClick={() => toggle(false)} />;
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
