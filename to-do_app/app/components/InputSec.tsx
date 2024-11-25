'use client'

import { useState } from "react";
import Image from "next/image";
import checkImg from "../components/checked.png";
import deleteImg from "../components/delete.png"
import editImg from "../components/edit.png"

export const InputSec = () => {

    const [todo, setTodo] = useState<string[]>([]);
    const [newTodos, setNewTodos] = useState<string>('');


    const addTodo = () => {
        if (newTodos.trim() === '') return;
        setTodo([...todo, newTodos]);
        setNewTodos("");
    }

    const completeTodo = (index: number) => {
        const updatedTodo: string[] = todo.map((todo: string, i: number) => {
            if (i === index) {
                return todo.startsWith('✔') ? todo.slice(2) : `✔ ${todo}`;
            }
            return todo;
        })
        setTodo(updatedTodo)
    }

    const deleteTodo = (index: number) => {
        const updatedTodo = todo.filter((_, i) => i !== index);
        setTodo(updatedTodo)
    }

    const editTodo = (index: number) => {
        const editingTodo = todo[index];
        setNewTodos(editingTodo);
        deleteTodo(index)
    }



    return (
        <main className="flex justify-center py-12 mx-auto min-h-screen">
            <div className='w-3/5 bg-gray-100 rounded-3xl'>

                <div className="flex items-center justify-center py-2 gap-2 flex-col">
                    <label className='text-5xl font-bold p-4 align-middle'>TODO LIST APP</label>
                    <input
                        type="text"
                        name='todoTitle'
                        id='todoTitle'
                        value={newTodos}
                        onChange={(e) => setNewTodos(e.target.value)}
                        placeholder="Enter To-do here"
                        className="w-full max-w-md p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-500"
                    />
                </div>

                <div className="flex justify-center">
                    <button onClick={addTodo} className='bg-blue-400 px-2 py-3 rounded-xl m-2'>Add Todo</button>
                </div>



                {/* List Section */}

                <ul id="listContainer">
                    {todo.map((todo: string, index: number) => (
                        <div key={index} className="flex max-w-full bg-slate-600 justify-between px-5 m-5 rounded-xl">
                            <div className="w-3/4 ">
                                <li id="list" key={index} className="list-none ml-16 text-2xl pt-4 checked:line-through"
                                    style={{
                                        textDecoration: todo.startsWith("✔") ? "line-through" : "none",
                                        color: todo.startsWith("✔") ? "gray" : "black",
                                    }}>
                                    {todo}
                                </li>
                            </div>

                            <div className="flex gap-3 justify-evenly ">

                                <button onClick={() => completeTodo(index)}><Image src={checkImg} alt="pic" width={40} height={40}></Image></button>

                                <button className="pt-2" onClick={() => deleteTodo(index)}><Image src={deleteImg} alt="pic" width={60} height={60}></Image></button>

                                <button onClick={() => editTodo(index)}><Image src={editImg} alt="pic" width={40} height={40}></Image></button>
                            </div>

                        </div>
                    ))}
                </ul>

            </div>
        </main>
    )
}
