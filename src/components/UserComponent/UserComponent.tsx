import React, {Component} from 'react';
import {IUserModel} from "../../models/IUserModel";

type PropsType = {user:IUserModel, getPosts: (id: number) => void};

class UserComponent extends Component<PropsType> {

    render() {
        return (
            <div>
                <p>User# - {this.props.user.id}</p>
                <p>{this.props.user.firstName} {this.props.user.lastName}</p>
                <button onClick={() => this.props.getPosts(this.props.user.id)}>Click</button>
                <hr/>
            </div>

        );
    }
}

export default UserComponent;
