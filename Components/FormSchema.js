import * as Yup from "yup"

export const FormSchema = Yup.object({
    name: Yup.string().min(3,"too short").max(20, "too long").required('Name is must'),
    email: Yup.string().email("invalid email").required('Email is Must'),
    age:Yup.number().min(10).max(50).required("Age is must"),
    pass:Yup.string()
    .required()
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#])(?=.{8,})/,"incluse lowercase, uppercase,8char, special character & numbers"),           // regex
    cpass:Yup.string()
    .required(" Require Must")
    .oneOf([Yup.ref('pass'),null], "Both password must matched")
    // .(dot) is known as function chaining
})


// Rregular Expression or Regex