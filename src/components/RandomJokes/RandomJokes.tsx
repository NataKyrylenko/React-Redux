import Button from "components/Button/Button"
import { ButtonContainer, JokeCard, RandomJokeWrapper } from "./styles"

function RandomJokes() {
  const getJoke = () => {}
  return (
    <RandomJokeWrapper>
      <JokeCard>
        <ButtonContainer>
          <Button name="Get Joke" onButtonClick={getJoke} />
        </ButtonContainer>
      </JokeCard>
    </RandomJokeWrapper>
  )
}

export default RandomJokes
