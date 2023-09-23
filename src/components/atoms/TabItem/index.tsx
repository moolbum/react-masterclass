import React, { ButtonHTMLAttributes, forwardRef, useRef } from "react";

interface TabItemProps<T> extends ButtonHTMLAttributes<HTMLButtonElement> {
  tabValue: T;
  onFocusItem?: (item: T) => void;
}

const TabItem = forwardRef<HTMLButtonElement, TabItemProps<any>>(
  (props, ref) => {
    const buttonRef = useRef<HTMLButtonElement>();
    const { tabValue, onFocusItem, onFocus, onKeyDown, ...restProps } = props;

    return (
      <button
        ref={(node) => {
          if (node) {
            buttonRef.current = node;
          }
          if (ref) {
            if (typeof ref === "function") {
              ref(node);
            } else {
              ref.current = node;
            }
          }
        }}
        onFocus={(e) => {
          onFocusItem?.(tabValue);
          onFocus?.(e);
        }}
        role="tab"
        onKeyDown={(e) => {
          if (buttonRef.current) {
            if (e.key === "ArrowRight") {
              const next = buttonRef.current.nextSibling as HTMLButtonElement;

              if (next) {
                next.focus();
              }
            }

            if (e.key === "ArrowLeft") {
              const prev = buttonRef.current
                .previousSibling as HTMLButtonElement;

              if (prev) {
                prev.focus();
              }
            }
          }
          onKeyDown?.(e);
        }}
        {...restProps}
      />
    );
  }
);

export default TabItem;
