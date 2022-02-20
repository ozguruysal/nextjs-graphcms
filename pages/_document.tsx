import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@500;600;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="text-base antialiased font-sans bg-white text-gray-700">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
