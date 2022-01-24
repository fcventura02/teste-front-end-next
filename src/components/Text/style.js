import styled from "styled-components";

export const TitleStyle = styled.h1`
  font-size: 4rem /*64px*/;
  line-height: 4.625rem /*74px*/;
  color: ${({ theme }) => theme.textColor};
`;

export const SubTitleStyle = styled.h2`
  font-size: 2.25rem /*36px*/;
  line-height: 2.875rem /*46px*/;
  color: ${({ theme }) => theme.textColor};
`;

export const ParagraphStyle = styled.p`
  font-size: 1.375rem /*22px*/;
  line-height: 2rem /*32px*/;
  color: ${({ theme }) => theme.textColor};
`;

export const SpanStyle = styled.span`
  width: 100%;
  font-size: 1rem /*16px*/;
  line-height: 1.625rem /*26px*/;
  color: ${({ theme }) => theme.textColor};
  &.input_error, &.input_error-open {
    color: red;
    display: none;
  }
  &.input_error-open{
    display: block;
  }
`;

export const LabelStyle = styled.label`
  font-size: 1.25rem /*20px*/;
  line-height: 1.875rem /*30px*/;
  color: ${({ theme }) => theme.textColor};
`;
