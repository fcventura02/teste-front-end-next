import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: ${(props) => props.theme.font.family};
}
html{
	scroll-behavior: smooth;
	scroll-padding-top: 68px;
}
body{
	background: ${(props) => props.theme.colors.background};
	min-height: 100vh;
}
#__next{
	min-height: 100vh;
	display: flex;
	flex-direction: column;
}
`;