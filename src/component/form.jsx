import { useState } from "react";

const axios = require('axios').default;

export const Form = () =>{

    const [formData,setFormData] = useState({});

    const handlechange = (e) =>{

        // if(e.target.id === "username")
        // {
        //         serFormData({
        //             ...formData,usename : e.target.value
        //         })
        // }

        // if(e.target.id === "age")
        // {
        //         serFormData({
        //             ...formData,age : e.target.value
        //         })
        // }

//better_one
       
        setFormData({

            ...formData , [e.target.id] : e.target.value
        });


    };

    const handleSubmit = (e) =>{

        e.preventDefault();

        

        

        
       axios.post("http://localhost:8080/Users",{formData})
        



    }


    return(
        <form  onSubmit={handleSubmit}>
            <input onChange={handlechange}  type="text"  placeholder="Enter Username" id="username"/>

            <input onChange={handlechange}  type="number"  placeholder="Enter Age" id="age"/>

            <input onChange={handlechange}  type="text"  placeholder="Enter address" id="address"/>

            <select id="select" onChange={handlechange}>
                <option value=" ">--</option>
                <option value="d1">d1</option>
                <option value="d2">d2</option>
                <option value="d3">d3</option>
            </select>

            <input onChange={handlechange}  type="number"  placeholder="Enter salary" id="salary"/>

            <input type="checkbox" value="Married" name="Married" id="M" onClick={handlechange} />
            <label htmlFor="Married">Married</label>
            
            <input type="checkbox" value="Single" name="Single" id="S"  onClick={handlechange}/>
            <label htmlFor="Single">Single</label>
            

            <input type="submit" value="Submit" />
        </form>
    );

}