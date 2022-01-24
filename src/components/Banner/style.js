import styled from "styled-components";
import imgBanner from "../../assets/img/banner.png";

export const BannerContainer = styled.article`
  overflow: hidden;
  max-width: 100vw;
  height: 100vh;
  position: relative;
  z-index: -1;
  background-size: cover;
  background: linear-gradient(0deg, #ffffff00 0%, #00000044 100%) fixed,
    url(${imgBanner.src}) fixed no-repeat 15% 0%;

  @media (min-width: 700px) {
    background: linear-gradient(0deg, #ffffff00 0%, #00000044 100%) fixed,
      url(${imgBanner.src}) fixed no-repeat 0% 0%;
    background-size: cover;
  }
`;
