import { useEffect, useState } from "react";
import axios from "axios";

export default function Feed() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState("");
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/posts`);
    setPosts(res.data);
  };

  const handlePost = async () => {
    if (!newPost.trim()) {
      alert("Post cannot be empty!");
      return;
    }
  
    try {
      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/posts`, {
        userId: user.id,
        content: newPost,
      });
      setNewPost("");
      fetchPosts();
    } catch (err) {
      console.error("Error posting:", err);
    }
  };
  

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Post Feed</h2>
      <div className="mb-4">
        <textarea
          className="w-full border p-2 mb-2"
          rows="3"
          placeholder="What's on your mind?"
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
        />
        <button onClick={handlePost} className="bg-blue-600 text-white px-4 py-2 rounded">Post</button>
      </div>
      {posts.map(post => (
        <div key={post.id} className="border-b py-2">
          <p className="font-semibold">{post.User?.name} <span className="text-sm text-gray-500">({new Date(post.createdAt).toLocaleString()})</span></p>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}
