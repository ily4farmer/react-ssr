import styled, { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html,
body  {
  height: 100%;
}

h1, h2, h3, h4, h5, h6, ul, li, p {
    padding: 0;
    margin: 0   ;
}

ul, li { 
    display: block;
    padding: 0;
    margin: 0 ;
}

p {
    color: #8D96BD;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 27px;
    letter-spacing: 0.03em;

}
a {
    text-decoration: none;
}

#app {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.main {
  flex: 1 0 auto;
}
.footer {
  flex: 0 0 auto;
}
`;

export const Section = styled.section`
	width: 100%;
	padding: 20px 0;
`;

export const Container = styled.div`
	max-width: 1200px;
	margin: 0 auto;
	padding: 0 5px;
`;
