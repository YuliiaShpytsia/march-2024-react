import React, {useEffect} from 'react';
import PostsComponent from "../components/PostsComponent";
import {useAppDispatch} from "../redux/store";
import {postActions} from "../redux/slices/postSlice";

const PostsPage = () => {

    let dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(postActions.loadPosts());

    }, []);
    return (
        <div>
            <PostsComponent/>
        </div>
    );
};

export default PostsPage;