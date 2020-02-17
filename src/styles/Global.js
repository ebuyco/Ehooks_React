import { createGlobalStyle } from 'styled-components';

const theme = {
  black: '#393939',
  grey: '#3A3A3A',
  white: '#ffffff',
  base: '#0072B9',
  maxWidth: '100%',
};

const GlobalStyles = createGlobalStyle`
 @font-face {
  font-family: 'Raleway-Regular';
  src: url('../../public/static/Raleway-Regular.ttf');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'Raleway-Bold';
  src: url('../../public/static/Raleway-Bold.ttf');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'Roboto-Regular';
  src: url('../../public/static/Roboto-Regular.ttf');
  font-weight: normal;
  font-style: normal;
}


            *,
          *::before,
          *::after {
            box-sizing: border-box;
          }


          ul[class],
          ol[class] {
            padding: 0;
          }


          body,
          h1,
          h2,
          h3,
          h4,
          p,
          ul[class],
          ol[class],
          li,
          figure,
          figcaption,
          blockquote,
          dl,
          dd {
            margin: 0;
          }


          body {
            min-height: 100vh;
            scroll-behavior: smooth;
            text-rendering: optimizeSpeed;
            line-height: 1.5;
            font-family: 'Roboto-Regular';
            background-color: ${theme.base};
            background-image: url("data:image/svg+xml,%3Csvg width='20' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 21.184c.13.357.264.72.402 1.088l.661 1.768C4.653 33.64 6 39.647 6 50c0 10.271-1.222 15.362-4.928 24.629-.383.955-.74 1.869-1.072 2.75v6.225c.73-2.51 1.691-5.139 2.928-8.233C6.722 65.888 8 60.562 8 50c0-10.626-1.397-16.855-5.063-26.66l-.662-1.767C1.352 19.098.601 16.913 0 14.85v6.335zm20 0C17.108 13.258 16 8.077 16 0h2c0 5.744.574 9.951 2 14.85v6.334zm0 56.195c-2.966 7.86-4 13.123-4 22.621h2c0-6.842.542-11.386 2-16.396v-6.225zM6 0c0 8.44 1.21 13.718 4.402 22.272l.661 1.768C14.653 33.64 16 39.647 16 50c0 10.271-1.222 15.362-4.928 24.629C7.278 84.112 6 89.438 6 100h2c0-10.271 1.222-15.362 4.928-24.629C16.722 65.888 18 60.562 18 50c0-10.626-1.397-16.855-5.063-26.66l-.662-1.767C9.16 13.223 8 8.163 8 0H6z' fill='%23fff' fill-rule='nonzero' fill-opacity='.1' opacity='.349'/%3E%3C/svg%3E%0A");
            background-size: 15px;
          }


          ul[class],
          ol[class] {
            list-style: none;
          }

          a:not([class]) {
            text-decoration-skip-ink: auto;
          }


          img {
            max-width: 100%;
            display: block;
          }


          article > * + * {
            margin-top: 1em;
          }


          input,
          button,
          textarea,
          select {
            font: inherit;
          }


          @media (prefers-reduced-motion: reduce) {
            * {
              animation-duration: 0.01ms !important;
              animation-iteration-count: 1 !important;
              transition-duration: 0.01ms !important;
              scroll-behavior: auto !important;
            }
          }
      a {
        text-decoration: none;
        color: ${theme.black};
      }
      button {   font-family: 'Roboto-Regular'; }
`;

export default GlobalStyles;