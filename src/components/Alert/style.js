import styled from "styled-components";

export const AlertStyle = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  overflow: hidden;
  padding: 20px;
  
  background: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  box-shadow: 0 0px 10px 1px ${({ theme }) => theme.colors.gray};

  text-align: center;

  position: fixed;
  z-index: 10;
  transition: all 0.3s ease-in;

  &.alert-open::after {
    content: "";
    height: 4px;
    background: ${({ theme }) => theme.colors.blue};
    position: fixed;
    top: 0;
    left: 0;
    animation: ease-in timeClose 5s;
  }

  @keyframes timeClose {
    0% {
      width: 100%;
    }

    100% {
      width: 0;
    }
  }

  &.alert-disabled {
    opacity: 0;
    top: 0;
    left: calc(100vw + 500px) !important;
  }

  &.alert-error {
    background: red;
    top: 10px;
    right: 0;
    transform: translate(0%, 0%);
    border-radius: 10px 0 0 10px;
  }

  &.alert-success {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
  }
`;
