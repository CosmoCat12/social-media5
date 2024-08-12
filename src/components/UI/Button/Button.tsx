interface IButton {
  text: string,
  type: "submit" | "reset" | "button" | undefined,
  disabled?: boolean,
  onClick?: () => void,
}

const Button = ({text, disabled, type, onClick}: IButton) => {
  return (
    <button type={type} disabled={disabled} onClick={onClick}>{text}</button>
  )
}

export default Button