// AI Generated template with reference to Daisy Component
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar bg-base-100">
      <div className="navbar-start">
        <NavLink to="/" className="btn btn-ghost normal-case text-xl">
          Adventurarr
        </NavLink>
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink
              exact
              to="/"
              className="text-primary hover:text-primary-focus"
              activeClassName="active"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/story"
              className="text-primary hover:text-primary-focus"
              activeClassName="active"
            >
              Story
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <NavLink to="/signup" className="btn">
          Sign Up
        </NavLink>
        <NavLink to="/login" className="btn">
          Login
        </NavLink>
      </div>
    </nav>
  );
}
