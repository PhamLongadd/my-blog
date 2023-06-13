import Header from "../../header";
import Footer from "../../footer";
import Submit from "../../submit";

export default function CustomLayout({ children }) {
  return (
    <div className="content">
      <Header />
      {children}
      <Submit />
      <Footer />
    </div>
  );
}
