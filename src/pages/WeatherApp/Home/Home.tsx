import Input from "components/Input/Input"
import {
  ButtonsContainer,
  CityName,
  HomeWrapper,
  IconWrapper,
  InputButtonWrapper,
  TempWrapper,
  WeatherButtonWrapper,
  WeatherForm,
  WeatherImg,
  WeatherInfoContainer,
  WeatherInfoWrapper,
} from "./styles"

import { useAppDispatch, useAppSelector } from "store/hooks"
import {
  weatherSliceActions,
  weatherSliceSelectors,
} from "store/redux/weather/weather"
import { WeatherInfoData } from "store/redux/weather/types"
import ButtonWeather from "components/ButtonWeather/ButtonWeather"
import { useEffect } from "react"

function Home() {
  const dispatch = useAppDispatch()
  const { data, isLoading, error } = useAppSelector(
    weatherSliceSelectors.weather,
  )

  const getWeatherData = (e:any) => {
    e.preventDefault()
    const city = e.target.elements.city.value
    dispatch(weatherSliceActions.getWeatherData(city))
  }

  useEffect(() => {
    if (error) {
     return alert('Error response')
    }
  }, [error])

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
            <ButtonWeather name="Save" onButtonClick={() => {
              dispatch(weatherSliceActions.saveWeather(weatherObj))
            }}/>
          </WeatherButtonWrapper>
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
    <HomeWrapper>
      <WeatherForm onSubmit={getWeatherData}>
        <InputButtonWrapper>
          <Input placeholder="Enter city name" name="city" />
          <WeatherButtonWrapper>
            <ButtonWeather name="Search" disabled={isLoading}/>
          </WeatherButtonWrapper>
        </InputButtonWrapper>
        {weather}
      </WeatherForm>
    </HomeWrapper>
  )
}
export default Home;
