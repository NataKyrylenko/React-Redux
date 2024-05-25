import styled from "@emotion/styled"

export const HomeWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  
`;

export const WeatherForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 709px;
  gap: 60px;
  margin-top: 140px;
`;

export const InputButtonWrapper = styled.div`
  display: flex;
  width: 80%;
  gap: 12px;
`;

export const WeatherButtonWrapper = styled.div`
  /* width: 146px; */
`;

export const WeatherInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
 
  gap: 20px;
  width: 100%;
  height: fit-content;
  padding: 28px 36px;
  background: linear-gradient(
    134deg,
    rgba(47, 72, 111, 0.62) 5.78%,
    rgba(11, 27, 52, 0.62) 96.58%
  );
  backdrop-filter: blur(4px);
  border-radius: 20px;
`;

export const WeatherInfoContainer = styled.div`
  display: flex;
  gap: 168px;
  padding: 27px 36px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap:90px
`;

export const TempWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6px;
  width: fit-content;
  font-size: 57px;
  color: white;
`;
export const CityName = styled.p`
  font-size: 20px;
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
`;

export const WeatherImg = styled.img``;


