import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  FormHTMLAttributes,
  HTMLAttributes,
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

interface FormFieldProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

function FormField({ children, ...rest }: PropsWithChildren<FormFieldProps>) {
  return <div {...rest}>{children}</div>;
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

function FormControl({ ...rest }: FormControlProps) {
  return <input {...rest} />;
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
  Field: FormField,
  Label: FormLabel,
  Control: FormControl,
  Submit: FormSubmit,
});
