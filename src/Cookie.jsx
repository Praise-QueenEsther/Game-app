
import { useState, useEffect } from "react";
import Cookies from "js-cookie";

export default function CookieStorage() {
  const [name, setName] = useState("");

  useEffect(() => {
    
    const savedName = Cookies.get("username");
    if (savedName) {
      setName(savedName);
    }
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    setName(value);
    Cookies.set("username", value, { expires: 7 }); 
  };

  return (
    <div>
      <h2>Welcome, {name || "Guest"}</h2>
      <input
        type="text"
        value={name}
        onChange={handleChange}
        placeholder="Enter your name"
      />
    </div>
  );
}
