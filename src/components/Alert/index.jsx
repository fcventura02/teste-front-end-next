import { AlertStyle } from "./style";

export function Alert({ children, ...props }) {
  return <AlertStyle {...props}>{children}</AlertStyle>;
}
