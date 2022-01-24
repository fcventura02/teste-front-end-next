import { InputStyle } from "./style";
import { FormStyle } from "./style";

export function Form({ children, ...props }) {
  return <FormStyle {...props}>{children}</FormStyle>;
}

export function Input({ children, ...props }) {
  return <InputStyle {...props}>{children}</InputStyle>;
}
