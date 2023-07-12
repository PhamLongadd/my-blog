import Header from "../../header";
import Footer from "../../footer";
import Submit from "../../submit";
import { SearchProvider } from "../../header/searchContext";

export default function CustomLayout({ children }) {
  return (
    <div>
      <SearchProvider>
        <Header />
        {children}
        <Submit />
        <Footer />
      </SearchProvider>
    </div>
  );
}
