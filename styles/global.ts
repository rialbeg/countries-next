import { createGlobalStyle, DefaultTheme } from "styled-components";

export const lightTheme: DefaultTheme = {
  body: "#FFF",
  text: "#363537",
  toggleBorder: "#FFF",
  background: "#363537",
};

export const darkTheme: DefaultTheme = {
  body: "#363537",
  text: "#FAFAFA",
  toggleBorder: "#6B8096",
  background: "#999",
};

export const GlobalStyle = createGlobalStyle`
	*{
		padding:0;
		margin:0;
		box-sizing: border-box;
	}
	html{
		font-size:62.5%;
	}
	body{
		background: ${({ theme }) => theme.body};
    	color: ${({ theme }) => theme.text};
		font-family: 'Nunito Sans', sans-serif;
	}
	img{ 
		width:100%;
	}
`;
