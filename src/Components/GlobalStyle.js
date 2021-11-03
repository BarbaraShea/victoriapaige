import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`

:root {
    --primary-color: #FFF1EC;
    --text-color: #360713;
    --accent-color: #DCF763;
  }

* {
    margin: 0;
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
    padding: 3em;
    line-height: 1.2;
    margin-right: 18px;
    margin-left: 8px;
    z-index: 1;
}

h4 {
  margin-bottom: 20px;
  margin-right: 80px;
};

h1 {
  margin-top: 40px;
  margin-bottom: 20px;
  margin-right: 80px;
};

p {
  margin-bottom: 20px;
  margin-right: 160px;
  z-index: 1;
};

.landing-list {
  margin-top: 20px;
  margin-bottom: 20px;
  margin-right: 80px;
  font-size: 28px;
  line-height: 1.5;
};

.landing-list-intro {
  margin-top: 20px;
  margin-bottom: 20px;
  margin-right: 250px;
  font-size: 28px;
  line-height: 1.2;
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
//      transform: translateX(50px);
//  }
// }

.navbar ul {
  display: block;
  list-style: none;
  text-align: right;
}

html{
    @media (max-width: 1300px){
        font-size: 60%;
    }
}

li {
  z-index: 0;
}

img {
  z-index: 0;
}
`

export default GlobalStyle;
