import { useState,useEffect} from 'react';

const useForm = ()=>{
    const [values,setvalues] = useState({
        username:'',
        email:'',
        password:'',
        password2:'',
    })

    const [errors,setErrors] = useState({})

    const handleChange = (e)=>{
        const {name,value} = e.target
        setvalues({
            ...values,
            [name] : value
        })
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log('Submited the form');
    }
    return  {handleChange,values,handleSubmit}
}

export default useForm;