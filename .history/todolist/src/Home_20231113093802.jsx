import React, { useEffect, useState } from "react";
import Create from './Create'
import axios from "axios";
import { BsCircleFill, BsFillCheckCircleFill, BsFillTrashFill } from "react-icons/bs";



function Home() {
    const [todos, setTodos] = useState([])
    const [datas, setDatas] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const todosResult = await axios.get('http://localhost:5500/api/item');
                const datasResult = await axios.get('http://localhost:5500/api/stat');

                setTodos(todosResult.data);
                setDatas(datasResult.data);
            } catch (err) {
                console.log(err);
            }
        };

        fetchData();
    }, []);

    const handleEdit = async (id) => {
        try {
            await axios.put(`http://localhost:5500/api/item/${id}`);
    
            setTodos((prevTodos) => {
                return prevTodos.map((todo) => {
                    if (todo._id === id) {
                        return { ...todo, done: !todo.done };
                    }
                    return todo;
                });
            });
        } catch (err) {
            console.log(err);
        }
    }
    
    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5500/api/item/${id}`);
            
            // Update the state without reloading the page
            setTodos((prevTodos) => prevTodos.filter((todo) => todo._id !== id));
        } catch (err) {
            console.log(err);
        }
    }    

    return (
        <div className="home">
            <h1>Todo Lists</h1>
            <Create />
            {/* Uncomment and modify the following part if you want to render data from `datas` */}
            {/* <h1> datas.map(data => (
                <div>{data.percent}</div>
            )) </h1> */}
            <br />
            {todos.length === 0 ? (
                <div><h2>No Record</h2></div>
            ) : (
                todos.map((todo) => (
                    <div className="task" key={todo._id}> 
                        <div className="checkbox" onClick={() => handleEdit(todo._id)}>
                            {todo.done ? (
                                <BsFillCheckCircleFill className="icon"/>
                            ) : (
                                <BsCircleFill className="icon"/>
                            )}
                            <p className={todo.done ? "line_through" : ""}>{todo.task


    {/* useEffect(() => {
        const getItemlist = async () => {
            try {
                const result = await axios.get('http://localhost:5500/api/item')
                setTodos(result.data);
            } catch (err) {
                console.log(err)
            }
        }
        getItemlist()
    }, []);*/}

    useEffect(() => {
        const getData = async () => {
            try {
                const result = await axios.get('http://localhost:5500/api/stat')
                setDatas(result.data);
            } catch (err) {
                console.log(err)
            }
        }
        getData()
    }); */}

    const handleEdit = async (id) => {
        try {
            // Make the PUT request to update the item on the server
            await axios.put(`http://localhost:5500/api/item/${id}`);
    
            // Update the local state based on the current state
            setTodos(prevTodos => {
                return prevTodos.map(todo => {
                    if (todo._id === id) {
                        // Toggle the 'done' property
                        return { ...todo, done: !todo.done };
                    }
                    return todo;
                });
            });

        } catch (err) {
            console.log(err);
        }
    }
    
    const handleDelete = async (id) => {
        try {
            // Make the PUT request to update the item on the server
            await axios.delete(`http://localhost:5500/api/item/${id}`)
            .then(result=> {
                location.reload()
            })
            .catch(err => console.log(err))

        } catch (err) {
            console.log(err);
        }
    }    

    return (
        <div className="home">
            <h1>Todo Lists</h1>
            <Create />
            <h1> datas.map(data => (
                <div>data.percent</div>
            )) </h1>
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
                            <p className={todo.done ? "line_through" : ""}>{todo.task}</p>
                        </div>
                        <div> 
                            <span><BsFillTrashFill className="icon"
                                onClick={() => {handleDelete(todo._id)}}/></span>
                        </div>
                    </div>

                ))
            }
        </div>
    )
}

export default Home