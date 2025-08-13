import React, {type FC} from 'react';
import type {ITodo} from "./types/types.tsx";

interface TodoItemsProps {
    todo: ITodo;
}

const TodoItem: FC<TodoItemsProps> = ({todo}) => {
    return (
        <div>
            <input type={'checkbox'} checked={todo.completed}/>
            {todo.id}.{todo.title}
        </div>
    );
};

export default TodoItem;
