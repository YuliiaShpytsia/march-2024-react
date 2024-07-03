import React, {FC} from 'react';
import {IPostModel} from "../../models/IPostModel";
import PostComponent from "../PostComponent/PostComponent";


interface IProps {
    posts: IPostModel[];
}

const PostsComponent: FC<IProps> = ({posts}) => {
    return (
        <div>
            {
                posts.map((post: IPostModel) => (<li ><PostComponent key={post.id} post={post}/></li>))
            }
        </div>
    );
};

export default PostsComponent;