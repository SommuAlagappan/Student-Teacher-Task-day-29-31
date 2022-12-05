import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Teacherview() {
    const params=useParams();
    console.log(params.id);

    const[view, setView]=useState({});

    useEffect(()=>{
        Loadview();
    },[]);
    let Loadview=async()=>{
        let view= await axios.get(`https://6305f395dde73c0f844f7176.mockapi.io/Teachers/${params.id}`)
        setView(view.data);
    }

  return (
    <>
    <h1 class="container-fluid offset-4">TeacherView:-({params.id})</h1>
    <div class="container offset-4 mt-5">
        
    <h3>Name: {view.Name}</h3>
    <h3>DOB: {view.DOB}</h3>
    <h3>Gender: {view.Gender}</h3>
    <h3>Mobileno: {view.Mobileno}</h3>
    <h3>Jobtype: {view.Jobtype}</h3>
    </div>
    </>
  )
}

export default Teacherview;