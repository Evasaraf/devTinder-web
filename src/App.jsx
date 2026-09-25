import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from "./Body";
import Login from "./Login";
import Profile from "./Profile";
import NavBar from "./NavBar";
import Feed from "./Feed";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

function App() {
  return (
    <Provider store={appStore}>
      <BrowserRouter basename="/">
        <NavBar />
        <Routes>
          <Route path="/" element={<Body />}>
            <Route index element={<Feed />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;