import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "", bio: "" });
  const navigate = useNavigate();
  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/register`, form);
      alert("Registration successful");
      navigate("/");
    } catch (err) {
      alert("Error registering");
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Register</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        {["name", "email", "password", "bio"].map((field) => (
          <input key={field}
            className="w-full border p-2"
            type={field === "password" ? "password" : "text"}
            name={field}
            placeholder={field}
            onChange={handleChange}
            required
          />
        ))}
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Register</button>
      </form>
    </div>
  );
}
