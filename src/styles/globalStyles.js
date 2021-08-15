import { createGlobalStyle } from "styled-components";
// import "../fonts/PeaceSans.ttf";

export const GlobalStyle = createGlobalStyle`
     
        :root{
             --black: #191919;
             --white: white;
             --mainFont: Open Sans;
             --grey: #e5e5e5;
             --red: #f84a4a;
             --green: #71DD5F;
        }

        * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: var(--mainFont);
}
body {
  width: 100vw;
  height: 100vh;
  a {
    text-decoration: none;
  }
  
  input {
    border: none;
    background: none;
    outline: none;
    border-bottom: 2px solid var(--grey);
    text-align: center;
  }
}

        
      
`;
