import styled from "@emotion/styled";

interface isWeatherDataProps {
    isWeatherData: boolean
}

export const WeathersPageWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  height: fit-content;
  gap: 24px;
  width: 60%;
`;
export const WeatherButtonContainer = styled.div<isWeatherDataProps>`
  
  display: ${({ isWeatherData }) => (isWeatherData ? "flex" : "none")};
`