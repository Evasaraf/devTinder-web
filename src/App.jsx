import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";

function App() {
  return (
    <>
    <BrowserRouter basename = "/">
     <Routes> 
      <Route path = "/" element={<div> Base page</div>}/>
      <Route path = "/login" element={<div> Login page</div>}/>
      <Route path = "/test" element={<div> test page</div>}/>
     </Routes>
     </BrowserRouter>

     <  NavBar />
      <h1 className="bg-red-500 text-white text-3xl font-bold p-10">
        hello eva
      </h1>
    </>
  );
}

export default App;