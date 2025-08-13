import {type FC, useEffect, useState} from 'react';
import List from "./List.tsx";
import type {ITodo} from "../types/types.tsx";
import TodoItem from "../TodoItem.tsx";
import axios from "axios";

const TodoPage : FC = () => {
    const [todos,setTodos] = useState<ITodo[]>([])
    async function fetchTodos (){
        try{
            const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
            setTodos(response.data)
        }
        catch (e){
            alert(e)
        }
    }
    useEffect(()=>{
        fetchTodos();

    },[])
    return (
        <List item={todos} renderItem={(todo:ITodo)=><TodoItem todo={todo} key={todo.id}/>}/>
    );
};

export default TodoPage;
