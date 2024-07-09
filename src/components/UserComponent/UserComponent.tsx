import React, {Component} from 'react';
import {IUserModel} from "../../models/IUserModel";

type PropsType = {user:IUserModel};

class UserComponent extends Component<PropsType> {

    render() {
        return (
            <div>
                <p>User# - {this.props.user.id}</p>
                <p>{this.props.user.firstName} {this.props.user.lastName}</p>
            </div>
        );
    }
}

export default UserComponent;


// impo;
//
//
//
//
//
// const onClickHandler = () => {
//     if (lift) {
//         lift(item.id);
//     }
// };
//
// const UserComponent extend Component<PropsType> {
//     render() {
//         return (
//             <div>
//                 <p>User# - {item.id}</p>
//                 <p>{item.firstName} {item.lastName}</p>
//                     <div>
//                      <button onClick={onClickHandler}>show posts of user</button>
//                     </div>
//             </div>
//         );
//     }
// }
//
// export default UserComponent;