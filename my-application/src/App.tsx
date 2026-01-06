import {BrowserRouter, Routes, Route, NavLink} from "react-router-dom";
import UsePage from "./components/UsePage.tsx";
import TodoPage from "./components/TodoPage.tsx";
import UserItemPage from "./components/UserItemPage.tsx";
import TodosItemPage from "./components/TodosItemPage.tsx";

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <NavLink to="/users">users</NavLink>
                <NavLink to="/todos">todos</NavLink>
            </div>
            <Routes>
                <Route path="/users" element={<UsePage />} />
                <Route path="/todos" element={<TodoPage />} />
                <Route path="/users/:id" element={<UserItemPage />} />
                <Route path="/todos/:id" element={<TodosItemPage />} />
//add method
            </Routes>
        </BrowserRouter>
    );
};

export default App;
