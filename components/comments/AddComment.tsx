import React, { useState } from "react";

export default function AddComment({ slug }): JSX.Element {
  const [username, setUsername] = useState("");

  function handleChange(e: React.FormEvent<HTMLInputElement>) {
    switch (e.currentTarget.name) {
      case "username":
        setUsername(e.currentTarget.value);
        break;
      default:
        break;
    }
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    fetch(`/api/putComment/${slug}`);
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="username">
        Nome:
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          placeholder="Username"
          onChange={handleChange}
        />
      </label>
    </form>
  );
}
