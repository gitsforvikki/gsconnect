import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./components/Home";
import Festivals from "./pages/Festivals";
import Gallery from "./pages/Gallery";
import Sports from "./pages/Sports";
import Worships from "./pages/Worships";
import { routes } from "./routes";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path={routes.FESTIVALS} element={<Festivals />} />
        <Route path={routes.GALLERY} element={<Gallery />} />
        <Route path={routes.SPORTS} element={<Sports />} />
        <Route path={routes.WORSHIPS} element={<Worships />} />
        {/* <Route path={routes.CONTACT} element={<Contact />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
