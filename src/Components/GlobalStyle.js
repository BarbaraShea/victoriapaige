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
    // padding: 3rem;
    /* line-height: 1.2;
    margin-right: 1.125rem;
    margin-left:.5rem;
    z-index: 1; */ 
}


p {
  font-size: 1.5rem;
  @media only screen and (max-width: 1200px){
            font-size: 1rem;
};

li > .active {
  font-weight: bold;
}

.navbar {
  position: fixed;
  z-index: 3;
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

// .AR {
//   transition: transform 250ms;
//  :hover {
//      transform: translateX(3.125rem;
//  }
// }

/* .navbar ul {
  display: block;
  list-style: none;
  text-align: right;
} */

html{
    /* font-size: 1.5rem;
    /* font-size: 24px; */
    /* @media (max-width: 1300px){
        font-size: 60%; */ */
    }
}

li {
  z-index: 0;
  font-size: 1.5rem;
  list-style: none;
}


img {
  z-index: 0;
}

.headers {

  @media only screen and (max-width: 600px){
        width: 100%;
    }
}
`

export default GlobalStyle;
