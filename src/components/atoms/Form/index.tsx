import React, {
  ButtonHTMLAttributes,
  createContext,
  DetailedHTMLProps,
  FormHTMLAttributes,
  HTMLAttributes,
  InputHTMLAttributes,
  LabelHTMLAttributes,
  PropsWithChildren,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import composeEventHandlers from "../../../util/composeEvent";

interface FormRootContextProps {
  // getFieldValidity: (fieldName: string) => ValidityState;
  // handleFieldValidityChange: (
  //   fieldName: string,
  //   validity: ValidityState
  // ) => void;
}
const FormRootContext = createContext<FormRootContextProps | undefined>(
  undefined
);

interface ValidityMap {
  [fileName: string]: ValidityState;
}
interface FormRootProps
  extends DetailedHTMLProps<
    FormHTMLAttributes<HTMLFormElement>,
    HTMLFormElement
  > {}

function FormRoot({ children, ...props }: PropsWithChildren<FormRootProps>) {
  // const [validityMap, setValidityMap] = useState<ValidityMap>({});

  const isHTMLElement = (element: any): element is HTMLElement => {
    // console.log("element>>>>>", element);
    return element instanceof HTMLElement;
  };

  const isFormControl = (
    element: any
  ): element is { validity: ValidityState } => {
    // console.log("isForm???>>>", element);
    return "validity" in element;
  };

  const isInvalid = (control: HTMLElement) => {
    return isFormControl(control);
  };

  const getFirstInvalidControl = (
    form: HTMLFormElement
  ): HTMLElement | undefined => {
    const elements = form.elements;
    // console.log("getFirstInvalidControl Element>>>", elements);
    const [firstInvalidControl] = Array.from(elements)
      .filter(isHTMLElement)
      .filter(isInvalid);

    console.log([firstInvalidControl]);

    return firstInvalidControl;
  };

  return (
    <FormRootContext.Provider value={{}}>
      <form
        onInvalid={composeEventHandlers(props.onInvalid, (event) => {
          // console.log("event.currentTarget", event.currentTarget);
          const firstInvalidControl = getFirstInvalidControl(
            event.currentTarget
          );
          console.log("firstInvalidControl>>>>>>>>", firstInvalidControl);
          // console.log("event.target>>>>>>>>>>>>", event.target);
          if (firstInvalidControl === event.target) firstInvalidControl.focus();

          event.preventDefault();
        })}
        {...props}
      >
        {children}
      </form>
    </FormRootContext.Provider>
  );
}

interface FormFieldContextProps {}
const FormFieldContext = createContext<FormFieldContextProps | undefined>(
  undefined
);

interface FormFieldProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  name: string;
}

function FormField({ children, ...props }: PropsWithChildren<FormFieldProps>) {
  const ref = useRef<HTMLDivElement>(null);
  const [field, setField] = useState("");

  useEffect(() => {
    setField(props.name ?? ref?.current?.className);
  }, [children, props.name]);

  console.log("field>>>", field);

  return (
    <FormFieldContext.Provider value={field}>
      <div {...props} ref={ref}>
        {children}
      </div>
    </FormFieldContext.Provider>
  );
}

interface FormLabelContextProps {
  labelId: string;
}
const FormLabelContext = createContext<FormLabelContextProps | undefined>(
  undefined
);

interface FormLabelProps
  extends DetailedHTMLProps<
    LabelHTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
  > {}

function FormLabel({ children, ...props }: PropsWithChildren<FormLabelProps>) {
  const fieldData = useContext(FormFieldContext);
  const labelFor = props.htmlFor ?? (fieldData as string);

  return (
    <FormLabelContext.Provider value={{ labelId: labelFor }}>
      <label htmlFor={labelFor} {...props}>
        {children}
      </label>
    </FormLabelContext.Provider>
  );
}

interface FormControlProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  asChild?: boolean;
}

function FormControl({
  children,
  asChild,
  ...props
}: PropsWithChildren<FormControlProps>) {
  const labelFor = useContext(FormLabelContext);
  const fieldData = useContext(FormFieldContext);
  const inputId = labelFor?.labelId || (fieldData as string);

  if (asChild || children) {
    return (
      <div id={inputId} {...props}>
        {children}
      </div>
    );
  }

  return <input id={inputId} {...props} onChange={props.onChange} />;
}

interface FormMessageProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
  match?: keyof ValidityState;
}

function FormMessage({ children, match }: PropsWithChildren<FormMessageProps>) {
  if (match) {
    return <span>{children}</span>;
  }

  return null;
}

interface FormSubmitProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

function FormSubmit({
  children,
  ...props
}: PropsWithChildren<FormSubmitProps>) {
  return (
    <button type="submit" {...props}>
      {children}
    </button>
  );
}

export const Form = Object.assign(FormRoot, {
  Field: FormField,
  Label: FormLabel,
  Control: FormControl,
  Message: FormMessage,
  Submit: FormSubmit,
});
