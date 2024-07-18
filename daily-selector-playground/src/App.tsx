import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./container/Home/HomePage";

function App() {
  return (
    <>
      <div className="app">
        <Header />
        <main className="content">
          <HomePage />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
