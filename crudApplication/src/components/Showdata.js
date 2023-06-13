import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
const Showdata = () => {
  const navigate=useNavigate()
  const [data, setdata] = useState([])
  
  async function getData() {
    let res= await axios.get("https://64733392d784bccb4a3c584d.mockapi.io/crud");
    setdata(res.data);
  }

const setdataLocal=(id,name,email)=>{
    localStorage.setItem("id",id)
    localStorage.setItem("name",name)
    localStorage.setItem("email",email)
}

  useEffect(()=>{
    getData();
  },[])
  return (
    <>
    <div className='d-flex justify-content-between mt-2 px-3'>
    <h1 className='pb-3'>Customer Details</h1>
    <button type="button" className="btn btn-outline-dark" onClick={()=>navigate('/')}>Create User's</button>
    </div>
           <div className=' container ' id='tablecss'>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col"></th>
            <th scope="col"></th>

          </tr>
        </thead>
        
          {
            data.map((eachVal,i) => {
              return (
                <>
                <tbody>
                  <tr>
                    <th scope="row">{i+1}</th>
                    <td>{eachVal.name}</td>
                    <td>{eachVal.email}</td>                                                                                                                          
                    <td><Link to={'/updatedata'}><button className=' btn btn-success' onClick={()=>setdataLocal(eachVal.id,eachVal.name,eachVal.email)}>Edit</button></Link></td>
                    <td><button className='btn btn-danger' onClick={()=>{
                      // e.preventDefault()
                      async function deletData()
                      {
                        var res=await axios.delete(`https://64733392d784bccb4a3c584d.mockapi.io/crud/${eachVal.id}`)
                        .then(()=>{
                          getData();
                        })
                      }
                      deletData();
                    }}>Delet</button></td>
                  </tr>
                  </tbody>
                </>
              )
            })
          }
      </table>
      <button type="button" class="btn btn-outline-dark" onClick={()=>navigate('/')}>Back</button>
      </div>
    </>
  )
}

export default Showdata;
