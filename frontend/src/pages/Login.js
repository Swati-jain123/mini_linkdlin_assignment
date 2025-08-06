import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/login", form);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      navigate("/profile");
    } catch (err) {
      const errorMessage = err.response?.data?.error || "";
  
      if (errorMessage === "User not found") {
        alert("User not registered yet");
        navigate("/register");
      } else if (errorMessage === "Invalid password") {
        alert("Username or password is invalid");
      } else {
        alert("Login failed");
      }
    }
  };
  

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input className="w-full border p-2" type="email" name="email" placeholder="Email" onChange={handleChange} />
        <input className="w-full border p-2" type="password" name="password" placeholder="Password" onChange={handleChange} />
        <button className="bg-green-500 text-white px-4 py-2 rounded">Login</button>
      </form>
    </div>
  );
}