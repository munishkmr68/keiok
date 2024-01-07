const Inputbox = ({
  name,
  id,
  autocomplete,
  placeholder,
  className,
  disabled,
}) => {
  return (
    <input
      type="text"
      name={name}
      id={id}
      autocomplete={autocomplete}
      className={`input1 ${className || ""}`}
      placeholder={placeholder}
      disabled={disabled}
    />
  );
};

export default Inputbox;
