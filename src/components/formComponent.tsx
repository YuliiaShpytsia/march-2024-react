import React, {FC, useState} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {postValidator} from "../validators/Post.validator";
import {IFormModel} from "../models/IFormModel";
import {IPostModel} from "../models/IPostModel";


const FormComponent: FC = () => {
    let {register, handleSubmit, formState: {errors, isValid}}
        = useForm<IFormModel>({mode: "all", resolver: joiResolver(postValidator)});

    const [post, setPost] = useState<IPostModel | null>(null);


    const save = ({title, body, userId}: IFormModel) => {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: title,
                body: body,
                userId: userId,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(value => value.json())
            .then(value => setPost(value));
    };


    return (
        <div>
            <form onSubmit={handleSubmit(save)}>
                <input type="text"{...register('title')}/>
                {errors.title && <span>{errors.title.message}</span>}
                <br/>
                <input type="text"  {...register('body')}/>
                {errors.body && <span>{errors.body.message}</span>}
                <br/>
                <input type="number"  {...register('userId')}/>
                {errors.userId && <span>{errors.userId.message}</span>}
                <br/>
                <button>save</button>
            </form>

            {post && <p> Saved post: {post.id} - {post.title}</p>}
        </div>
    );
};

export default FormComponent;