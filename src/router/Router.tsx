import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import UserPage from "../pages/UserPage";
import PostPage from "../pages/PostPage";
import CommentPage from "../pages/CommentPage";

export const routerConfig = createBrowserRouter([
    {path: '/', element: <MainLayout/>, errorElement: <h1>you broke my site</h1>, children: [
            {index: true, element: <HomePage/>},
            {path: 'users', element: <UserPage/>, children:[
                    {path: ':id', element: <PostPage/>, children:[
                            {path: "posts/:postId", element: <CommentPage/>}
                        ]}
                ]},

        ]}
])