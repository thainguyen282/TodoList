import React, { useState } from "react";
import axios from 'axios'

function Upgrade() {
    const [task, setTask] = useState()
        const handleAdd = () => {
                try
                {
                axios.post('http://localhost:5500/api/item', {task:task})
                .then(result=>console.log(result))
                .catch(err => console.log(err))
                } catch(err){
                    console.log(err)
                }
            }
        }

    return (
        <div> 
            <button type="button" onClick={handleAdd}>Done!</button>
        </div>
    )
}

export default Create