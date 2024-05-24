import { createAppSlice } from "store/createAppSlice"
import { WeatherInfoData, weatherSliceState } from "./types"
import { v4 } from "uuid"
import { PayloadAction } from "@reduxjs/toolkit"

const weatherInitialState: weatherSliceState = {
  data: [],
  isLoading: false,
  error: undefined, 
}

const APP_ID = "98a15a296a4e42da4b093ad3c1e8a315"

export const weatherSlice = createAppSlice({
  name: "WEATHER_APP",
  initialState: weatherInitialState,
  reducers: create => ({
    getWeatherData: create.asyncThunk(
      async (city: string, thunkApi) => {
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APP_ID}`
        const response = await fetch(apiUrl)
        const result = await response.json()
        console.log(result)

        if (!response.ok) {
          return thunkApi.rejectWithValue(result)
        } else {
          return result
        }
      },
      {
        pending: (state: weatherSliceState) => {
          state.isLoading = true
          state.error = undefined
        },
        fulfilled: (state: weatherSliceState, action: any) => {
          state.isLoading = false
          state.data = [
            ...state.data,
            {
              id: v4(),
              temp:`${Math.round(action.payload?.main.temp - 273.15)}°C`,
              icon: `http://openweathermap.org/img/w/${action.payload?.weather[0].icon}.png`,
              cityName: action.payload?.name,
            },
          ]
        },
        rejected: (state: weatherSliceState, action: any) => {
          state.isLoading = false
          state.error = action.payload
        },
      },
    ),
    saveWeather: create.reducer(
      (state: weatherSliceState, action: PayloadAction<WeatherInfoData>) => {
        state.data = [...state.data, action.payload]
      },
    ),
    deleteWeather: create.reducer(
      (state: weatherSliceState, action: PayloadAction<string>) => {
        state.data = state.data.filter((weatherObj:WeatherInfoData) => weatherObj.id !== action.payload)
      },
    ),
    deleteAllCards: create.reducer(() => weatherInitialState),
  }),
  selectors: {
    weather: (state: weatherSliceState) => state
  }
});

export const weatherSliceActions = weatherSlice.actions;
export const weatherSliceSelectors = weatherSlice.selectors;

