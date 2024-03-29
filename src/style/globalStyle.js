import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

@font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
}

:root {
	--white-purple: #FBF7FF;
	--light-purple: #F3E7FE;
	--deep-purple: #602ed5;
	--light-gray: #eee;

	--font-large: 36px;
	--font-medium: 28px;
	--max-width: 1480px;
}


*::selection {
  background-color: var(--light-purple);
  /* color: $light-gray; */
}
::-moz-selection {
	background-color: var(--light-purple);
	color: #fff;
}

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
	box-sizing: border-box;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	color: #222;
	font-family: 'Pretendard-Regular';
	line-height: 1.2;

	&::-webkit-scrollbar {
    width: 0px;
  }
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
a, a:hover, a:active, a:link, a:visited {
	color: inherit;
	text-decoration: none;
}
`;

export default GlobalStyle;
