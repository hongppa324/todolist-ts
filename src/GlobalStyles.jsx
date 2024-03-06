import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        
    }
     
    body {
        max-width : 1200px;
        min-width : 800px;
        margin: 1rem;
        height: 100vh;
        background-color: #E5E1DA;
        
    }
    
`;

export default GlobalStyle;
