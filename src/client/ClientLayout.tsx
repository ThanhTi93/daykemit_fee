import { Outlet } from "react-router-dom";
import Footer from "./layouts/Footer";
import NavBar from "./layouts/NavBar";


export default function ClientLayout() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}
