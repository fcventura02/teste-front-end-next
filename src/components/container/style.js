import styled from "styled-components";
import theme from "../../css/theme";

export const ContainerStyle = styled.div`
  width: clamp(300px, 90%, 1080px);
  margin: auto;
  &.container--padding_vertical {
    padding: 70px 0;
  }
`;

export const ContainerTextStyle = styled(ContainerStyle)`
  max-width: 742px;
  text-align: ${({ textAling }) => textAling};
`;
ContainerTextStyle.defaultProps = {
  textAling: "start",
};
