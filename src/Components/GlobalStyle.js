import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`

:root {
    --primary-color: #FFF1EC;
    --text-color: #360713;
    --accent-color: #DCF763;
  }

* {
    padding: 0;
    box-sizing: border-box;
}

html, body {
    @media only screen and (max-width: 600px){
  overflow-x: hidden;
  }
}
body {
  position: relative
}


a {
  color: var(--text-color);
}

a:link {
  text-decoration: none;
}


.navbar a:hover {
  color: var(--text-color);
  font-weight: bold;
  cursor: pointer;
}

body {
    background: var(--primary-color); 
    color: var(--text-color);
    font-family: 'IBM Plex Sans', sans-serif;;
    text-rendering: optimizeLegibility;
}


p {
  font-size: 1.5rem;
  @media only screen and (max-width: 600px){
            font-size: 1rem;
};

li > .active {
  font-weight: bold;
  font-size: 1.5rem;
}

#logo{
  position: fixed;
  box-sizing: border-box;
}

.landing-image {
transition: transform 500ms;
 :hover {
transform: scale(1.05,1.05);
}



li {
  z-index: 0;
  font-size: 1.5rem;
  list-style: none;
}


img {
  /* z-index: 0; */
}

.headers {

  @media only screen and (max-width: 600px){
        width: 100%;
    }
}


`
export default GlobalStyle;
