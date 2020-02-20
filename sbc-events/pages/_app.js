import App from 'next/app';
import Page from '../components/Page';

class myApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Page>
        <Component {...pageProps} />
      </Page>
    );
  }
}

export default myApp;

// Component is going to be events or index
