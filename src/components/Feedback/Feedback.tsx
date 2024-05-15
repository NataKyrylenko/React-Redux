
import Button from "components/Button/Button";
import { FeedbackContainer, FeedbackComponent, FeedbackCounter } from "./styles";
import { feedbackSliceActions, feedbackSliceSelectors } from "store/redux/feedback/feedbackSlice";
import { useAppDispatch, useAppSelector } from "store/hooks";

function Feedback() {

  const countLike = useAppSelector(feedbackSliceSelectors.countLike);
  const countDislike = useAppSelector(feedbackSliceSelectors.countDislike);

  const dispatch = useAppDispatch();

  const onLike = () => {
    dispatch(feedbackSliceActions.addLike())
  }
  const onDislike = () => {
    dispatch(feedbackSliceActions.addDislike())
  }
 const resetResult = () => {
    dispatch(feedbackSliceActions.resetAll())
  }
  
  return (
    <FeedbackContainer>
      <FeedbackComponent>
        <Button name="Like" onButtonClick={onLike} />
        <FeedbackCounter>{countLike}</FeedbackCounter>
      </FeedbackComponent>
      <FeedbackComponent>
        <Button name="Dislike" onButtonClick={onDislike} />
        <FeedbackCounter>{countDislike}</FeedbackCounter>       
      </FeedbackComponent>
      <FeedbackComponent>
        <Button name="Reset Results" onButtonClick={resetResult} />
      </FeedbackComponent>
    </FeedbackContainer>
  );
}

export default Feedback;
