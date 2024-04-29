import { FaHome, FaReadme, FaSearch, FaSignInAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl">
            <span className="text-slate-500">MERN</span>
            <span className="text-slate-700">Estate</span>
          </h1>
        </Link>
        <form className="bg-slate-100 p-3 rounded-lg flex items-center">
          <input
            type="search"
            placeholder="Search..."
            className="bg-transparent outline-none  w-28 sm:w-64"
          />
          <FaSearch className="text-slate-600" />
        </form>
        <ul className="flex gap-4">
          <Link to="/">
            <li className="hidden sm:inline text-slate-700">
              <div className="hover:underline flex flex-col items-center">
                <FaHome />
                Home
              </div>
            </li>
          </Link>
          <Link to="/about">
            <li className="hidden sm:inline text-slate-700">
              <div className="hover:underline flex flex-col items-center">
                <FaReadme />
                About
              </div>
            </li>
          </Link>
          {currentUser.user ? (
            <Link to="/profile">
              <img
                className="rounded-full h-10 w-10 object-cover shadow-blue-600 shadow-md"
                src={currentUser.user.avator}
                alt="profile image"
              />
            </Link>
          ) : (
            <Link to="/sign-in">
              <li className="text-slate-700">
                <div className="hover:underline flex flex-col items-center">
                  <FaSignInAlt />
                  Sign In
                </div>
              </li>
            </Link>
          )}
        </ul>
      </div>
    </header>
  );
}
