import { Route, Routes } from "react-router-dom";
import { CreatorHome } from "./pages/CreatorHome";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { PlayerHome } from "./pages/PlayerHome";
import { SignUp } from "./pages/SignUp";
import { Story } from "./pages/Story";
import { Profile } from "./pages/Profile";
import SignOut from "./pages/SignOut";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/story" element={<Story />} />
        {/* User Routes */}
        <Route path="/creator" element={<CreatorHome />} />
        <Route path="/player" element={<PlayerHome />} />
        <Route path="/profile" element={<Profile />} />
        {/* Test Routes */}
        {/* <Route path="/playersheet" element={<PlayerSheet />} /> Inactive atm / need to reimport */}
        {/* Authentication */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signout" element={<SignOut />} />
      </Routes>
    </>
  );
}

export default App;
