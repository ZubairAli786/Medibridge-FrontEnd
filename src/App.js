import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PlayLists from "./pages/playLists/PlayLists";
import Home from "./pages/home/Home";
import Layout from "./pages/layout/Layout";
import Doctors from "./pages/doctors/Doctors";
import AboutUs from "./pages/about us/AboutUs";
import ContactUs from "./pages/contact us/ContactUs";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="playLists" element={<PlayLists />} />

            <Route path="doctors" element={<Doctors />} />
            <Route path="aboutUs" element={<AboutUs />} />

            <Route path="contactUs" element={<ContactUs />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
