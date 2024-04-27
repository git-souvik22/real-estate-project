import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function Private() {
  const { currentUser } = useSelector((state) => state.user);
  return currentUser.user ? <Outlet /> : <Navigate to={"/sign-in"} />;
}
