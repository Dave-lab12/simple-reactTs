import React, { useState } from 'react'
import {IState as Props} from '../App' 
interface IProps {
    people:Props['people'],
    setPeople: React.Dispatch<React.SetStateAction<Props['people']>>
}
const AddToList: React.FC<IProps>=({people,setPeople})=> {
    const[input,setInput]=useState({
        name:"",
        note:"",
        age:"",
        url:""
    })
    const handleChange=(e:React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>):void=>{
        setInput({...input,
        [e.target.name]:e.target.value
        })
    }
    const handleClick =():void=>{
        if(!input.name || !input.age || !input.url){
          return  console.log('fill all the values');
            
        }
        setPeople([
            ...people,
            {
                name:input.name,
                age:parseInt(input.age),
                url:input.url,
                note:input.note
            }
        ])
        setInput({
            name:'',
            age:"",
            url:"",
            note:""
        })
    }
    return (
        <div className="AddToList">
            <input className="addToList-input" type="text" name="name" value={input.name}placeholder="Name" onChange={ handleChange} />
            <input className="addToList-input" type="text" name="age" value={input.age} placeholder="Age"  onChange={ handleChange}/>
            <input className="addToList-input" type="text" name="url" value={input.url} placeholder="Image url"  onChange={ handleChange}/>
            <textarea className="addToList-input" name="note" value={input.note} placeholder="Notes"  onChange={ handleChange}/>
            <button className="AddToList-btn" onClick={handleClick}>Add To List</button>
        </div>
    )
}

export default AddToList
