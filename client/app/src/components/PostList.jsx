import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/posts.jsx'); // Replace with your actual API endpoint
        setPosts(response.data.posts); // Assuming posts are inside a 'posts' key in the response
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            {/* Display other post details */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
