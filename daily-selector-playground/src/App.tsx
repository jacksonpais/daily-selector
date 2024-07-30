import { HelmetProvider } from "react-helmet-async";
import MainContent from "./components/MainContent/MainContent";

function App() {
  const helmetContext = {};

  return (
    <>
      <HelmetProvider context={helmetContext}>
        <MainContent />
      </HelmetProvider>
    </>
  );
}

export default App;
