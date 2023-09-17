import { Link } from "react-router-dom";
import { useContext } from "react";
import DataContext from "../context/DataContext";

const Nav = () => {
  const { search, setSearch } = useContext(DataContext);
  return (
    <nav>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          id="search"
          placeholder="Search post..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      <ul>
        <li>
          <Link to="/" className="link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/post" className="link">
            Post
          </Link>
        </li>
        <li>
          <Link to="/about" className="link">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
