const Inputbox = ({
  name,
  id,
  autoComplete = "off",
  placeholder,
  className = "",
  disabled = false,
}) => {
  return (
    <input
      type="text"
      name={name}
      id={id}
      autoComplete={autoComplete}
      className={`input1 ${className || ""}`}
      placeholder={placeholder}
      disabled={disabled}
    />
  );
};

export default Inputbox;
