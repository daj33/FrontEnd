import Header from "../components/Header";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import { CookiesProvider } from "react-cookie";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CookiesProvider>
      <Header />
      <Component {...pageProps} />
    </CookiesProvider>
  );
}