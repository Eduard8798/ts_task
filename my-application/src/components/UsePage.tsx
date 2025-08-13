import  {type FC, useEffect, useState} from 'react';
import type {IUser} from "../types/types.tsx";
import axios from "axios";
import List from "./List.tsx";
import UserItem from "./UserItem.tsx";
import {useHistory} from "react-router-dom";

const UsePage:FC = () => {
    const [users,setUsers] = useState<IUser[]>([])

    useEffect(()=>{
        fetchUsers();

    },[])

    const history = useHistory()

    async function fetchUsers (){
        try{
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
            setUsers(response.data)
        }
        catch (e){
            alert(e)
        }
    }
    return (
        <div>
            <List item={users} renderItem={(user:IUser)=><UserItem onClick={(user)=> history.push('users/'+ user.id)} user={user} key={user.id}/>}/>
        </div>
    );
};

export default UsePage;
