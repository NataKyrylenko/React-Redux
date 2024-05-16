import styled from "@emotion/styled"

interface isUserDataProps {
  isUserData: boolean
}

export const UsersPageWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  height: fit-content;
  gap: 24px;
`

export const UserCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 280px;
  padding: 20px;
  border-radius: 8px;
  border: 1px solid black;
  background-color: #c5dce1;
`

export const Paragraph = styled.p`
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  font-size: 16px;
`
export const ButtonContainer = styled.div<isUserDataProps>`
  width: 300px;
  display: ${({ isUserData }) => (isUserData ? "flex" : "none")};
`
