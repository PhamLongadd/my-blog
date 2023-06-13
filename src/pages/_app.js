import DefaultLayout from "../components/layouts/defaultLayout";
import "../style/globals.css";

export default function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout || DefaultLayout;

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
