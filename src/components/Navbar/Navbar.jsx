import { Link } from "react-router";
import "./Navbar.scss";

function Navbar() {
  return (
    <nav className="navbar">

      {/* Brand */}
      <Link to="/" className="navbar__brand">
        THE INDIA YOU NEVER MET
      </Link>


      {/* Navigation */}
      <div className="navbar__links">

        <Link
          to="/explore"
          className="navbar__link"
        >
          EXPLORE
        </Link>

        

        <Link
          to="/journal"
          className="navbar__link"
        >
          JOURNAL
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;