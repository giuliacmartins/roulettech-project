import React, { useEffect, useState } from 'react'
import APIService from '../APIService'

function Form(props) {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    useEffect(() => {
        setTitle(props.post.title)
        setDescription(props.post.description)
    }, [props.post])

    const updatePost = () => {
        APIService.UpdatePost(props.post.id, {title,description})
        .then(resp => props.updatedInfo(resp))
        setTitle('')
        setDescription('')
    }

    const insertPost = () => {
        APIService.InsertPost({title,description})
        .then(resp => props.insertedInfo(resp))
        setTitle('')
        setDescription('')
    }

    return (
        <div>
            {props.post ? (<div>
                <div>
                    <div className="form-group"> 
                        <label htmlFor="title">Title</label>
                        <input type="text" value={title} className="form" placeholder="Enter A Title" onChange={e => setTitle(e.target.value)} />
                    </div>
                </div>
                <div>
                    <div className="form-group"> 
                        <label htmlFor="description">Description</label>
                        <input type="text" value={description} className="form" placeholder="Enter A Description" onChange={e => setDescription(e.target.value)} />
                    </div>
                </div>
                <br/>
                {props.post.id ? 
                <button onClick={updatePost}>Update Post</button>
                : 
                <button onClick={insertPost}>Post</button>
                }
                
            </div>) : null}
        </div>
    )
}

export default Form