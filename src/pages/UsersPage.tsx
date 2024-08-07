import React, {useEffect} from 'react';
import UsersComponent from "../components/UsersComponent";
import {useAppDispatch} from "../redux/store";
import {userAction} from "../redux/slices/userSlice";

const UsersPage = () => {

    let dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(userAction.loadUsers());

    }, []);
    return (
        <div>
            <UsersComponent/>
        </div>
    );
};

export default UsersPage;