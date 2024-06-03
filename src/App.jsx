import Navbar from "./navbar";
import Home from "./pages/home";
import Services from "./pages/services";
import Contact from "./pages/contact";
import { Routes, Route } from "react-router-dom";
import PhoneNumber from "./pages/contact/phone-number";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />}>
          <Route path="phone-number" element={<PhoneNumber />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
