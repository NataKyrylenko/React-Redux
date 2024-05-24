import Input from "components/Input/Input"
import {
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
import Button from "components/Button/Button"
import { useAppDispatch, useAppSelector } from "store/hooks"
import {
  weatherSliceActions,
  weatherSliceSelectors,
} from "store/redux/weather/weather"
import { WeatherInfoData } from "store/redux/weather/types"

function Home() {
  const dispatch = useAppDispatch()
  const { data, isLoading, error } = useAppSelector(
    weatherSliceSelectors.weather,
  )

  const getWeatherData = e => {
    e.preventDefault()
    const city = e.target.elements.city.value
    dispatch(weatherSliceActions.getWeatherData(city))
  }

  const weather = data.map((weatherObj: WeatherInfoData, index) => {
    // const saveWeather = () => {
    //   dispatch(weatherSliceActions.saveWeather(weatherObj.id))
    // }
    // const deleteWeather = () => {
    //   dispatch(weatherSliceActions.deleteWeather())
    // }

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
        <WeatherButtonWrapper>
            <Button name="Save" onButtonClick={() => {
              dispatch(weatherSliceActions.saveWeather(weatherObj))
            }}/>
          </WeatherButtonWrapper>
          <WeatherButtonWrapper>
            <Button name="Delete" onButtonClick={() => {
              dispatch(weatherSliceActions.deleteWeather(weatherObj.id))
            }}/>
          </WeatherButtonWrapper>
      </WeatherInfoWrapper>
    )
  })

  return (
    <HomeWrapper>
      <WeatherForm onSubmit={getWeatherData}>
        <InputButtonWrapper>
          <Input placeholder="Enter city name" name="city" />
          <WeatherButtonWrapper>
            <Button name="Search" />
          </WeatherButtonWrapper>
        </InputButtonWrapper>
        {/* {isLoading && <Spinner />}
          {!!weatherInfo && (
            <WeatherInfo
              temp={weatherInfo?.temp}
              icon={weatherInfo?.icon}
              cityName={weatherInfo?.cityName}
            />)}
          {!!weatherError && (<WeatherError error={weatherError} />)} */}
        {weather}
      </WeatherForm>
    </HomeWrapper>
  )
}
export default Home
