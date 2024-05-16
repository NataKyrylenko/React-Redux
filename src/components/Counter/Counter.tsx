import Button from "components/Button/Button";
import {
  CounterComponent,
  ButtonControl,
  CounterElement,
  ButtonsWrapper,
} from "./styles";
import { counterSliceActions, counterSliceSelectors } from "store/redux/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "store/hooks";

function Counter() {

  const count = useAppSelector(counterSliceSelectors.count)
  //9. Создать функцию dispatch, которая диспачить экшен
  const dispatch = useAppDispatch();

  console.log(counterSliceActions)

  const multiplyValue = 5;

  //10. Создаём функции, которые будут диспатчить определённые экшены в
  // ответ на действия эшен криэйтеров (кнопок)
  const onPlus = () => {
    // 11. Диспатчим экшен, для вызова редьюсера, который отвечает з алогику увеличения каунтера на 1
    dispatch(counterSliceActions.add())
  }

  const onMinus = () => {
    dispatch(counterSliceActions.minus())
  }

  const onMultiply = () => {
    dispatch(counterSliceActions.multiply(multiplyValue))
  }

  const onDivide = () => {
    dispatch(counterSliceActions.divine())
  }
  

  return (
    <CounterComponent>
      <CounterElement>{count}</CounterElement>
      <ButtonsWrapper>
        <ButtonControl>
          <Button onButtonClick={onPlus} name="+" />
        </ButtonControl>
        <ButtonControl>
          <Button onButtonClick={onMinus} name="-" />
        </ButtonControl>
        <ButtonControl>
          <Button onButtonClick={onMultiply} name="*" />
        </ButtonControl>
        <ButtonControl>
          <Button onButtonClick={onDivide} name="/" />
        </ButtonControl>
      </ButtonsWrapper>
    </CounterComponent>
  )
}

export default Counter;
