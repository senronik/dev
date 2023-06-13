import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Updatedata = () => {
    const navigate=useNavigate();
    const [id,setId]=useState(0)
    const [name,setName]=useState()
    const [email,setEmail]=useState()
    useEffect(()=>{
        setId(localStorage.getItem("id"));
        setName(localStorage.getItem("name"));
        setEmail(localStorage.getItem("email"));
    },[])
    const handleUpdate=()=>{
        axios.put(`https://64733392d784bccb4a3c584d.mockapi.io/crud/${id}`,
        {
            "name":name,
            "email":email
        }
        )
        .then(()=>{
            navigate('/showdata');
        })
    }
    return (
        <>
            <div className='container'>
                <h1>create is running</h1>
                <form >
                    <div className="mb-3">
                        <label className="form-label">Full Name</label>
                        <input type="text" className="form-control"
                        value={name} 
                        onChange={(e)=>setName(e.target.value)} required/>
                        <div className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email Address</label>
                        <input type="email" className="form-control"
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)} required/>
                    </div>
                    <button type="submit" className="btn btn-warning" onClick={(e)=>{
                        e.preventDefault();
                        handleUpdate();
                    }}>Update</button>{' '}
                    <button class="btn btn-outline-danger" onClick={()=>{
                        navigate('/showdata');
                    }}>Cancel</button>
                </form>
            </div>
        </>
    )
}

export default Updatedata
