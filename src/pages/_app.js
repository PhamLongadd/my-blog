import DefaultLayout from "../components/layouts/defaultLayout";
import "../style/globals.css";

export default function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout || DefaultLayout;
  console.log(Layout);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
