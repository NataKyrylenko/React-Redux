import { useAppDispatch, useAppSelector } from "store/hooks"
import {
  weatherSliceActions,
  weatherSliceSelectors,
} from "store/redux/weather/weather"
import { WeatherButtonContainer, WeathersPageWrapper } from "./styles"
import { ButtonsContainer, CityName, IconWrapper, TempWrapper, WeatherImg,WeatherButtonWrapper, WeatherInfoContainer, WeatherInfoWrapper } from "../Home/styles"
import { WeatherInfoData } from "store/redux/weather/types"
import ButtonWeather from "components/ButtonWeather/ButtonWeather"

function Weather() {
    const { data, isLoading, error } = useAppSelector(
        weatherSliceSelectors.weather,
      )    
  const dispatch = useAppDispatch()

  const deleteAllCards = () => {
    dispatch(weatherSliceActions.deleteAllCards())
  }

  const weather = data.map((weatherObj: WeatherInfoData, index) => {
    return (
      <WeatherInfoWrapper key={weatherObj.id}>
        <WeatherInfoContainer>
          <TempWrapper>
            {weatherObj.temp}
            <CityName>{weatherObj.cityName}</CityName>
          </TempWrapper>
          <IconWrapper>
            <WeatherImg src={weatherObj.icon} alt="Weather Icon" />
            <WeatherImg src={weatherObj.icon} alt="Weather Icon" />
            <WeatherImg src={weatherObj.icon} alt="Weather Icon" />
          </IconWrapper>
        </WeatherInfoContainer>
        <ButtonsContainer>
          <WeatherButtonWrapper>
            <ButtonWeather name="Delete" onButtonClick={() => {
              dispatch(weatherSliceActions.deleteWeather(weatherObj.id))
            }}/>
          </WeatherButtonWrapper>
        </ButtonsContainer>
      </WeatherInfoWrapper>
    )
  })

  return (
    <WeathersPageWrapper>
      {weather}
      <WeatherButtonContainer isWeatherData = {!!weather.length}>
            <ButtonWeather name="Delete All Cards" onButtonClick={deleteAllCards}/>
          </WeatherButtonContainer>
    </WeathersPageWrapper>
  )
}

export default Weather
