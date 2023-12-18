interface TextInputProps {
  name: string;
  id: string;
  autoComplete?: string;
  placeholder?: string;
  className?: string;
  disabled?: boolean; // Add disabled prop
}

const Inputbox: React.FC<TextInputProps> = ({
  name,
  id,
  autoComplete,
  placeholder,
  className,
  disabled, // Destructure disabled prop
}) => {
  return (
    <input
      type="text"
      name={name}
      id={id}
      autoComplete={autoComplete}
      className={`input1 ${className || ""}`}
      placeholder={placeholder}
      disabled={disabled} // Include disabled prop
    />
  );
};

export default Inputbox;
