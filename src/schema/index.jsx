import * as Yup from 'yup'

export const loginschema= Yup.object({
    email:Yup.string().email().required("please enter your email"),
    password: Yup.string().min(6).required("please enter your password"),
})

export const Registerschema=Yup.object({
    username:Yup.string().min(2).max(25).required("please enter your username"),
    email:Yup.string().email().required("please enter your email"),
    password: Yup.string().min(6).required("please enter your password"),
    cpassword:Yup.string().required("please enter your confirm password").oneOf([Yup.ref("password"),null],"password must match")
})