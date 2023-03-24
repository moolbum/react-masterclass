import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  FormHTMLAttributes,
  InputHTMLAttributes,
  LabelHTMLAttributes,
  PropsWithChildren,
} from "react";

interface FormRootProps
  extends DetailedHTMLProps<
    FormHTMLAttributes<HTMLFormElement>,
    HTMLFormElement
  > {}

function FormRoot({ children, ...rest }: PropsWithChildren<FormRootProps>) {
  return <form {...rest}>{children}</form>;
}

interface FormLabelProps
  extends DetailedHTMLProps<
    LabelHTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
  > {}

function FormLabel({ children, ...rest }: PropsWithChildren<FormLabelProps>) {
  return <label {...rest}>{children}</label>;
}

interface FormControlProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

function FormControl(props: FormControlProps) {
  return <input {...props} />;
}

interface FormSubmitProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

function FormSubmit({ children, ...rest }: PropsWithChildren<FormSubmitProps>) {
  return (
    <button type="submit" {...rest}>
      {children}
    </button>
  );
}

export const Form = Object.assign(FormRoot, {
  Label: FormLabel,
  Control: FormControl,
  Submit: FormSubmit,
});
