import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <Router>
      <div className={`flex flex-col min-h-screen ${theme}`}>
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
      <ToastContainer 
        position="top-right" 
        autoClose={3000}
        theme={theme === 'dark' ? 'dark' : 'light'}
      />
    </Router>
  );
}

export default App;