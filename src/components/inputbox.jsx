const Inputbox = ({
  name,
  id,
  autoComplete,
  placeholder,
  className,
  disabled,
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
