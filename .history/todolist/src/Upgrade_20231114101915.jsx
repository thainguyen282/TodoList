import React, { useState } from "react";
import axios from 'axios'

function Upgrade() {
    const [prevStat, setStat] = useState()
    const handleEdit = async (id) => {
        try {
            // Make the PUT request to update the item on the server
            const newNumCheck = 1
            const newTotal = 1+1
            const newPercent = newNumCheck/newTotal
            // Update the local state based on the current state
            setStat(prevStat => ({...prevStat, percent: newPercent, total: newTotal, numCheck: newNumCheck})
            );
            await axios.put(`http://localhost:5500/api/stat/655285310ba7219d1bb06276`, {
                percent: newPercent,
                total: newTotal, 
                numCheck: newNumCheck
            }
            );

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

export default Upgrade