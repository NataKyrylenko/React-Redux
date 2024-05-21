import Button from "components/Button/Button"
import {
  ActivityCard,
  ActivityRandomizerWrapper,
  ActivityText,
  ButtonContainer,
  SpinnerContainer,
} from "./styles"
import { useAppDispatch, useAppSelector } from "store/hooks"
import {
  activityRandomizerSliceActions,
  activityRandomizerSliceSelectors,
} from "store/redux/activityRandomizer/activityRandimizer"
import Spinner from "components/Spinner/Spinner"
import { useEffect } from "react"

function ActivityRandomizer() {
  const dispatch = useAppDispatch()
  
  const { data, status, error } = useAppSelector(
    activityRandomizerSliceSelectors.activitys,
  )

  const getActivity = () => {
    dispatch(activityRandomizerSliceActions.getActivityRandomizer())
  }

  const deleteAllActivity = () => {
    dispatch(activityRandomizerSliceActions.deleteAllActivity())
  }

  useEffect(() => {
    if(error){
      alert('Error network')
    }
  },[error])

  const activitys = data.map(activity => {
    const deleteActivityClick = () => {
      dispatch(activityRandomizerSliceActions.deleteActivity(activity.id))
    }

    return (
      <ActivityCard>
        <ActivityText key={activity.id}>{activity.activitys}</ActivityText>
        <ButtonContainer>
          <Button name="Delete Activity" onButtonClick={deleteActivityClick} />
        </ButtonContainer>
      </ActivityCard>
    )
  })

  return (
    <ActivityRandomizerWrapper>
      <ButtonContainer>
        <Button
          name="Get Activity"
          onButtonClick={getActivity}
          disabled={status === "loading"}
        />
      </ButtonContainer>

      <SpinnerContainer isActivity={status === "loading"}>
        <Spinner />
      </SpinnerContainer>

      {activitys}
      <ButtonContainer>
        {activitys.length > 0 && (
          <Button
            name="Delete all activitys"
            onButtonClick={deleteAllActivity}
          />
        )}
      </ButtonContainer>
    </ActivityRandomizerWrapper>
  )
}

export default ActivityRandomizer
