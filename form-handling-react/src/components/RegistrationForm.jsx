import { useState } from "react";

function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};

    
    if (!username) {
      newErrors.username = "Username is required";
    }
    if (!email) {
      newErrors.email = "Email is required"; 
    }
    if (!password) {
      newErrors.password = "Password is required"; 
    }

    setErrors(newErrors); 

    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted:", { username, email, password });
      alert("User registered successfully!");
    }
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
      {errors.username && <p className="text-red-600 text-sm">{errors.username}</p>}

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border rounded px-3 py-2"
      />
      {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border rounded px-3 py-2"
      />
      {errors.password && <p className="text-red-600 text-sm">{errors.password}</p>}

      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Register
      </button>
    </form>
  );
}

export default RegistrationForm;
