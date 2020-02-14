import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';


export default class MyDocument extends Document {
    static getInitialProps({ renderPage }) {
          const styles = new ServerStyleSheet();
          const page = renderPage(App => props =>
              styles.collectStyles(<App {...props}/>)

            );

            const styleTags = styles.getStyleElement();
            return { ...page , styleTags };
    }

    render(){
        return(
              <html lang="en-CA">
                 <Head>{this.props.styleTags}</Head>
                  <body>
                        <Main/>
                        <NextScript/>
                  </body>
              </html>
        )
    }

}
