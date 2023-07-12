import Header from "../../header";
import Footer from "../../footer";
import { SearchProvider } from "../../header/searchContext";

export default function DefaultLayout({ children }) {
  return (
    <div>
      <SearchProvider>
        <Header />
        {children}
        <Footer />
      </SearchProvider>
    </div>
  );
}
