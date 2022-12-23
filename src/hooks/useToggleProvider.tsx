import { useCallback, useMemo } from "react";

interface ToggleProviderProps {
  open: boolean;
  onOpenChange: React.Dispatch<React.SetStateAction<boolean>>;
}

const useToggleProvider = ({ open, onOpenChange }: ToggleProviderProps) => {
  const handleToggle = useCallback(() => {
    onOpenChange((prev) => !prev);
  }, [onOpenChange]);

  const values = useMemo(() => {
    return {
      isOpen: open,
      toggle: handleToggle,
    };
  }, [handleToggle, open]);

  return { values };
};

export default useToggleProvider;
