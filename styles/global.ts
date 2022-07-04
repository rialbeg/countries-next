import { createGlobalStyle, DefaultTheme } from "styled-components";

export const lightTheme: DefaultTheme = {
  background: "hsl(0, 0%, 98%)",
  element: "hsl(0, 0%, 100%)",
  text: "hsl(200, 15%, 8%)",
  input: "hsl(0, 0%, 52%)",
};

export const darkTheme: DefaultTheme = {
  background: "hsl(207, 26%, 17%)",
  element: "hsl(209, 23%, 22%)",
  text: "hsl(0, 0%, 100%)",
  input: "hsl(0, 0%, 100%)",
};

export const GlobalStyle = createGlobalStyle`
	*{
		padding:0;
		margin:0;
	}
	*,*::before,*::after{
		box-sizing: border-box;
	}
	html{
		font-size:62.5%;
	}
	body{
		background: ${({ theme }) => theme.background};
    	color: ${({ theme }) => theme.text};
		font-family: 'Nunito Sans', sans-serif;
	}
	nav{
		background: ${({ theme }) => theme.element}
	}
	img{ 
		width:100%;
	}
	div.search-input{
		background: ${({ theme }) => theme.element};
	}
	input{
		background: ${({ theme }) => theme.element};
		outline:none;
		border:none;
		color: ${({ theme }) => theme.text}
	}
	.dropdown-header{
		background: ${({ theme }) => theme.element};
	}
	.dropdown-list-container{
		background: ${({ theme }) => theme.element};
	}
	.country-card{
		background: ${({ theme }) => theme.element};	
	}
`;
