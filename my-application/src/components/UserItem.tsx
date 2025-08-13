import  {type FC} from "react";
import type {IUser} from "../types/types.tsx";

interface UserItemProps {
    user: IUser;
    onClick : (user : IUser) => void
}

const UserItem: FC<UserItemProps> = ({user,onClick}) => {
    return (
        <div onClick={() => onClick(user)} style={{padding: '16px', border: '1px solid blue'}}>
            {user.id}.{user.name} live in city {user.address.city} street {user.address.street}
        </div>
    );
};

export default UserItem;
