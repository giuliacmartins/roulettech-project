import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Post from './components/post/Post'; 

function App() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function fetchPosts() {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/posts/');
                setPosts(response.data);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        }
        fetchPosts();
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <h1>Welcome to My Blog</h1>
            </header>
            <main>
                {posts.map(post => (
                    <Post key={post.id} post={post} />
                ))}
            </main>
        </div>
    );
}

export default App;