import { useFormik } from "formik"

import Input from "components/Input/Input"
import Button from "components/Button/Button"

import { HomePageWrapper, UserForm, UserFormName } from "./styles"
import { useAppDispatch } from "store/hooks"
import { usersSliseActions } from "store/redux/users/usersSlice"
import { v4 } from "uuid"
import * as Yup from "yup"
import { UserData } from "store/redux/users/types"

function Home() {
  const dispatch = useAppDispatch()

  const shema = Yup.object().shape({
    firstlastName: Yup.string().required("Field is required"),
    age: Yup.number()
      .required("Field is required")
      .typeError("Age must be number"),
    jobTitle: Yup.string().required("Field is required"),
  })

  const formik = useFormik({
    initialValues: {
      firstlastName: "",
      age: "",
      jobTitle: "",
    } as UserData,
    validationSchema: shema,

    onSubmit: values => {
      dispatch(usersSliseActions.addUser({ ...values, id: v4() }))
    },
  })

  return (
    <HomePageWrapper>
      <UserForm onSubmit={formik.handleSubmit}>
        <UserFormName>Create User</UserFormName>
        <Input
          name="firstlastName"
          placeholder="Enter fullname"
          value={formik.values.firstlastName}
          label="First/Last name"
          onInputChange={formik.handleChange}
          error={formik.errors.firstlastName}
        />
        <Input
          name="age"
          placeholder="Enter age"
          value={formik.values.age}
          label="Age"
          onInputChange={formik.handleChange}
          error={formik.errors.age}
        />
        <Input
          name="jobTitle"
          placeholder="Enter job"
          value={formik.values.jobTitle}
          label="Job title"
          onInputChange={formik.handleChange}
          error={formik.errors.jobTitle}
        />
        <Button name="Create" type="submit" />
      </UserForm>
    </HomePageWrapper>
  )
}

export default Home
