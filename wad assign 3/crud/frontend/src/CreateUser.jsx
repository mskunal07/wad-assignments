import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function CreateUser() {

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [age,setAge] = useState('');
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        axios.post('http://localhost:8000/api/v1/users/createUser', {name,email,age})
        .then(res=> {
            console.log(res);
            navigate('/');
        }).catch(err=>console.log(err));
    }


    return (
       <div className='d-flex vh-100 justify-content-center align-items-center' style={{background:"wheat"}} >
            <div className='w-50 bg-white rounded p-3'>
                <form onSubmit={handleSubmit}>
                    <h2>Register User</h2>
                    <div className='mb-2'>
                        <label htmlFor=''>Name</label>
                        <input type='text' placeholder='Enter Name ' className='form-control' 
                        onChange={e => setName(e.target.value)} 
                        />
                
                    </div>
                    <div className='mb-2'>
                        <label htmlFor=''>Email</label>
                        <input type="email" placeholder='Enter Email' className='form-control' 
                        onChange={e => setEmail(e.target.value)}    /> 
                    </div>
                    <div className='mb-2'>
                        <label htmlFor=''>Age</label>
                        <input type="text" placeholder='Enter Age' className='form-control' 
                        onChange={e => setAge(e.target.value)}    />
                    </div>
                    <button className='btn btn-success'>Submit</button>
                </form>
            </div>
       </div>
    )

}

export default CreateUser;