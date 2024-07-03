import React, {FC} from 'react';
import {IUserModel} from "../../models/IUserModel";
import classes from "./User.module.css";

type IProps = {item:IUserModel} & {lift?:(id:number)=>void};

const UserComponent: FC <IProps> = ({item, lift}) => {

    const onClickHandler = () => {
        if (lift) {
            lift(item.id);
        }
    };

    return (
        <div className={classes.oneUserBox}>
            <p className={classes.userInfo}>User# - {item.id}</p>
            <p className={classes.userInfo}>{item.firstName} {item.lastName}</p>
            <p className={classes.userInfo}>{item.age} y.o., {item.age}</p>
            <p className={classes.userInfo}>{item.phone}</p>
            <p className={classes.userInfo}> {item.email}</p>
            <div>
                <button className={classes.button} onClick={onClickHandler}>show posts of user</button>
            </div>
        </div>
    );
};

export default UserComponent;