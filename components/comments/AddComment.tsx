import { useState, SyntheticEvent } from "react";

export default function AddComment({ slug }: { slug: string }): JSX.Element {
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

  function handleSubmit(e: SyntheticEvent) {
    e.preventDefault();
    fetch(`http://localhost:3000/api/putComment/${slug}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ username }),
    });
  }

  return (
    <form>
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
      <button type="submit" onKeyDown={(e) => handleSubmit(e)} onClick={(e) => handleSubmit(e)}>
        Invia
      </button>
    </form>
  );
}
