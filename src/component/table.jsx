import { useEffect, useState } from "react";
const axios = require('axios').default;

export const Table = () =>{

    const [udata,setUdata] = useState([])

    useEffect(()=>{
        getdata();
    },[])

    const getdata = async ()=>{

        const dat = await fetch("http://localhost:8080/Users")
        .then((d)=>d.json())
        
        
          setUdata(dat)

    }

    console.log(udata)


    return(
        <div>
              <table className="table">
          <thead>
            <tr>
              <th>User Name</th>
              <th>Age</th>
              <th>Address</th>
              <th>Department</th>
              <th>Salary</th>
              <th>Status</th>
            </tr>
          </thead>
         
          {udata.map((e)=>(
                <tbody className="tbody">
              
                <tr className="row">
                  <td >{e.formData.username}</td>
                  <td >{e.formData.age}</td>
                  <td >{e.formData.address}</td>
                  <td >{e.formData.select}</td>
                  <td >{e.formData.salary}</td>
                  <td >{e.formData.M}</td>
                </tr>
              </tbody>
              ))
          }
          
          
        </table>
        </div>
    );

}