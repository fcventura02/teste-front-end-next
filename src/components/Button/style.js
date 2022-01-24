import styled from "styled-components";

export const ButtonStyle = styled.button`
  border: none;
  padding: 5px 7px;
  margin-left: auto;
  border-radius: 10px;
  cursor: pointer;
  transition: filter 0.3s ease-in;
  background: none;
  position: absolute;
  top: 0;
  right: 5px;
  &:hover {
    filter: brightness(0.9);
  }
`;

export const ButtonCloseStyle = styled(ButtonStyle)`
  top: -10px;
  color: ${({ theme }) => theme.colors.blue};
  &:after{
    display: inline-block;
    content: "x"; 
    font-size: 1.7rem /*20px*/;
    line-height: 2.2rem /*30px*/;
  }
`;
