import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login/Login";
import { Profile } from "./pages/profile/Profile";
import { Home } from "./pages/Home/Home";

function App() {
   return (
      <div className="App">
         <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/" element={<Home />} />
         </Routes>
      </div>
   );
}

export default App;
