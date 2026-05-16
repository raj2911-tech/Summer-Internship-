import { useState } from 'react'

function App() {
  const [postId, setPostId] = useState('1')
  const [singlePost, setSinglePost] = useState(null)
  const [allPosts, setAllPosts] = useState([])

  const fetchAllPosts = async () => {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts')

      if (!res.ok) {
        throw new Error('Failed to fetch data')
      }

      const data = await res.json()
      setAllPosts(data)
      setSinglePost(null)
    } catch (err) {
      console.error(err)
    }
  }

  const fetchPostById = async () => {
    try {
      setSinglePost(null)
      setAllPosts([])

      const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)

      if (!res.ok) {
        throw new Error('Failed to fetch data')
      }

      const data = await res.json()
      setSinglePost(data)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div style={{ padding: '24px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Fetch Post by ID</h1>

      <input
        type="number"
        value={postId}
        onChange={(e) => setPostId(e.target.value)}
        placeholder="Enter post ID"
        style={{ padding: '8px', marginRight: '8px' }}
      />

      <button onClick={fetchPostById} style={{ padding: '8px 16px', marginRight: '8px' }}>
        Fetch Post
      </button>

      <button onClick={fetchAllPosts} style={{ padding: '8px 16px' }}>
        Fetch All Posts
      </button>

      {singlePost && (
        <div
          style={{
            marginTop: '20px',
            border: '1px solid #ccc',
            padding: '16px',
            borderRadius: '8px',
            maxWidth: '600px',
          }}
        >
          <h3>
            {singlePost.id}. {singlePost.title}
          </h3>
          <p>{singlePost.body}</p>
        </div>
      )}

      {allPosts.length > 0 && (
        <div style={{ marginTop: '20px' }}>
          <h2>All Posts</h2>
          {allPosts.map((post) => (
            <div
              key={post.id}
              style={{
                border: '1px solid #ddd',
                padding: '16px',
                borderRadius: '8px',
                marginBottom: '12px',
                maxWidth: '700px',
              }}
            >
              <h3>
                {post.id}. {post.title}
              </h3>
              <p>{post.body}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default App
