import Header from "../../header";
import Footer from "../../footer";

export default function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
