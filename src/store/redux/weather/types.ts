export interface WeatherInfoData {
    id: string,
    temp: string;
    icon: string;
    cityName: string
  }

// export interface WeatherErrorData {
//     code: string;
//     message: string
//   }


export interface weatherSliceState {
    data: WeatherInfoData[],
    isLoading: boolean,
    error: any
    //error: WeatherErrorData[],
    
}