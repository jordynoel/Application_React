import PropTypes from "prop-types";

const Header = ({ title }) => {
  return (
    <header>
      <div className="nav">
        <h1>{title}</h1>
        <ul className="nav-items">
          <li>
            <a href="#">Research library</a>
          </li>
          <li>
            <a href="#">Add research</a>
          </li>
          <li>
            <a href="#">Dropdown</a>
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
