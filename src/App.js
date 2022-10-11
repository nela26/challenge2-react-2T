//llamando a AppProvider//
import AppProvider from "./Context";

//llamando a Router//
import { BrowserRouter, Routes, Route } from "react-router-dom";

//llamando a view///
import Home from "./views/Home";
import Favoritos from "./views/Favoritos";

//llamando componentes//
import Navbar from "./components/Navbar";

export default function App() {

  return (
    <div className="App">
      <AppProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favoritos" element={<Favoritos />} />
          </Routes>
        </BrowserRouter>
      </AppProvider>
    </div>
  );
}
