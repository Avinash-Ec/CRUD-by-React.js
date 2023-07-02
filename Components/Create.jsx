import { useState } from "react"
import style from "./crud.module.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"
const Create=()=>{
    let[name,setName]=useState("")
    let[sal,setSal]=useState("")
    let[company,setCompany]=useState("")
    let navigate=useNavigate()
    let n=(e)=>{
        setName(e.target.value)
    }
    let s=(e)=>{
        setSal(e.target.value)
    }
    let c=(e)=>{
        setCompany(e.target.value)
    }
    let create=(e)=>{
        e.preventDefault()
        let payload={name,sal,company}
        axios.post("http://localhost:3000/users",payload)
        .then(()=>{
            console.log("Data has been stored")
        })
        .catch(()=>{
            console.log("Error")
        })
        
        navigate("/users")
    }

    
    return(
        <div id={style.createusers}>
            <div id={style.create}>
                <input type="text" placeholder="Name" value={name} onChange={n}/>
                <input type="text" placeholder="Salary" value={sal} onChange={s}/>
                <input type="text" placeholder="Company Name" value={company} onChange={c}/>
                <button onClick={create}>Submit</button>
            </div>
        </div>
        
    )
}
export default Create