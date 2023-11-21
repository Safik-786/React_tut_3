import {  Field, Form, Formik } from 'formik'
import React, { useState } from 'react'
import * as yup from 'yup'
import RedError from './RedError'

function FormikComponent() {
    const[formData,setFormData] = useState('')

    const newValidation= yup.object({
        name:yup.string().min(4).required(),
        age:yup.number().min(12).max(55).required(),
        email:yup.string().email().required(),
        pass:yup.string()
        .required()
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#])(?=.{8,[]})/,"include lowercase, uppercase,8-char, 1-special character & numbers"), 
        gender:yup.string().required(),
        hobby:yup.array().min(1),
        country:yup.string().required(),
        comment:yup.string().max(500).required()
    })
    return (
        <div style={{textAlign:"center", marginTop:"30px"}}>
            <Formik
                validationSchema={newValidation}
                initialValues={{ name: "", age: "", email: "", pass: "", gender: "", hobby: [], country: "India" ,comment:""}}
                onSubmit={(values, action) => {
                    console.log(values);
                    setFormData(values)
                    // action.resetForm();
                }}
            >
                <Form>
                    <label htmlFor="">Enter Name:  </label>
                    <Field type="text" name="name" />
                    <RedError name="name"/>
                    <br /><br />

                    <label htmlFor="">Enter Age:  </label>
                    <Field type="number" name="age" />
                    <RedError name="age"/>
                    <br /><br />

                    <label htmlFor="">Enter Email:  </label>
                    <Field type="email" name="email" />
                    <RedError name="email"/>
                    <br /><br />

                    <label htmlFor="">Enter Password:  </label>
                    <Field type="password" name="pass" />
                    <RedError name="pass"/>
                    <br /><br />

                    <label htmlFor="gend">Gender:  </label>
                    <label htmlFor="gend">Male</label>
                    <Field type="radio" name="gender" value="Male" /> &nbsp;&nbsp;
                    <label htmlFor="gend">Female</label>
                    <Field type="radio" name="gender" value="Female" />
                    <RedError name="gender"/>
                    <br /><br />


                    <label htmlFor="">Hobbies:  </label>
                    <Field type="checkbox" name="hobby" value="Reading" />
                    <label htmlFor="">Reading</label>&nbsp;&nbsp;
                    <Field type="checkbox" name="hobby" value="Singing" />
                    <label htmlFor="">Singing</label>&nbsp;&nbsp;
                    <Field type="checkbox" name="hobby" value="dancing" />
                    <label htmlFor="">dancing</label>&nbsp;&nbsp;
                    <Field type="checkbox" name="hobby" value="cycling" />
                    <label htmlFor="">cycling</label>&nbsp;&nbsp;
                    <RedError name="hobby"/>
                    <br /><br />

                    <label htmlFor="">Country: </label>&nbsp;&nbsp;
                    <Field name="country" as="select">
                        <option value="">Select</option>
                        <option value="India">India</option>
                        <option value="Canada">Canada</option>
                        <option value="Russia">Russia</option>
                        <option value="USA">USA</option>
                        <option value="Saudi Arabia">Saudi Arabia</option>
                        <option value="London">London</option>
                        <option value="UAE" >UAE</option>
                        <option value="Qatar">Qatar</option>
                    </Field>
                    <RedError name="country"/>
                    <br /><br />

                    <label htmlFor="">Comments: </label>  
                    <Field as="textarea" name="comment"></Field>
                    <RedError name="comment"/>


                    <br /><br />
                    <button type='submit'>Submit</button>
                </Form>
            </Formik>

            <h3>Your Content</h3>
            <div style={{border:"1px solid blue"}}>
            {/* {JSON.stringify(formData)} <br /> */}
            {formData.name} <br />
            {formData.age} <br />
            {formData.comment} <br />
            </div>
        </div>
    )
}

export default FormikComponent
