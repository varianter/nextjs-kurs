import React from "react";
import { Layout } from "src/components/layout";
import "./styles.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <React.StrictMode>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </React.StrictMode>
  );
}
