import React, { useEffect, useState } from "react";
import Create from './Create'
import axios from "axios";

function Home() {
    const [todos, setTodos] = useState([])
    useEffect(() => {
        const getItemlist = async () => {
            try {
                axios.get('http://localhost:5500/api/item')
        .then(result => setTodos(result.data))
        .catch(err => console.log(err))
            }
        }
        axios.get('http://localhost:5500/api/item')
        .then(result => setTodos(result.data))
        .catch(err => console.log(err))
    }, [])

    const handleEdit = () => {
        
    }
    return (
        <div className="home">
            <h2>Todo Lists</h2>
            <Create />
            {
                todos.length === 0 
                ? 
                <div><h2>No Record</h2></div>
                :
                todos.map(todo => (

                    <div className="task    "> 
                        {todo.task}
                    </div>

                ))
            }
        </div>
    )
}

export default Home