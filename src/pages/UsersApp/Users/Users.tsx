import {
  usersSliseActions,
  usersSliseSelectors,
} from "store/redux/users/usersSlice"
import {
  UsersPageWrapper,
  UserCard,
  Paragraph,
  ButtonContainer,
} from "./styles"
import { useAppDispatch, useAppSelector } from "store/hooks"
import Button from "components/Button/Button"

function Users() {
  const users = useAppSelector(usersSliseSelectors.users)
  const dispatch = useAppDispatch()

  const deleteAllUsers = () => {
    dispatch(usersSliseActions.deleteUsers())
  }

  return (
    <UsersPageWrapper>
      {users.map(user => (
        <UserCard>
          <Paragraph>Name: {user.firstlastName}</Paragraph>
          <Paragraph>Age: {user.age}</Paragraph>
          <Paragraph>Position: {user.jobTitle}</Paragraph>
        </UserCard>
      ))}
      <ButtonContainer isUserData={!!users.length}>
        <Button name="DELETE USERS" onButtonClick={deleteAllUsers} />
      </ButtonContainer>
    </UsersPageWrapper>
  )
}

export default Users
