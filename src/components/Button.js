const Button = ({ color, text }) => {
  return (
    <button className="button" style={{ backgroundColor: color }}>
      {text}
    </button>
  );
};

export default Button;
