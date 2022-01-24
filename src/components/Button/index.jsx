import { ButtonCloseStyle } from "./style";

export function ButtonClose({ children, ...props }) {
  return <ButtonCloseStyle {...props}>{children}</ButtonCloseStyle>;
}
