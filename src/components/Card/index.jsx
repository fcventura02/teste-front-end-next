import { CardItemStyle, CardStyle } from "./style";

export function Card({ children }) {
  return <CardStyle>{children}</CardStyle>;
}

export function CardItem({ children }) {
  return <CardItemStyle>{children}</CardItemStyle>;
}
