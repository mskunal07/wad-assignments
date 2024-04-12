import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

function Users() {

    const [users,setUsers] = useState([]);

    useEffect(()=>{
        axios.post("http://localhost:8000/api/v1/users/getallusers")
        .then(res => setUsers(res.data))
        .catch(err => console.log(err))
    },[]);

    const handleDelete = (id) => {
        axios.delete('http://localhost:8000/api/v1/users/deleteUser/'+id)
        .then(res => {console.log(res)
        window.location.reload()})
        .catch(err => console.log(err))
    }

    

    return(
        <div className='d-flex vh-100 justify-content-center align-items-center' style={{background:"wheat"}} >
            <div className='w-50 bg-white rounded p-3'>
                <Link to="/create" className='btn btn-success'>Register +</Link>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        users.map((user,i)=> (
                                <tr key={i}>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.age}</td>
                                    <td>
                                    <Link to={`/update/${user._id}`} className='btn btn-primary' style={{backgroundColor: ''}}>Update</Link>
                                        <button  className='btn btn-danger' 
                                        onClick={(e) => handleDelete(user._id)} >Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )

}

export default Users;