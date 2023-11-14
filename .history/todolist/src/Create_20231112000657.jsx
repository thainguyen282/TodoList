import React, { useState } from "react";
import 

function Create() {
    const [task, setTask] = useState()
    const handleAdd = () => {

    }
    return (
        <div className="create_form"> 
            <input type="text" name="" id="" placeholder="Enter task" onChange={(e) => {setTask(e.target.value)}}/>
            <button type="button" onClick={handleAdd}>Add</button>
        </div>
    )
}

export default Create