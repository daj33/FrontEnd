import Header from "../components/Header";
import type { AppProps } from "next/app";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* App 파일에 컴포넌트 넣으면 모든 페이지에 자동으로 배치됨 */}
      <Header />
      <Component {...pageProps} />
    </>
  );
}