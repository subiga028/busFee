import React,{useState,useEffect} from 'react'

import {useParams} from 'react-router-dom'

import './StudentData.css'



export default function StudentData() {
  const [student,setStudent] = useState([])
  const [fees,setFees] = useState("")
  const {id} = useParams();
  console.log(id)
  const getData = ()=>{
      
      fetch(`http://localhost:4000/student/${id}`,{
        mode: 'cors',
        headers: {
          'Access-Control-Allow-Origin':'*'
        },
        method:'get'
      }) 
      .then((obj)=>obj.json()) 
      .then((value)=>{
          setStudent(value);
          console.log(student)
      })  
  }

  useEffect(()=>{
      getData();
  },[])


  return (
    <>

        <div className="container stud-data">
          <div className="content">
          <h5>Name : {student.sname}</h5>
          <h6>Bus Number : {student.bno}</h6>
          <h6>Destination : {student.dest}</h6>
          <h6>Roll Number : {student.rollNo}</h6>
          
          {
            (function(){



              if(student.status=='yes')
              {
                return(
                  <h5 style={{color:'green'}}>Paid</h5>
                )
              }
              else{
                return(
                  <>
                  <h5 style={{color:'red'}}>Not Paid</h5>
                  <button className='btn btn-success'>Pay</button>
                  </>
                )
              }
            }())
          }


          </div>
        </div>
    </>
  )
}
