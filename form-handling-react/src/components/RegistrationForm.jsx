import { useState } from "react";

function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (!username || !email || !password) {
      alert("All fields are required!");
      return;
    }

    console.log("Form submitted:", { username, email, password });
    alert("User registered successfully!");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-sm mx-auto mt-10">
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={username}   
        onChange={(e) => setUsername(e.target.value)}
        className="border rounded px-3 py-2"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={email}      
        onChange={(e) => setEmail(e.target.value)}
        className="border rounded px-3 py-2"
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={password}   
        onChange={(e) => setPassword(e.target.value)}
        className="border rounded px-3 py-2"
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Register
      </button>
    </form>
  );
}

export default RegistrationForm;
