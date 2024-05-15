import Button from "components/Button/Button";
import { useState } from "react";
import {
  CounterComponent,
  ButtonControl,
  CounterElement,
  ButtonsWrapper,
} from "./styles";

function Counter() {
  const [count, setCount] = useState<number>(0);

  const onMinusClick = () => {
    setCount(prevValue => prevValue - 1)
  }
  const onPlusClick = () => {
    setCount(prevValue => prevValue + 1)
  }
  const onMultiplyClick = () => {
    setCount(prevValue => prevValue * 2)
  }
  const onDivideClick = () => {
    setCount(prevValue => Number((prevValue / 2).toFixed(2)))
  }

  return (
    <CounterComponent>
      <CounterElement>{count}</CounterElement>
      <ButtonsWrapper>
        <ButtonControl>
          <Button onButtonClick={onPlusClick} name="+" />
        </ButtonControl>
        <ButtonControl>
          <Button onButtonClick={onMinusClick} name="-" />
        </ButtonControl>
        <ButtonControl>
          <Button onButtonClick={onMultiplyClick} name="*" />
        </ButtonControl>
        <ButtonControl>
          <Button onButtonClick={onDivideClick} name="/" />
        </ButtonControl>
      </ButtonsWrapper>
    </CounterComponent>
  )
}

export default Counter;
