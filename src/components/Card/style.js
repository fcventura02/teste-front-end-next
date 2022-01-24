import styled from "styled-components";

export const CardStyle = styled.div`
  padding: 20px 0 60px;

  hr {
    width: 90%;
    margin: auto;
    border-top: 1px dashed var(--gray);
  }
`;

export const CardItemStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-wrap: wrap;
  padding: 0 0 80px;

  &:last-child {
    padding: 80px 0 40px;
  }

  img {
    width: 100%;
    max-width: 330px;
    margin-bottom: 20px;
  }

  div {
    width: 100%;
    max-width: 588px;
  }

  @media (min-width: 1036px) {
    justify-content: space-around;
    flex-direction: row;
    text-align: start;

    &:last-child {
      flex-direction: row-reverse;
      text-align: end;
    }
    img {
      margin: 0;
    }
  }
`;
