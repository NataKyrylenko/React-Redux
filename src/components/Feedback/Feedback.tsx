
import Button from "components/Button/Button";
import { FeedbackContainer, FeedbackComponent, FeedbackCounter } from "./styles";
import { feedbackSliceActions, feedbackSliceSelectors } from "store/redux/feedback/feedbackSlice";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsDown, faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { pointer } from "@testing-library/user-event/dist/cjs/pointer/index.js";


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
        <FontAwesomeIcon icon={faThumbsUp} size="4x" style={{ color: 'blue', cursor: 'pointer' }} onClick={onLike} />
        <FeedbackCounter>{countLike}</FeedbackCounter>
      </FeedbackComponent>
      <FeedbackComponent>
      <FontAwesomeIcon icon={faThumbsDown} size="4x" style={{ color: 'blue', cursor: 'pointer' }} onClick={onDislike}/>
        <FeedbackCounter>{countDislike}</FeedbackCounter>       
      </FeedbackComponent>
      <FeedbackComponent>
        <Button name="Reset Results" onButtonClick={resetResult} />
      </FeedbackComponent>
      
      
    </FeedbackContainer>
  );
}

export default Feedback;
