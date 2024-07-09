import React, {Component} from 'react';
import {IUserModel} from "../../models/IUserModel";
import UserComponent from "../UserComponent/UserComponent";
import {getAllUsers} from "../../services/api.service";

type StateType = {
    users: IUserModel[]
};

class UsersComponent extends Component<{}, StateType> {

    state: StateType = {
        users: []
    }

    componentDidMount() {
        getAllUsers().then(({data:{users}}) => this.setState({users: {data: {users}}}));
    }

    render() {
        return (
            <div>
                {
                    this.state.users
                        .map(user => (<UserComponent key={user.id} user={user}/>))

                }
            </div>
        );
    }
}

export default UsersComponent;