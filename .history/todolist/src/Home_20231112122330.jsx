import React, { useEffect, useState } from "react";
import Create from './Create'
import axios from "axios";
import { BsCircleFill, BsFillCheckCircleFill, BsFillTrashFill } from "react-icons/bs";



function Home() {
    const [todos, setTodos] = useState([])
    useEffect(() => {
        const getItemlist = async () => {
            try {
                const result = axios.get('http://localhost:5500/api/item')
                
                .catch(err => console.log(err))
            } catch (err) {
                console.log(err)
            }
        }
        getItemlist()
    }, []);

    const handleEdit = (id) => {
        try {
            axios.put('http://localhost:5500/api/item/'+id)
            .then(result => setTodos(result.data))
            .catch(err => console.log(err))
        } catch (err) {
            console.log(err)
        }
        
    }
    return (
        <div className="home">
            <h1>Todo Lists</h1>
            <Create />
            <br />
            {
                todos.length === 0 
                ? 
                <div><h2>No Record</h2></div>
                :
                todos.map(todo => (
                    <div className="task"> 
                        <div className="checkbox" onClick={() => handleEdit(todo._id)}>
                            {
                                todo.done ?
                                <BsFillCheckCircleFill className="icon"/>
                                : <BsCircleFill className="icon" />
                            }
                            <p>{todo.task}</p>
                        </div>
                        <div> 
                            <span><BsFillTrashFill/></span>
                        </div>
                    </div>

                ))
            }
        </div>
    )
}

export default Home