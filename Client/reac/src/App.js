import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Login } from "./pages/login/Login";
import { Profile } from "./pages/profile/Profile";

function App() {
   return (
      <div className="App">
         <Routes>
            <Route path="/login" element={<Login />}  />
            <Route path="/profile" element={<Profile />}  />
         </Routes>
      </div>
   );
}

export default App;
