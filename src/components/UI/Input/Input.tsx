interface IInputProps {
  type: string,
  placeholder: string
}

const Input = ({ type, placeholder }: IInputProps) => {
  return <input type={type} placeholder={placeholder} />;
};

export default Input;
