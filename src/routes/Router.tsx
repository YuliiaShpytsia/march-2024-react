import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/HomePage";
import CharacterPage from "../pages/CharacterPage";

export const routerConfig = createBrowserRouter([
    {path: '/', element: <MainLayout/>, errorElement: <h1>you broke my site</h1>, children: [
            {index: true, element: <HomePage/>},
            {path: 'characters', element: <CharacterPage/>}

    ]}
])