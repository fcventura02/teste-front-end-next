import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: ${(props) => props.theme.font.family};
}
#__next{
	min-height: 100vh;
	display: flex;
	flex-direction: column;
}

::-webkit-scrollbar {
	width: 16px;
}

::-webkit-scrollbar-thumb {
	height: 56px;
	border-radius: 8px;
	border: 4px solid transparent;
	background-clip: content-box;
	background-color: var(--blue);
}
`;