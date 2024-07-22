import React, {Component} from 'react';
import {IPostModel} from "../../models/IPostModel";

type PropsType = {post:IPostModel};

class PostComponent extends Component<PropsType> {

    render() {
        return (
            <div>
                <p>Post# {this.props.post.id}: {this.props.post.title}</p>
                <p>{this.props.post.body}</p>
                <hr/>
            </div>

        );
    }
}

export default PostComponent;