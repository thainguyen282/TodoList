import React, { useState } from "react";
import axios from 'axios'

function Upgrade() {
    const [task, setTask] = useState()
    const handleEdit = async (id) => {
        try {
            // Make the PUT request to update the item on the server
            await axios.put(`http://localhost:5500/api/stat/6552462f8006aeb65a83bbd3`);
    
            // Update the local state based on the current state
            setTodos(prevStat => {
                return prevStat.map(stat => {
                        // Toggle the 'done' property
                    return { percent: stat.percent/100 *, total: stat.total+1};
                });
            });

        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div> 
            <button type="button" onClick={handleEdit}>Done!</button>
        </div>
    )
}

export default Create