import React from 'react'
import APIService from '../APIService'
import { useCookies } from 'react-cookie'
import './Post.css'

function Post(props) {
    const [token] = useCookies(['mytoken']);

    const editBtn = (post) => {
        props.editBtn(post);
    };

    const deleteBtn = (post) => {
        APIService.DeletePost(post.id, token['mytoken'])
        .then(() => props.deleteBtn(post))
        .catch(error => console.log(error));
    };

    return (
        <div className="posts-container">
            {props.posts && props.posts.map(post => {
                return (
                    <div key={post.id} className="post-box">
                        <h1 className="post-title">{post.title}</h1>
                        <p className="post-description">{post.description}</p>
                        <div className="post-actions">
                            <button className="post-button" onClick={() => editBtn(post)}>Update</button>
                            <button className="post-button delete-button" onClick={() => deleteBtn(post)}>Delete</button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Post;