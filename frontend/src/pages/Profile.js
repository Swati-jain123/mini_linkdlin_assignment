import { useEffect, useState } from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom';
export default function Profile() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.id) {
      axios
        .get(`${process.env.REACT_APP_BACKEND_URL}/api/user/${user.id}/posts`)

        .then(res => setPosts(res.data));
    }
  }, [user?.id]);

  if (!user) return <div className="p-4">Please login first</div>;

  function NavigateFeed(){
   navigate("/feed");
   return;
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Welcome, {user.name}</h2>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Bio:</strong> {user.bio}</p>

      <h3 className="text-xl font-semibold mt-6 mb-2">Your Posts</h3>
      
      <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={NavigateFeed}>Create Your Post </button>
      {posts.length === 0 && <p>No posts yet.</p>}
      {posts.map(post => (
        <div key={post.id} className="border-b py-2">
          <p className="text-sm text-gray-500">{new Date(post.createdAt).toLocaleString()}</p>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}
