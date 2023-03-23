import { HashRouter, Route, Routes } from "react-router-dom"; 
import CommingSoon from "./Components/CommingSoon";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";
function App() {
  return (
     <HashRouter>
      <Routes>
        <Route path="/" element={
          <>
          <Home />
          </>
        }></Route>
         <Route path="/portfolio" element={
          <>
          <Portfolio />
          </>
        }></Route>
         <Route path="/commingSoon" element={
          <>
          <CommingSoon />
          </>
        }></Route>
      </Routes>
     </HashRouter>
  );
}

export default App;
