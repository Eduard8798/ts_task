import React, {type FC, useRef, useState} from 'react';

const EventsExample: FC = () => {
    const [value, setValue] = useState<string>('')
    const [drag, setdrag] = useState<boolean>(false)
    const inputRef = useRef<HTMLInputElement>(null)
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }
    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {

        console.log(inputRef.current?.value)
    }

    const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {

    }
    const dropHendler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setdrag(false)
    }
    const leaveHendler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setdrag(false)
    }
    const dragWithPrevent = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setdrag(true)
    }
    return (
        <div>
            <input value={value} onChange={changeHandler} type={'text'} placeholder={'controller'}/>
            <input ref={inputRef} type={'text'} placeholder={'ungovernable'}/>
            <button onClick={clickHandler}>
                ButtText
            </button>
            <div onDrag={dragHandler} draggable={true}
                 style={{width: '200px', height: '200px', background: 'red'}}></div>
            <div onDrop={dropHendler}
                 onDragLeave={leaveHendler}
                 onDragOver={dragWithPrevent}
                 style={{width: '200px', height: '200px', background: drag ? 'blue' : 'red', marginTop: 15}}></div>
        </div>
    );
};

export default EventsExample;
