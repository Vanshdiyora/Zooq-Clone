import * as Yup from "yup";

export const logInSchema =Yup.object(
    {
        email: Yup.string().email().required("Please Enter The Email"),
        password : Yup.string().required("Please Enter the Password")
    }
)