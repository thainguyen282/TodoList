import React, { useState } from "react";
import axios from 'axios'

function Create() {
    const [task, setTask] = useState()
        const handleAdd = () => {
            i
            try
            {
            axios.post('http://localhost:5500/api/item', {task:task})
            .then(result=>console.log(result))
            .catch(err => console.log(err))
            } catch(err){
                console.log(err)
            }

            

        }

    return (
        <div className="create_form"> 
            <input type="text" placeholder="Enter task" onChange={(e) => {setTask(e.target.value)}}/>
            <button type="button" onClick={handleAdd}>Add</button>
        </div>
    )
}

export default Create