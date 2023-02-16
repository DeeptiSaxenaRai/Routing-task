import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import LandingPage from "./routes/LandingPage";
import AboutPage from "./routes/about/AboutPage";
import ContactPage from "./routes/contact/ContactPage";

function App() {
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<LandingPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="about" element={<AboutPage />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
