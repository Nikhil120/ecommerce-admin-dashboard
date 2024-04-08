import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import "@/styles/globals.css";
import Layout from "@/components/Layout";
import LoadingBar from "react-top-loading-bar";
export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      setProgress(40);
    });
    router.events.on("routeChangeComplete", () => {
      setProgress(100);
    });
    router.events.on("routeChangeError", () => {
      setProgress(100);
    });
  }, [router]);

  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }
  return (
    <>
      <LoadingBar
        color="#252828"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
        waitingTime="400"
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
