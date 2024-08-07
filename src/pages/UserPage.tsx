import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../redux/store";
import {userAction} from "../redux/slices/userSlice";

const UserPage = () => {
    let {id} = useParams();

    let dispatch = useAppDispatch();
    let user = useAppSelector(state => state.userStore.user);

    useEffect(() => {
        if (id) dispatch(userAction.loadUser(+id));
    }, [id]);


    return (
        <div>
            {JSON.stringify(user)}

        </div>
    );
};

export default UserPage;