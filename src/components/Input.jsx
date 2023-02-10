import React, { useState } from 'react'
import "./Input.css"

const Input = ({jj}) => {

    const [heading,setHeading]=useState("");
    const [content,setContent]=useState("");
    function handler(e){
        e.preventDefault();
        const add={
            title:heading,
            content:content
        }
        
        jj(add)
        setContent("");
        setHeading("");
       
    }
  return (
    <div className="input">
     <form >
        <input type="text" value={heading} placeholder="Heading" onChange={(e)=>{setHeading(e.target.value)}}/>
        <input id="content" type="text" value={content} placeholder="Content" onChange={(e)=>{setContent(e.target.value)}}/>
        <button type="submit"  onClick={handler}>+</button>
      </form>
    </div>
  )
}

export default Input 
