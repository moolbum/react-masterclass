import React, {
  createContext,
  HTMLAttributes,
  PropsWithChildren,
  useContext,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { Dialog } from "../Dialog";

interface AlertDialogContextProps {
  isOpen: boolean;
  toggle: React.Dispatch<React.SetStateAction<boolean>>;
}

interface AlertDialogProps {
  defaultOpen?: boolean;
}

interface AlertDialogToggleProps {
  onClick?: () => void;
}

export const AlertDialogContext = createContext<
  AlertDialogContextProps | undefined
>(undefined);

/** AlertDialog Main 최상단 컴포넌트*/
function AlertDialogMain({
  children,
  defaultOpen = false,
}: PropsWithChildren<AlertDialogProps>) {
  const [isOpen, toggle] = useState(defaultOpen);

  return (
    <AlertDialogContext.Provider value={{ isOpen, toggle }}>
      {children}
    </AlertDialogContext.Provider>
  );
}

/** AlertDialog Toggle  */
function AlertDialogToggle({
  children,
  onClick,
}: PropsWithChildren<AlertDialogToggleProps>) {
  const { isOpen, toggle } = useContext(
    AlertDialogContext as React.Context<AlertDialogContextProps>
  );

  const handleOnClick = () => {
    if (onClick) onClick();
    toggle(!isOpen);
  };

  return (
    <button onClick={() => (onClick ? handleOnClick() : toggle(!isOpen))}>
      {children}
    </button>
  );
}

/** AlertDialog Toggle */
export function AlertDialogCloseToggle({ children }: PropsWithChildren) {
  const { toggle } = useContext(
    AlertDialogContext as React.Context<AlertDialogContextProps>
  );

  return <button onClick={() => toggle(false)}>{children}</button>;
}

/** AlertDialog Portal */
export function AlertDialogPortal({ children }: PropsWithChildren) {
  const { isOpen } = useContext(
    AlertDialogContext as React.Context<AlertDialogContextProps>
  );

  return isOpen ? createPortal(<>{children}</>, document.body) : null;
}

/** AlertDialog Overlay */
export function AlertDialogOverlay(props: HTMLAttributes<HTMLDivElement>) {
  return <div {...props} />;
}

/** AlertDialog Content */
export function AlertDialogContent(
  props: PropsWithChildren<HTMLAttributes<HTMLDivElement>>
) {
  return <Dialog.Content {...props}>{props.children}</Dialog.Content>;
}

export const AlertDialog = Object.assign(AlertDialogMain, {
  Toggle: AlertDialogToggle,
  Content: AlertDialogContent,
  Portal: AlertDialogPortal,
  Overlay: AlertDialogOverlay,
  CloseToggle: AlertDialogCloseToggle,
});
