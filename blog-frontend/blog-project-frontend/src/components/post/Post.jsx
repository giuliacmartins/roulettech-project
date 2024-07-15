// src/components/Post.js
import React from 'react';
import axios from 'axios';

const Post = ({ post }) => {
    const { id, title, content, comments } = post;

    const handleAddComment = async () => {
        const author = prompt('Enter your name:');
        const text = prompt('Enter your comment:');

        if (author && text) {
            try {
                await axios.post(`http://127.0.0.1:8000/api/comments/`, { post: id, author, text });
                alert('Comment added successfully!');
                window.location.reload();  // Refresh page to see new comment
            } catch (error) {
                console.error('Error adding comment:', error);
                alert('Failed to add comment.');
            }
        } else {
            alert('Author name and comment text are required.');
        }
    };

    return (
        <div className="post">
            <h2>{title}</h2>
            <p>{content}</p>
            <h3>Comments:</h3>
            <ul>
                {comments.map(comment => (
                    <li key={comment.id}>
                        <strong>{comment.author}:</strong> {comment.text}
                    </li>
                ))}
            </ul>
            <button onClick={handleAddComment}>Add Comment</button>
        </div>
    );
};

export default Post;