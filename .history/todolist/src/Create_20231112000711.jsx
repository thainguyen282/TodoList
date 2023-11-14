import React, { useState } from "react";
import axios from 'axios'

function Create() {
    const [task, setTask] = useState()
    const handleAdd = () => {
        axios.
    }
    return (
        <div className="create_form"> 
            <input type="text" name="" id="" placeholder="Enter task" onChange={(e) => {setTask(e.target.value)}}/>
            <button type="button" onClick={handleAdd}>Add</button>
        </div>
    )
}

export default Create