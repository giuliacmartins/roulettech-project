import React, { useEffect, useState } from 'react'
import Post from './components/post/Post'
import Navbar from './components/navbar/Navbar'
import Form from './components/form/Form'
import { useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import APIService from './components/APIService'
import './App.css'

function App() {
  const [posts, setPosts] = useState([])
  const [editPost, setEditPost] = useState(null) 
  const [token, , removeToken] = useCookies(['mytoken'])
  const [showForm, setShowForm] = useState(false)
  let navigate = useNavigate()

  useEffect(() => {
    if (token['mytoken']) {
      APIService.FetchPosts(token['mytoken'])
        .then(resp => setPosts(resp))
        .catch(error => console.log(error))
    } else {
      navigate('/')
    }
  }, [token, navigate])

  const editBtn = (post) => {
    setEditPost(post)
    setShowForm(true) 
  }

  const deleteBtn = (post) => {
    const new_posts = posts.filter((mypost) => mypost.id !== post.id)
    setPosts(new_posts)
  }

  const updatedInfo = (post) => {
    const new_posts = posts.map(mypost => {
      if (mypost.id === post.id) {
        return post
      } else {
        return mypost
      }
    })
    setPosts(new_posts)
  }

  const insertedInfo = (post) => {
    const new_posts = [...posts, post]
    setPosts(new_posts)
  }

  const postForm = () => {
    setEditPost({ title: '', description: '' })
    setShowForm(true)
  }

  const handleCloseForm = () => {
    setShowForm(false) 
    setEditPost(null) 
  }

  const logoutBtn = () => {
    removeToken(['mytoken'])
  }

  return (
    <div className="app">
      <Navbar logoutBtn={logoutBtn} />
      <div className="content">
        {showForm && (
          <Form
            post={editPost}
            updatedInfo={updatedInfo}
            insertedInfo={insertedInfo}
            onClose={handleCloseForm} 
          />
        )}
        <div>
          <button onClick={postForm}>Create A Post</button>
        </div>
        <Post posts={posts} editBtn={editBtn} deleteBtn={deleteBtn} />
      </div>
    </div>
  )
}

export default App