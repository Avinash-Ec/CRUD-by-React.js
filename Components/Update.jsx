import { useEffect, useState } from "react"
import style from "./crud.module.css"
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"
const Update=()=>{
    let[name,setName]=useState("")
    let[sal,setSal]=useState("")
    let[company,setCompany]=useState("")

    let {abc}=useParams()

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
    
  useEffect(()=>{
    axios.get(`http://localhost:3000/users/${abc}`)
    .then((response)=>{
        setCompany(response.data.company)
        setName(response.data.name)
        setSal(response.data.sal)
    })
  },[])


  let fun=()=>{
    let payload={name,sal,company}
    axios.put(`http://localhost:3000/users/${abc}`,payload)
    .then((x)=>{
        console.log("data has been updated")
    })
    .catch(()=>{
        console.log("error")
    })
    navigate(`/users`)
  }

  
    return(
        <div id={style.createusers}>
            <div id={style.create}>
                <input type="text" placeholder="Name" value={name} onChange={n}/>
                <input type="text" placeholder="Salary" value={sal} onChange={s}/>
                <input type="text" placeholder="Company Name" value={company} onChange={c}/>
                <button onClick={fun}>Update</button>
            </div>
        </div>
        
    )
}
export default Update