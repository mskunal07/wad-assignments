import { useState,useEffect } from 'react';
import React from 'react'
import { useParams,useNavigate } from 'react-router-dom';
import axios from 'axios';


function UpdateUser() {

    const {id} = useParams();

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [age,setAge] = useState('');
    const navigate = useNavigate();

    useEffect(()=>{
        axios.post("http://localhost:8000/api/v1/users/getUser/"+id)
        .then(res => {
            setName(res.data.name)
            setEmail(res.data.email)
            setAge(res.data.age)
            console.log(res)})
        .catch(err => console.log(err))
    },[]);

    function handleSubmit(event) {
        event.preventDefault();
        axios.post('http://localhost:8000/api/v1/users/UpdateUser/'+id, {name,email,age})
        .then(res=> {
            console.log(res);
            navigate('/');
        }).catch(err=>console.log(err));
    }

    return(
        <div className='d-flex vh-100 justify-content-center align-items-center' style={{background:"wheat"}} >
        <div className='w-50 bg-white rounded p-3'>
            <form onSubmit={handleSubmit}>
                <h2>Update User</h2>
                <div className='mb-2'>
                    <label htmlFor=''>Name</label>
                    <input type='text' placeholder='Enter Name ' className='form-control' value={name}
                    onChange={e => setName(e.target.value)} 
                    />
            
                </div>
                <div className='mb-2'>
                    <label htmlFor=''>Email</label>
                    <input type="email" placeholder='Enter Email' className='form-control' value={email}
                    onChange={e => setEmail(e.target.value)}    /> 
                </div>
                <div className='mb-2'>
                    <label htmlFor=''>Age</label>
                    <input type="text" placeholder='Enter Age' className='form-control' value={age}
                    onChange={e => setAge(e.target.value)}    />
                </div>
                <button className='btn btn-success'>Update</button>
            </form>
        </div>
        </div>
    )

}

export default UpdateUser;