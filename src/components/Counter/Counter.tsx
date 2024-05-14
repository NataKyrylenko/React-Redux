import Button from "components/Button/Button"
import { useState } from "react"
import { CounterProps } from "./types"
import {
  CounterComponent,
  ButtonControl,
  CounterElement,
  ButtonsWrapper,
} from "./styles"

function Counter() {
  const [count, setCount] = useState(0)

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
    setCount(prevValue => {
      const newValue = prevValue / 2
      return Math.round(newValue * 100) / 100
    })
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
