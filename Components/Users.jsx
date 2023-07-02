import axios from "axios"
import style from "./crud.module.css"
import { useEffect, useState } from "react"

import {Link}  from "react-router-dom"
const Users = () => {
   

    let [content, setContent] = useState([])
    useEffect(() => {
        axios.get("http://localhost:3000/users")
            .then((response) => {
                // console.log("Got the data")
                setContent(response.data)
            })
            .catch(() => {
                console.log("Did'nt get the data")
            })
    }, [])


    const deletePost=(x)=>{
        axios.delete(`http://localhost:3000/users/${x}`)
        .then(()=>{
            console.log("Data has been deleted")
        })
        .catch(()=>{
            console.log("data hasn't deleted")
        })
        
        window.location.assign("/users")
        // window.location.reload("/users")
    }

    return (
        <div id={style.users}>
            {content.map((x) => {
                return (
                    <div id={style.usersbox}>
                        <div>
                            <h4>Name:</h4>
                            <p>{x.name}</p>
                        </div>

                        <div>
                            <h4>Salary:</h4>
                            <p>{x.sal}</p>
                        </div>
                        <div>
                            <h4>Company:</h4>
                            <p>{x.company}</p>
                        </div>
                        <div id={style.usersbtn}>
                            {/* <button onClick={upd}>Edit</button> */}

                            <Link to={`/update/${x.id}`}>Edit</Link>
                            
                            <button onClick={()=>{deletePost(x.id)}}>Delete</button>
                        </div>
                    </div>

                )
            })}
        </div>
    )
}
export default Users
