import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <html>
        <Head>{this.props.styleTags}</Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default MyDocument;

// What exactly is this page doing again?:
// getInitialProps() lifestyle method & Custom Document:
// -Rendered on the serverside, and commonly used to implement server side rendering in css-in-js
// Fetches the CSS before the HTML is sent from the server to the browser
// import the Document > import ServerStyleSheet > renders app and crawls the components -> collects the styles and compiles them into one and dumps onto page
// getInitialProps() runs before any of the rendering happens

// Overall, this walks across ALL components, and gathers the styles and loads them before the page renders
