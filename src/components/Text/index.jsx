import {
  LabelStyle,
  ParagraphStyle,
  SpanStyle,
  SubTitleStyle,
  TitleStyle,
} from "./style";
import theme from "../../css/theme";
import { ContainerTextStyle } from "../container/style";

export function ContainerText({ children, ...props }) {
  return (
    <ContainerTextStyle as="article" {...props}>
      {children}
    </ContainerTextStyle>
  );
}

export function Title({ children, ...props }) {
  return (
    <TitleStyle theme={{ textColor: theme.colors.yellow }} {...props}>
      {children}
    </TitleStyle>
  );
}

export function SubTitle({ children, ...props }) {
  return (
    <SubTitleStyle {...props}>
      {children}
    </SubTitleStyle>
  );
}

export function Paragraph({ children, ...props }) {
  return <ParagraphStyle {...props}>{children}</ParagraphStyle>;
}

export function Span({ children, ...props }) {
  return <SpanStyle {...props}>{children}</SpanStyle>;
}

export function Label({ children, ...props }) {
  return <LabelStyle {...props}>{children}</LabelStyle>;
}
