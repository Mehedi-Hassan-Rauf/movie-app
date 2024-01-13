import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Account from "./pages/Account";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import AuthContextProviderMain from "./context/AuthContext";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const App = () => {
  return (
    <AuthContextProviderMain>
      <div className="app max-w-screen max-h-fit flex flex-col gap-10 items-center">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/account" element={<Account />} />
        </Routes>
        <Footer />
      </div>
    </AuthContextProviderMain>
  );
};

export default App;
