import { type FC, useEffect, useState } from "react";
import type { IUser } from "../types/types";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

interface UserItemPageParam {
    id: string;
}

const UserItemPage: FC = () => {
    const [user, setUser] = useState<IUser | null>(null);

    const params = useParams();
    const id = params.id;

    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            fetchUser();
        }
    }, [id]);

    async function fetchUser() {
        try {
            const response = await axios.get<IUser>(
                `https://jsonplaceholder.typicode.com/users/${id}`
            );
            setUser(response.data);
        } catch (e) {
            alert(e);
        }
    }

    return (
        <div>
            <button onClick={() => navigate("/users")}>back</button>
            <h1>Page User</h1>
            <p>{user?.name}</p>
            <p>city {user?.address.city}</p>
            <p>street {user?.address.street}</p>
            <p>zipcode {user?.address.zipcode}</p>
        </div>
    );
};

export default UserItemPage;
