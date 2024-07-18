import React, { useEffect, useState } from 'react'
import APIService from '../APIService'
import { useCookies } from 'react-cookie'
import './Form.css' 

function Form(props) {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [token] = useCookies(['mytoken'])

    useEffect(() => {
        if (props.post) {
            setTitle(props.post.title || '')
            setDescription(props.post.description || '')
        }
    }, [props.post])

    const handleUpdatePost = () => {
        APIService.UpdatePost(props.post.id, {title, description}, token['mytoken'])
            .then(resp => {
                props.updatedInfo(resp)
                props.onClose() 
            })
            .catch(error => console.log(error))
    }

    const handleInsertPost = () => {
        APIService.InsertPost({title, description}, token['mytoken'])
            .then(resp => {
                props.insertedInfo(resp)
                props.onClose() 
            })
            .catch(error => console.log(error))
    }

    return (
        <div className="form-container">
            {props.post !== null ? (
                <div className="form-content">
                    <h3>{props.post.id ? "Update Post" : "Create Post"}</h3>
                    <div className="form-group"> 
                        <label htmlFor="title">Title</label>
                        <input
                            type="text"
                            value={title}
                            className="form-input"
                            placeholder="Enter A Title"
                            onChange={e => setTitle(e.target.value)}
                        />
                    </div>
                    <div className="form-group"> 
                        <label htmlFor="description">Description</label>
                        <input
                            type="text"
                            value={description}
                            className="form-input"
                            placeholder="Enter A Description"
                            onChange={e => setDescription(e.target.value)}
                        />
                    </div>
                    <div className="form-actions">
                        {props.post.id ? (
                            <button onClick={handleUpdatePost}>Update</button>
                        ) : (
                            <button onClick={handleInsertPost}>Post</button>
                        )}
                    </div>
                </div>
            ) : null}
        </div>
    )
}

export default Form