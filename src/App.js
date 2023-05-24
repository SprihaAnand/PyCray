import "./App.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Js/Navbar";
import Home from "./components/Js/Home";
import ApiDocs from "./components/Js/ApiDocs";
import GetStarted from "./components/Js/GetStarted";
import Faq from "./components/Js/Faq";
import TermsOS from "./components/Js/TermsOS";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apidocs" element={<ApiDocs />} />
        <Route path="/getstarted" element={<GetStarted />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/tos" element={<TermsOS />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
