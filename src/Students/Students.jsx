import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom';


function Students() {
    
  const [user,setUser]=useState([]);
  const[isloading, setLoading]=useState(false);

 


useEffect(()=>{              
  loadData();
},[]);
 let loadData=async()=>{
    setLoading(true);
    let req= await axios.get("https://6305f395dde73c0f844f7176.mockapi.io/Students")
    setUser(req.data)
    setLoading(false);
   
 }
 let userDelete=async(id)=>{

  try{     
    let ask=window.confirm("Are you sure want to delete")
    if(ask){   
   await axios.delete(`https://6305f395dde73c0f844f7176.mockapi.io/Students/${id}`)
   alert("Student deleted")
   loadData();
    }
  }catch(error){
     
   }
  }


  return (
  <>
   <div className="container-fluid">
    <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Student</h1>
        <Link to="/portal/createstudent" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                className="fas fa-download fa-sm text-white-50"></i> Create Student</Link>
    </div>
    {
        isloading?<div class="text-center">
        <div class="spinner-border text-danger" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>:<div class="card shadow mb-4">
        <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
        </div>
        <div class="card-body">
            <div class="table-responsive">
                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                    <thead>
                        <tr>
                            <th>S.No</th>
                            <th>Name</th>
                            <th>DOB</th>
                            <th>Gender</th>
                            <th>Mobile number</th>
                            <th>Roll No</th>
                          
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tfoot>
                        <tr>
                            <th>S.No</th>
                            <th>Name</th>
                            <th>DOB</th>
                            <th>Gender</th>
                            <th>Mobile number</th>
                            <th>Roll No</th>
                            
                            <th>Action</th>
                        </tr>
                    </tfoot>
                    <tbody>
                        
                            {
                              user.map((ele,index)=>{
                                return <tr>
                                <td>{index+1}</td>
                                <td>{ele.Name}</td>
                                <td>{ele.DOB}</td>
                                <td>{ele.Gender}</td>
                                <td>{ele.Mobileno}</td>
                                <td>{ele.Rollno}</td>
                               
                             <td>  
                           <Link to={`/portal/student/${ele.id}`}  type="button" class="btn m-1 btn-primary">Read</Link>
                            <Link to={`/portal/studentedit/${ele.id}`} type="button"  class="m-1 btn btn-warning">Update</Link>
                           <button onClick={()=>{userDelete(ele.id)}} type="button" class=" m-1 btn btn-danger">Delete</button>
                           </td>
                           </tr>
                                
                              })
                   }
                           
    
                        
    
                    </tbody>
                    
                </table>
            </div>
        </div>
    </div>
    }
</div>
</>
  )
}

export default Students;