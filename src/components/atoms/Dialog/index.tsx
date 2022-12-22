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
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: React.Dispatch<React.SetStateAction<boolean>>;
}

interface DialogToggleProps {
  onClick?: () => void;
}

export const DialogContext = createContext<DialogContextProps | undefined>(
  undefined
);

/** Dialog Main 최상단 컴포넌트*/
function DialogMain({
  children,
  open,
  onOpenChange,
  defaultOpen = false,
}: PropsWithChildren<DialogProps>) {
  const [isOpenDialog, setIsOpenDialog] = useState(defaultOpen);

  return (
    <DialogContext.Provider
      value={{
        isOpen: open ? open : isOpenDialog,
        toggle: onOpenChange ? onOpenChange : setIsOpenDialog,
      }}
    >
      {children}
    </DialogContext.Provider>
  );
}

/** Dialog Toggle  */
function DialogToggle({
  children,
  onClick,
}: PropsWithChildren<DialogToggleProps>) {
  const { isOpen, toggle } = useContext(
    DialogContext as React.Context<DialogContextProps>
  );

  const handleOnClick = () => {
    if (onClick) onClick();
  };

  return (
    <button onClick={() => (onClick ? handleOnClick() : toggle(!isOpen))}>
      {children}
    </button>
  );
}

/** Dialog Toggle */
export function DialogCloseToggle({ children }: PropsWithChildren) {
  const { toggle } = useContext(
    DialogContext as React.Context<DialogContextProps>
  );

  return <button onClick={() => toggle(false)}>{children}</button>;
}

/** Dialog Portal */
export function DialogPortal({ children }: PropsWithChildren) {
  const { isOpen } = useContext(
    DialogContext as React.Context<DialogContextProps>
  );

  return isOpen ? createPortal(<>{children}</>, document.body) : null;
}

/** Dialog Overlay */
export function DialogOverlay(props: HTMLAttributes<HTMLDivElement>) {
  const { toggle } = useContext(
    DialogContext as React.Context<DialogContextProps>
  );

  return <div {...props} onClick={() => toggle(false)} />;
}

/** Dialog Content */
export function DialogContent(
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
