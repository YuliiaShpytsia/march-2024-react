import React from 'react';
import {useAppSelector} from "../redux/store";
import PostComponent from "./PostComponent";


const PostsComponent = () => {
    let {posts, isLoaded} = useAppSelector(state => state.postStore);
    return (
        <div>
            {
                isLoaded ? posts.map(post => <PostComponent key={post.id} post={post}/>)
                    :
                    <h3>loading ...</h3>
            }
        </div>
    );
};

export default PostsComponent