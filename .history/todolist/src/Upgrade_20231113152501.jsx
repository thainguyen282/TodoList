import React, { useState } from "react";
import axios from 'axios'

function Upgrade() {
    const [stat, setStat] = useState()
    const handleEdit = async (id) => {
        try {
            // Make the PUT request to update the item on the server
            await axios.put(`http://localhost:5500/api/stat/655285310ba7219d1bb06276`);
    
            // Update the local state based on the current state
            setStat(prevStat => {
                const newNumCheck = prevStat.numCheck + 1
                const newPercent = (newNumCheck/prevStat.total) * 100
                return {}
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