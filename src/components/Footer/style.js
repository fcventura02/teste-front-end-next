import styled from "styled-components";
import { ContainerStyle } from "../container/style";

export const FooterStyle = styled.footer`
  width: 100%;
  height: 100%;
  background: #003e85;
  padding: 78px 0;
`;
export const FooterContainer = styled(ContainerStyle)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid ${({theme})=>theme.colors.gray};
  padding-top: 22px;
`;
export const FooterItem = styled.article`
  display: flex;
  margin: auto;
  text-align: center;
  flex-direction: column;

  &:last-child {
    margin-top: 20px;
    text-align: center;
  }

  @media (min-width: 759px) {
    margin: 0;
    text-align: start;
    &:last-child {
      margin-top: 0;
      text-align: end;
    }
  }
`;

export const FooterContainerLink = styled.article`
  margin-top: 8px;

  .f-link {
    width: 24px;
    height: 24px;
    margin: 12px;
    &:first-child {
      margin-left: 0;
    }

    &:hover {
      filter: invert(17%) sepia(60%) saturate(1195%) hue-rotate(0deg)
        brightness(102%) contrast(103%);
    }
  }
`;
