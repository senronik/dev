import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Createdata = () => {
    const[name,setName]=useState('');
    const[email,setEmail]=useState('');
    const navigate=useNavigate()
    return (
        <>
            <div className='container'>
                <h1>Add Details</h1>
                <form onSubmit={(e)=>{
                    e.preventDefault()
                    async function creatdata(){
                        let res=await axios.post('https://64733392d784bccb4a3c584d.mockapi.io/crud',
                        {
                            name:name,
                            email:email
                        })
                        .then((res)=>{
                            console.log(res);
                            navigate('/showdata')
                        })
                        alert('success');
                    }
                    creatdata();
                    
                }}>
                    <div className="mb-3">
                        <label className="form-label">Full Name</label>
                        <input type="text" required className="form-control"
                         onChange={(e)=>{
                                setName(e.target.value)
                        }} 
                        value={name}
                        />
                        <div  className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label  className="form-label">Email Address</label>
                        <input type="email" className="form-control" required
                            onChange={(e)=>{
                                setEmail(e.target.value)
                            }}
                            value={email}
                        />
                    </div>
                    <button type="submit" class="btn btn-outline-primary">Submit</button>{' '} {' '}
                    <button type="button" class="btn btn-outline-secondary" onClick={()=>navigate('/showdata')}>Skip</button>
                </form>
            </div>
        </>
    )
}

export default Createdata
