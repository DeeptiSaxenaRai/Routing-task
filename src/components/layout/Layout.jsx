import { Outlet, Link, NavLink } from "react-router-dom";
import style from "./Layout";

function Layout() {
  return (
    <div>
      <div>
        <h1>To Show the Routing</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="about">About</Link>
          <Link to="Contact">Contact</Link>
        </nav>
      </div>
      <main>
        <Outlet />
      </main>
      <footer>
        <h5>Contact Information</h5>
      </footer>
    </div>
  );
}

export default Layout;
