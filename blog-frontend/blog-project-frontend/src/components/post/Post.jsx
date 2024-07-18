// import React from 'react';
// import axios from 'axios';

// const Post = ({ post }) => {
//     const { id, title, content, comments } = post;

//     const handleAddComment = async () => {
//         const author = prompt('Enter your name:');
//         const text = prompt('Enter your comment:');

//         if (author && text) {
//             try {
//                 await axios.post(`http://127.0.0.1:8000/api/comments/`, { post: id, author, text });
//                 alert('Comment added successfully!');
//                 window.location.reload();  // Refresh page to see new comment
//             } catch (error) {
//                 console.error('Error adding comment:', error);
//                 alert('Failed to add comment.');
//             }
//         } else {
//             alert('Author name and comment text are required.');
//         }
//     };

//     return (
//         <div className="post">
//             <h2>{title}</h2>
//             <p>{content}</p>
//             <h3>Comments:</h3>
//             <ul>
//                 {comments.map(comment => (
//                     <li key={comment.id}>
//                         <strong>{comment.author}:</strong> {comment.text}
//                     </li>
//                 ))}
//             </ul>
//             <button onClick={handleAddComment}>Add Comment</button>
//         </div>
//     );
// };

// export default Post;

import React from 'react'
import APIService from '../APIService'

function Post(props) {

    const editBtn = (post) => {
        props.editBtn(post)
    }

    const deleteBtn = (post) => {
        APIService.DeletePost(post.id)
        .then(() => props.deleteBtn(post))
        .catch(error => console.log(error))
    }

    return (
        <div>
            {props.posts && props.posts.map(post => {
                return (
                    <div key={post.id}>
                        <h1>{post.title}</h1>
                        <p>{post.description}</p>

                        <div className="row">
                            <div>
                                <button onClick={() => editBtn(post)}>Update</button>
                            </div>
                            <div>
                                <button onClick={() => deleteBtn(post)}>Delete</button>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Post