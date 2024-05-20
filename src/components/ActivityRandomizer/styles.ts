import styled from "@emotion/styled"

interface isActivityProps {
  isActivity: boolean
}

export const ActivityRandomizerWrapper = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
  align-items: center;
    
  
`;

export const ActivityCard = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  width: 700px;
  max-height: fit-contentba;
  background-color: #99D6DB;
  border-radius: 10px;
  padding: 10px;
`;

export const SpinnerContainer = styled.div<isActivityProps>`
opacity: ${({ isActivity }) => (isActivity ? "1" : "0")};

`

export const ButtonContainer = styled.div`
  /* width: 300px; */
  flex: 1;
`;

export const ActivityText = styled.p`
flex: 3;
  font-size: 24px;
  font-weight: bold;
`
