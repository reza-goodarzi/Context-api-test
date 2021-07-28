import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

	:root{
		--color-primary: #8224e3;
		--color-secondary: #a968ec;
		--color-black: #020202;
		--color-white: #fefefe;
		--color-gray: #414452;

		--shadow-light: 0 0 3rem #00000003;
		--shadow-dark: 0 3rem 5rem #00000005;
		--shadow-darker: 0 1rem 2rem #00000020;
	}

	html, button, a ,input, textarea{
		font-family: Roboto;
		font-size: 62.5%;
		font-weight: normal;
		color: var(--color-black);

		@media screen and (max-width: 80em){
			font-size: 54%;
		}

		@media screen and (max-width: 56.25em){
			font-size: 46%;
		}

		@media screen and (max-width: 37.5em){
			font-size: 38%;
		}
	}

	body{
		background-color: var(--color-white);
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		overflow-x: hidden;
	}

	button,
	a,
	a:link,
	a:visited{
      padding: 1.3rem 1.5rem;
      position: relative;
      font-size: 1.6rem;
      border: none;
      cursor: pointer;
		color: var(--color-white);
      transition: all 0.2s;

      display: flex;
      align-items: center;

		@media screen and (max-width: 37.5em){
			font-size: 2rem;
		}
	}

	a,
	a:link,
	a:visited{
      text-decoration: none;
		width: fit-content;
	}

	button{
      border-radius: 5px;
      background-color: transparent;
		outline: none;
		transition: all 0.3s ease-in;
		
		&:hover{
			color: var(--color-primary);
		}
	}

	p{
		font-size: 1.6rem;
		@media screen and (max-width: 56.25em){
			font-size: 1.8rem;
		}
		@media screen and (max-width: 37.5em){
			font-size: 2.1rem;
		}
	}

	h1{
		font-size: 2rem;
		font-weight: 900;
		color: var(--color-black);
		@media screen and (max-width: 37.5em){
			font-size: 2.6rem;
		}
	}


	// Costume Scroll bar

	// work in firefox
	* {
		scrollbar-width: thin;
		scrollbar-color: rgba(155, 155, 155, 0.7) transparent;
	}

	// work in other browser
	*::-webkit-scrollbar {
		width: 5px;
	}
	*::-webkit-scrollbar-track {
		background: transparent;
	}
	*::-webkit-scrollbar-thumb {
		background-color: rgba(155, 155, 155, 0.7);
		border-radius: 2rem;
		border: none;
	}

`;

export default GlobalStyle;