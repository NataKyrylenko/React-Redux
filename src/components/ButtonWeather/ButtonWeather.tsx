import { StyledButton } from "./styles"
import { ButtonProps } from "./types"

function ButtonWeather({
  name,
  type = "button",
  disabled = false,
  onButtonClick,
}: ButtonProps) {
  return (
    <StyledButton disabled={disabled} onClick={onButtonClick}>
      {name}
    </StyledButton>
  )
}

export default ButtonWeather;
