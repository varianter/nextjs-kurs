import React from "react";
import "./styles.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <React.StrictMode>
      <Component {...pageProps} />
    </React.StrictMode>
  );
}
