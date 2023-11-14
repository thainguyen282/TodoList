import React, { useState } from "react";
import Create from './Create'

function Home() {
    const [todos, setTodos] = useState([])
    return (
        <div>
            <h2>Todo Lists</h2>
            <Create />
            {
                todos.map(todo => (
                    <div> <
                ))
            }
        </div>
    )
}

export default Home