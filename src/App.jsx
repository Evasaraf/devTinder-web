import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Body from "./Body";

function App() {
  return (
    <>
    <BrowserRouter basename = "/">
     <Routes> 
      <Route path = "/" element={Body}/>
     </Routes>
     </BrowserRouter>

     <  NavBar />
    </>
  );
}

export default App;