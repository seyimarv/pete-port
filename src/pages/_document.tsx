import Document, { DocumentContext, Html, Head, Main, NextScript, DocumentInitialProps } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { ReactElement } from 'react';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [
          ...(Array.isArray(initialProps.styles) 
            ? initialProps.styles 
            : [initialProps.styles]),
          ...sheet.getStyleElement(),
        ] as ReactElement[],
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          {/* You can add meta tags, fonts, etc. here */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <style>{`
            body {
              background-color: #000000;
              margin: 0;
              padding: 0;
            }
          `}</style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
