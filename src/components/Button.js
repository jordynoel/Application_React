const Button = ({ color, text }) => {
  return (
    <a
      className="button"
      href="/addResearch"
      style={{ backgroundColor: color, textDecorationLine: "none" }}
    >
      {text}
    </a>
  );
};

export default Button;
