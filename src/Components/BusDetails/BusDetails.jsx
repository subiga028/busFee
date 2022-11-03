import React,{useState,useEffect} from 'react'
import './BusDetails.css'


export default function BusDetails() {

    const [busDetails,setBusDetails] = useState([])

    const getData = ()=>{
        fetch('http://localhost:4000/bus/catalog',{
          mode: 'cors',
          headers: {
            'Access-Control-Allow-Origin':'*'
          },
          method:'get'
        }) 
        .then((obj)=>obj.json()) 
        .then((value)=>{
            setBusDetails(value);
        })  
    }

    useEffect(()=>{
        getData();
    },[])


  return (
    <>
        <div className="container">
        <div className="card-group">
        {
            busDetails.map((bus)=>{
                return(
                    <div className="card">
                        <div className="card-img-top">
                            <img src="https://nmcauditingcollege.com/wp-content/uploads/2019/03/transport-e1554783292276.png" alt="" />
                        </div>
                        <div className="card-body">
                            <h4>Bus Number : {bus.bno}</h4>
                            <h6>Bus Destination : {bus.dest}</h6>
                            <button type="button" class="btn btn-primary">view</button>
                        </div>
                    </div>
                )
            })
        }
        </div>
        </div>
    </>
  )
}
