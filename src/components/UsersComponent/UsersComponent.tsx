import React, {Component} from 'react';
import {IUserModel} from "../../models/IUserModel";
import UserComponent from "../UserComponent/UserComponent";
import {getAllUsers, getPosts} from "../../services/api.service";
import {IPostModel} from "../../models/IPostModel";
import PostComponent from "../PostComponent/PostComponent";
import axios from "axios";

type StateType = {
    users: IUserModel[],
    posts: IPostModel[]
};

class UsersComponent extends Component<{}, StateType> {

    state: StateType = {
        users: [],
        posts: []
    }

    componentDidMount() {
        getAllUsers().then(({data:{users}}) => this.setState({users: users}));
        // getPosts().then(({data:{posts}}) => this.setState({posts: posts}))
    }
    getPosts = (id: number) => {
        axios.get(`https://dummyjson.com/users/${id}/posts`).then(value => this.setState({posts: value.data.posts}))
    }


    render() {
        return (
            <div>
                {this.state.users.map(user => (<UserComponent key={user.id} user={user} getPosts={this.getPosts}/>))}
                {this.state.posts.map(post => (<PostComponent key={post.id} post={post}/>))}
            </div>
        );
    }
}

export default UsersComponent;