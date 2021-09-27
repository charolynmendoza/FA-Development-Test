import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="App">
      {pageProps.response && <Header data={pageProps.response} />}
      <Component {...pageProps} />
      {pageProps.response && <Footer data={pageProps.response} />}
    </div>
  );
}

export default MyApp;
