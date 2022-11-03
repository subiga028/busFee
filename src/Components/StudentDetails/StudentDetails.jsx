import React,{useState,useEffect} from 'react'
import './StudentDetails.css'


export default function StudentDetails() {

    const [student,setStudent] = useState([])
    const [search,setSearch] = useState('')

    const getData = ()=>{
        fetch('http://localhost:4000/allDetails',{
          mode: 'cors',
          headers: {
            'Access-Control-Allow-Origin':'*'
          },
          method:'get'
        }) 
        .then((obj)=>obj.json()) 
        .then((value)=>{
            setStudent(value);
        })  
    }

    useEffect(()=>{
        getData();
    },[])


  return (
    <>
        <div className="container">
        <input type="text" className='form-control my-4' onChange={(event)=>{setSearch(event.target.value)}} placeholder='Search by Name / Roll No'/>
        <a href="/newStudent" className='my-4'><button className='btn btn-primary'>Add data</button></a>
        <div className="card-group">
        {
            student.filter((value)=>{return value.sname.toLowerCase().includes(search.toLowerCase())}).map((stud)=>{
                return(
                    <div className="card">
                        <div className="card-img-top">
                            <img src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" alt="" />
                        </div>
                        <div className="card-body">
                            <h5>Student Name : {stud.sname}</h5>
                            <h6>Bus Number : {stud.bno}</h6>
                            <h6>Destination : {stud.dest}</h6>
                            
                            <a href={`/studentData/${stud._id}`}><button type="button" class="btn btn-primary">View</button></a>
                        </div>
                    </div>
                )
            })

        //     student.filter(val => { return val.sname.toLowerCase().includes(search.toLowerCase()) || val.rollNo.toLowerCase().includes(search.toLowerCase())}).map((stud) =>{
        //               return(
        //             <div className="card">
        //                 <div className="card-img-top">
        //                     <img src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" alt="" />
        //                 </div>
        //                 <div className="card-body">
        //                     <h4>Student Name : {stud.same}</h4>
        //                     <h6>Bus Number : {stud.bno}</h6>
        //                     <h6>Destination : {stud.dest}</h6>
                            
        //                     <button type="button" class="btn btn-primary">Pay</button>
        //                 </div>
        //             </div>
        //         )
        // })
        }
        </div>
        </div>
    </>
  )
}
