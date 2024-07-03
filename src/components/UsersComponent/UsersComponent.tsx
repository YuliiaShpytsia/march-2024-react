import React,  {FC, useEffect, useState} from 'react';
import {IUserModel} from "../../models/IUserModel";
import UserComponent from "../UserComponent/UserComponent";
import {getAllUsers} from "../../services/api.service";
import classes from "./Users.module.css";

type IUserProps = {lift?:(userid:number)=>void}

const UsersComponent:FC<IUserProps>= ({lift}) => {
    const [users, setUsers] = useState<IUserModel[]>([])
    useEffect(() => {
        getAllUsers().then(({data:{users}}) => setUsers(users))
    }, []);


    return (
        <div className={classes.usersBox}>
            {users.map((user) => (<UserComponent key={user.id} lift={lift}  item={user}/>))}
        </div>
    );
};


export default UsersComponent;