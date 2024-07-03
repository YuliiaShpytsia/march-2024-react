import React, {useState} from 'react';
import './App.css';
import UsersComponent from "./components/UsersComponent/UsersComponent";
import PostsComponent from "./components/PostsComponent/PostsComponent";
import {getAllPostsOfUser} from "./services/api.service";
import {IPostModel} from "./models/IPostModel";

const App = () => {

    const [posts, setPosts] = useState<IPostModel[]>([]);


    const lift = (userId: number) => {
        getAllPostsOfUser(userId).then(({data}) => {
            setPosts(data.posts);
        })
    }
    return (
        <div className="App">
            <div className={'users'}><UsersComponent lift={lift}/></div>
            <div className={'posts'}>
                <PostsComponent posts={posts} />
            </div>
        </div>
    );
};

export default App;
