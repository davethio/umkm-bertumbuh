import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  /* Ensure full height without gaps */
  html, body, #root {
    height: 100%;
    margin: 0;
    padding: 0;
    overflow-x: hidden; /* Prevent horizontal scroll if needed */
    font-family: Arial, sans-serif; /* Apply Red Hat Display */
    background-color: #5e2ca5;
    color: #ffffff;
  }

  /* Additional styles */
  a {
    color: #fff;
    text-decoration: none;
    margin: 0 1rem;
  }
  body {
    display: flex;
    flex-direction: column;
  }
`;

export default GlobalStyles;
