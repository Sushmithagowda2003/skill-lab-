import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Layout from "./component/layout";
import Home from "./component/homepage";
import Menu from "./component/menu";
import About from "./component/about";
import NoPage from "./component/nopage";
const App=()=>{
  return(
   <>
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="menu" element={<Menu />} />
          <Route path="aboutus" element={<About />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
   </>
  )
}
export default App;