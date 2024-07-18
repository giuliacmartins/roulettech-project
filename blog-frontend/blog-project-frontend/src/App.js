// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Post from './components/post/Post'; 

// function App() {
//     const [posts, setPosts] = useState([]);

//     useEffect(() => {
//         async function fetchPosts() {
//             try {
//                 const response = await axios.get('http://127.0.0.1:8000/api/posts/');
//                 setPosts(response.data);
//             } catch (error) {
//                 console.error('Error fetching posts:', error);
//             }
//         }
//         fetchPosts();
//     }, []);

//     return (
//         <div className="App">
//             <header className="App-header">
//                 <h1>Welcome to My Blog</h1>
//             </header>
//             <main>
//                 {posts.map(post => (
//                     <Post key={post.id} post={post} />
//                 ))}
//             </main>
//         </div>
//     );
// }

// export default App;

import React, { useEffect, useState } from 'react'
import Post from './components/post/Post'
import Navbar from './components/navbar/Navbar'
import Form from './components/form/Form'
import { useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie'

function App() {
  const [posts, setPosts] = useState([])
  const [editPost, setEditPost] = useState('')
  const [token, setToken, removeToken] = useCookies(['mytoken'])
  let navigate = useNavigate()

  useEffect(() => {
    fetch('http://localhost:8000/api/posts/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': '041f511826f7d4a19d497162638be72120a173b9',
      }
    })
    .then(resp => resp.json())
    .then(resp => setPosts(resp))
    .catch(error =>  console.log(error))
  }, [])

  const editBtn = (post) => {
    setEditPost(post)
  }

  const deleteBtn = (post) => {
    const new_post = posts.filter(mypost => {
      if (mypost.id === post.id) {
        return false
      }
      return true
    })
    setPosts(new_post)
  }

  const updatedInfo = (post) => {
    const new_post = posts.map(mypost => {
      if (mypost.id === post.id) {
        return post
      } else {
        return mypost
      }
    })
    setPosts(new_post)
  }

  const insertedInfo = (post) => {
    const new_post = [...posts,post]
    setPosts(new_post)
  }

  const postForm = () => {
    setEditPost({title:'', description:''})
  }

  const logoutBtn = () => {
    removeToken(['mytoken'])
  }

  return (
    <div className="app">
      <Navbar logoutBtn={logoutBtn} />
      <div className="row">
        <div>
          <button onClick={postForm}>Create A Post</button>
        </div>
      </div>
      <Post posts={posts} editBtn={editBtn} deleteBtn={deleteBtn} />
      <Form post={editPost} updatedInfo={updatedInfo} insertedInfo={insertedInfo} />
    </div>
  )
}

export default App