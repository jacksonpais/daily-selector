import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./container/Home/HomePage";
import { HelmetProvider } from "react-helmet-async";
import { Route, Routes } from "react-router-dom";

function App() {
  const helmetContext = {};
  return (
    <>
      <HelmetProvider context={helmetContext}>
        <div className="app">
          <Header />
          <main className="content">
            <Routes>
              <Route path="/" element={<HomePage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </HelmetProvider>
    </>
  );
}

export default App;
