import React from "react";

export default function MyApp({ Component, pageProps }) {
  return (
    <React.StrictMode>
      <Component {...pageProps} />
    </React.StrictMode>
  );
}
