import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer.tsx";
import Header from "./Components/Header.tsx";
import About from "./Pages/About.tsx";
import Home from "./Pages/Home.tsx";
import PepperPage from "./Pages/PepperPage.tsx";
import PeppersTypePage from "./Pages/PeppersTypePage.tsx";
import ProfilePage from "./Pages/ProfilePage.tsx";
import SpecificationPage from "./Pages/SpecificationPage.tsx";

function App() {
  return (
    <BrowserRouter>
      <Header className={" bg-white font-josefin"} />
      <div
        className={"bg-force flex-grow h-[87vh] overflow-y-scroll font-cinzel text-white"}
        id={"root"}
      >
        <Routes>
          <Route path="" element={< Home />} />
          < Route path="/" element={< Home />} />
          < Route path="/about" element={< About />} />
          < Route path="/profile" element={< ProfilePage />} />
          {/* < Route path="/pepper" element={< AllPeppers />} /> */}
          < Route path="/pepper/:pepperUuid" element={< PepperPage />} />
          < Route path="/specification/:specification" element={< SpecificationPage />} />
          < Route path="/peppers/:pepperType" element={< PeppersTypePage />} />
        </Routes>
      </div>
      <Footer className={"bg-opacity-10 bg-white mt-auto"} />
    </BrowserRouter>
  );
}

export default App;
