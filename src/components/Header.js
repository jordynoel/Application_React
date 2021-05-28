import PropTypes from "prop-types";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownMenu from "./DropdownMenu";

const Header = ({ title }) => {
  return (
    <header>
      <div className="nav">
        <h1>{title}</h1>
        <ul className="nav-items">
          <li>
            <a href="/">Research library</a>
          </li>
          <li>
            <a href="/addResearch">Add research</a>
          </li>
          <li>
            <a href="/counter">Counter</a>
          </li>
          <li>
            <DropdownMenu />
          </li>
        </ul>
      </div>
    </header>
  );
};

Header.defaultProps = {
  title: "Research Library",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
