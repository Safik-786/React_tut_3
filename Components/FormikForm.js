
import React from 'react'
import {useFormik} from 'formik'
import { FormSchema } from './FormSchema'

function FormikForm() {
    const formInitialvalues= {
        name: "",
        email:"",
        age:"",
        pass:"",
        cpass:""
    }
    // const formik= useFormik({
    //     initialValues: formInitialvalues,
    //     onSubmit:(data)=>{
    //         console.log(data)
    //         console.log(data.name)
    //         console.log(data.email)
    //     }
    // })
    

   // destructure the formik object
    const {handleChange,handleSubmit,handleBlur,touched, values , errors}= useFormik({
        initialValues: formInitialvalues,
        validationSchema:FormSchema,
        onSubmit:(data,action)=>{
            console.log(data)
            console.log(data.name)
            console.log(data.email)
            action.resetForm();
        }
    })

  return (
    // <div>
    //   <h3>Formik Demo</h3>
    //   <form onSubmit={formik.handleSubmit}>
    //     <label htmlFor="">Enter Name : </label>
    //     <input type="text" name="name" id="" onChange={formik.handleChange}  value={formik.values.name}/>
    //     <br /><br />
    //     <label htmlFor="">Enter email : </label>
    //     <input type="text" name="email" id="" onChange={formik.handleChange}  value={formik.values.email}/>
    //     <br /><br />
    //     <input type="submit" value="submit"/>
    //   </form>
    // </div>

    <div style={{border:"1px solid black", margin:"50px auto",width:'500px', padding:'20px 10px',textAlign:'center'}}>
      <h2>Formik Demo</h2>
      <form onSubmit={handleSubmit}>

        <label htmlFor="name">Enter Name : </label>
        <input type="text" name="name" id="name" onBlur={handleBlur} onChange={handleChange}  value={values.name}/>
        <br />
        {errors.name && touched.name ? <span style={{color:"red"}}>{errors.name}</span> : null}
        <br /><br />


        <label htmlFor="">Enter Age : </label>
        <input type="text" name="age" id="" onBlur={handleBlur} onChange={handleChange}  value={values.age}/>
        <br />
        {errors.age && touched.age ? <span style={{color:"red"}}>{errors.age}</span> : null}
        <br /><br />


        <label htmlFor="">Enter email : </label>
        <input type="text" name="email" id="" onChange={handleChange} onBlur={handleBlur} value={values.email}/>
        <br />
        {errors.email && touched.email ? <span style={{color:"red"}}>{errors.email}</span> : null}
        <br /><br />


        <label htmlFor="">Enter Password : </label>
        <input type="text" name="pass" id="" onChange={handleChange} onBlur={handleBlur} value={values.pass}/>
        <br />
        {errors.pass && touched.pass ? <span style={{color:"red"}}>{errors.pass}</span> : null}
        <br /><br />


        <label htmlFor="">Confirm Password : </label>
        <input type="text" name="cpass" id="" onChange={handleChange} onBlur={handleBlur} value={values.cpass}/>
        <br />
        {errors.cpass && touched.cpass ? <span style={{color:"red"}}>{errors.cpass}</span> : null}
        <br /><br />

        {/* <textarea name="" id="" cols="30" rows="10"></textarea> */}
        


        <input type="submit" value="submit"/>
      </form>
    </div>
    
  )
}

export default FormikForm
