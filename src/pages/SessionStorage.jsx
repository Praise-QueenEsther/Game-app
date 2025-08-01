import { useState, useEffect } from "react";

export default function WelcomeWithSession() {
  const [name, setName] = useState("");

  useEffect(() => {
    
    const savedName = sessionStorage.getItem("username");
    if (savedName) {
      setName(savedName);
    }
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    setName(value);
    sessionStorage.setItem("username", value); 
  };

  return (
    <div>
      <h2>Welcome, {name || "Guest"}</h2>
      <input value={name} onChange={handleChange} placeholder="Enter name" />
    </div>
  );
}
