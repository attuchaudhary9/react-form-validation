import React from 'react'
import useForm from '../custom-hooks/useForm'
import FormSignup from './FormSignup'
import "./Form.css"

const Form = () => {
    const {isSubmitting} = useForm()
    console.log(isSubmitting)
    return (
        <div>
            <FormSignup />
            {isSubmitting && <h1>Submitted Successfully</h1>}
        </div>
    )
}

export default Form
