import Layout from "@/components/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { usePathname } from "next/navigation";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }: AppProps) {
  const pathname = usePathname();

  const isLoginPage = pathname === "/";
  const isRegisterPage = pathname === "/register";
  return isLoginPage || isRegisterPage ? (
    <>
      <ToastContainer /> <Component {...pageProps} />
    </>
  ) : (
    <Layout>
      <ToastContainer />
      <Component {...pageProps} />
    </Layout>
  );
}
