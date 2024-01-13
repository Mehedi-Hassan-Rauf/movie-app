import { FiMenu } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Nav = () => {
  const { user, signOutUser } = UserAuth();
  const navigate = useNavigate();
  const handleSignOut = () => {
    try {
      signOutUser();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  const { pathname } = useLocation();
  //console.log(user);
  return (
    <div
      className={`nav fixed z-10 top-0 flex justify-between w-full md:w-screen h-fit py-5`}
    >
      <div className=" md:w-1/12 flex justify-center ">
        <button className="text-cyan-400 text-3xl bg-neutral-800 p-1 rounded-xl">
          <Link to={"/"}>
            <FiMenu />
          </Link>
        </button>
      </div>
      <div className=" md:w-6/12 flex sm:justify-between bg-neutral-900 opacity-40 transition duration-300 hover:opacity-100 rounded-full">
        <input
          type="text"
          className="bg-transparent w-10/12 rounded-full outline-none text-white text-center"
        />
        <button className="text-cyan-500 w-1/12 text-xl cursor-pointer">
          <FaSearch />
        </button>
      </div>
      <div className="md:w-2/12 relative flex justify-evenly">
        {user?.email ? (
          <>
            <button className="px-2 py-2 bg-neutral-800 text-cyan-400 border border-cyan-500 flex items-center rounded-xl">
              <Link to={"/account"}>Account</Link>
            </button>
            <button
              onClick={handleSignOut}
              className="px-2 py-2 bg-neutral-800 text-cyan-400 border border-cyan-500 flex items-center rounded-xl"
            >
              Sign Out
            </button>
          </>
        ) : (
          <>
            <button className="px-2 py-2 bg-neutral-800 text-cyan-400 border border-cyan-500 flex items-center rounded-xl">
              <Link to={"/signIn"}>Sign In</Link>
            </button>
            <button className="px-2 py-2 bg-neutral-800 text-cyan-400 border border-cyan-500 flex items-center rounded-xl">
              <Link to={"/signUp"}>Sign Up</Link>
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Nav;
