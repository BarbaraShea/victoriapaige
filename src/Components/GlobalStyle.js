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

a:hover {
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
  line-height: 1.5;
};

// li > .active {
//   border-bottom: 1px solid var(--accent-color);
// }

.navbar {
  position: fixed;
}


.navbar ul {
  display: block;
  list-style: none;
  text-align: right;
}



`

export default GlobalStyle;
