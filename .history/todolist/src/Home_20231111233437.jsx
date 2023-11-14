import React from "react";
import Create from './Create'

function Home() {
    const [todos, setTodos] = useState([])
    return (
        <div>
            <h2>Todo Lists</h2>
            <Create />
            {
                
            }
        </div>
    )
}

export default Home