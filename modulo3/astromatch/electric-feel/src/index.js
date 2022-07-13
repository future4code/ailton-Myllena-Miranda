import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import fundo from "../src/assets/fundo.jpg"
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#root,body{
max-width: 100vw;
min-height: 100vh;
background-image:url(${fundo});
background-position:center;
@media screen and (max-width: 480px) {
  background-image:none;
  background-color:white;
}
}
#root{
  display: flex;
  flex-direction: column;
}
`;


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle/>
    <App />
  </React.StrictMode>
);

