import "modern-normalize/modern-normalize.css";

import styled, { createGlobalStyle } from "styled-components";

import InterBlack from "./assets/fonts/Inter-Black.woff";
import InterBold from "./assets/fonts/Inter-Bold.woff";
import InterMedium from "./assets/fonts//Inter-Medium.woff";
import InterRegular from "./assets/fonts/Inter-Regular.woff";

export const GlobalStyle = createGlobalStyle`

:root{
    --main-color: #59B17A;
    --main-text-color: #1D1E21;
    --active-color: #3F945F;
    --cancel-color: #E85050;
    --background-color: #FFFFFF;
    --button-background-color: #DCDDDF;
    --transition: 250ms ease-in-out;
    color-scheme: light dark;
    }

    body{
        margin: 0;
        font-family: 'Inter', sans-serif;
        background-color: var(--background-color);
        color: var(--main-text-color);
      }
      
      
      p,
      h1,
      h2,
      h3 {
        margin: 0;
      }
      
      ul {
        margin: 0;
        padding-left: 0;
      
        list-style: none;
      }
      
      img {
        display: block;
        max-width: 100%;
        height: auto;
      }
      
      a{
        text-decoration: none;
      }
      
      svg{
        width: 16px;
        height: 16px;
      }
      
      ::-webkit-scrollbar {
          width: 15px;
        }
      
      ::-webkit-scrollbar-thumb {
          background-color: var(--button-background-color);
          border-radius: 15px;
        }
      
      
        @font-face {
          font-family: 'InterBlack';
          src: local('Inter'), local('Inter-Black'),
               url(${InterBlack}) format('truetype');
          font-weight: 900; 
          font-style: normal;
          font-display: swap;
        }
      
        @font-face {
          font-family: 'Inter';
          src: local('Inter'), local('Inter-Bold'),
               url(${InterBold}) format('truetype');
          font-weight: 600; 
          font-style: normal;
          font-display: swap;
        }
      
        @font-face {
          font-family: 'Inter';
          src: local('Inter'), local('Inter-Medium'),
               url(${InterMedium}) format('truetype');
          font-weight: 500; 
          font-style: normal;
          font-display: swap;
        }
        @font-face {
          font-family: 'Inter';
          src: local('Inter'), local('Inter-Regular'),
               url(${InterRegular}) format('truetype');
          font-weight: 400; 
          font-style: normal;
          font-display: swap;
        }
      

`;

export const Container = styled.div`
  padding-top: 24px;
  padding-left: 20px;
  padding-right: 20px;
  max-width: 335px;

  @media screen and (min-width: 768px) {
    padding-left: 32px;
    max-width: 614px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 28px;
    padding-left: 100px;
    max-width: 1087px;
  }
`;
