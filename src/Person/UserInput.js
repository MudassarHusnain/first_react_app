import React from "react"
import  './Person.css'
const userinput= (props)=> {
    return <div className="Person">
    <p> I am {props.name} and i am {props.age}  {props.children}</p>
    <input type="text" onChange={props.changed}></input>
    </div>
}
export default userinput;