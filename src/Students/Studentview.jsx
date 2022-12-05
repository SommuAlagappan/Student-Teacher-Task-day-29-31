import axios from 'axios';
import React, { useEffect, useState } from 'react'                                    
import { useParams } from 'react-router-dom';               

function Studentview() {                                      
  
    const params =useParams();                    
     console.log(params.userviewid); 
     const [userData, setUserData]=useState({});
   
     


    useEffect(()=>{
      Loaduser();
    },[])   

     let Loaduser=async()=>{   
    try{  
      
     let user= await axios.get(`https://6305f395dde73c0f844f7176.mockapi.io/Students/${params.userviewid}`)
      setUserData(user.data)
    
     }catch(error){    
          
     }
     }
    return ( 
        <>    
          <h1 className='d-flex justify-content-center'>Studentview:-{params.userviewid}</h1>                                                            
         <div className="container offset-5 mt-5">
         <h3>Name:{userData.Name}</h3>   
         <h3>DOB:{userData.DOB}</h3> 
         <h3>Gender:{userData.Gender}</h3> 
         <h3>Mobileno:{userData.Mobileno}</h3>     
         <h3>RollNo:{userData.Rollno}</h3>
         </div>
       </>                      
                                                  
     )
   
}                                                                           
  
export default Studentview;        