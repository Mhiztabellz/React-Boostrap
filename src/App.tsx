import MyNavBar from "./layouts/nav-bar";
import HomePage from "./pages/home";
import Footer from "./layouts/footer";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutPage from "./pages/about";
import FaqPage from "./pages/faq";
import ContactPage from "./pages/contact";


function App() {
  return (

    <Router>
      <div className="App">
        <MyNavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/faq" element={<FaqPage/>} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App;