import {type FC, useState} from "react";
import React from "react";
import {CartVariant} from "./helper/card-variant.tsx";


interface CartsProps {
    width?: string;
    height?: string;
    children: React.ReactNode;
    variant: CartVariant;
    onClick: (num: number) => void;
}

const Card: FC<CartsProps> = ({onClick,width, height, children, variant}) => {
    const [state,setState] = useState(0);
    return (
        <div style={{
            width, height, border: variant === CartVariant.outlined ? '1px solid gray' : 'none',
            background: variant === CartVariant.primary ? 'lightgray' : ''
        }}
             onClick={()=>onClick(state)}
        >
            {children}
        </div>
    );
};

export default Card;
