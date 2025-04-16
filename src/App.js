import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Pages/Navbar";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import BatchInfo from "./Pages/BatchInfo";
import ContactUs from "./Pages/ContactUs";
import Class8Batch from "./Pages/Classes/Class8Batch";
import Class9Batch from "./Pages/Classes/Class9Batch ";
import Class10Batch from "./Pages/Classes/Class10Batch";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App() {
  return (
    <Router>
      <Navbar/>
      <div className="pt-20 min-h-screen bg-white text-gray-800">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/batch" element={<BatchInfo />} />
          <Route path="/contact" element={<ContactUs/>} />
          <Route path="/batch/class8" element={<Class8Batch />} />
          <Route path="/batch/class9" element={<Class9Batch />} />
          <Route path="/batch/class10" element={<Class10Batch />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;
