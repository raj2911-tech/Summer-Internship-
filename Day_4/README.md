# 📑 Daily Task Submission Report
**MERN Stack Internship | Prelytix Private Limited**

| Field | Details |
| :--- | :--- |
| **Student Name** | Raj Ghoniya |
| **Internship ID** | PRL-MERN-2026-XXXX |
| **Date** | 2026-05-15 |
| **Course Day** | Day 4 |
| **GitHub Repo** | https://github.com/raj2911-tech/Summer-Internship- |

---

## 🎯 Daily Objective

> Today, I learned how to fetch data from an API using React. I practiced using the `fetch()` method to get data from `jsonplaceholder.typicode.com` and display both all posts and a single post by ID on the web page.

---

## 🛠️ Implementation & Changes (Self-Documentation)

### 1. New Features / Logic Implemented
- **What:** Implemented API fetching for posts data.
- **How:** Used the `fetch()` method to request data from `https://jsonplaceholder.typicode.com/posts`.
- **Why:** To understand how to retrieve and display remote data in a React application.

### 2. Fetch Data by ID
- Added logic to fetch a single post using an ID.
- Used the API endpoint `https://jsonplaceholder.typicode.com/posts/1` for testing.
- Learned how dynamic URLs can be used to fetch specific records.

### 3. UI/UX Enhancements
- Added input field for entering a post ID.
- Added buttons to fetch all posts and fetch a single post.
- Displayed fetched data directly on the page.

---

## 💻 Code Snippet: My Primary Contribution

````jsx
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
    <div>
      <input
        type="number"
        value={postId}
        onChange={(e) => setPostId(e.target.value)}
      />
      <button onClick={fetchPostById}>Fetch Post</button>
      <button onClick={fetchAllPosts}>Fetch All Posts</button>
    </div>
  )
}

export default App

  ```

  ---


## 💡 Key Learnings

### API Fetching
- `fetch()` is used to get data from APIs.
- `await res.json()` converts the response into JSON format.
- `res.ok` helps check whether the request was successful.
- Dynamic API endpoints can be used to fetch data by ID.

---

## 🔗 Live Preview

- **Local Dev Server:** http://localhost:5173
- **Git Repository:** https://github.com/raj2911-tech/Summer-Internship-

---

**Signature:**  
*Raj Ghoniya*  
*Date: 2026-05-15*

