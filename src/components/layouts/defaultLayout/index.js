import Header from "../../header";
import Footer from "../../footer";

export default function DefaultLayout({ children }) {
  return (
    <div className="content">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
