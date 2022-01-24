import styled from "styled-components";
import { SpanStyle } from "../Text/style";

export const FormStyle = styled.form`
  display: flex;
  flex-wrap: wrap;
  padding: 70px 0;
`;

export const InputStyle = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
  margin-top: 39px;

  div {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: flex-end;

  }

  &.form_input-sm {
    width: 40%;
  }

  input,
  textarea,
  select {
    padding: 5px 7px;
    margin-top: 6px;
    font-size: 1.25rem /*20px*/;
    line-height: 1.875rem /*30px*/;
    border: 1px solid #707070;
    border-radius: 10px;
    outline: none;

    &[type="checkbox"] {
      min-width: 25px;
      height: 25px;
      cursor: pointer;
      margin-top: 0;
      margin-right: 15px;
    }
    &[type="submit"] {
      padding: 20px 0;
      border: none;
      cursor: pointer;
      background: ${({theme})=>theme.colors.blue};
      color: ${({theme})=>theme.colors.white};
      transition: filter 0.3s ease-in;
      &:hover {
        filter: grayscale(0.3);
      }
    }
    &:disabled {
      cursor: not-allowed;
    }
  }
`;

export const InputErrorStyle = styled(SpanStyle)`
  color: red;
  display: none;
`;
