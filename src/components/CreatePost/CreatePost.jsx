import { useState, useEffect } from "react";
import { api } from "../../api/api";
import "./style.css";

export default function CreatePost({ reload }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [username, setUsername] = useState("");
  const isButtonDisabled = title.trim() === "" || content.trim() === "";

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const postData = {
        username: username,
        title: title,
        content: content,
      };

      const response = await api.post("/", postData);

      console.log("Post criado:", response.data);

      setTitle("");
      setContent("");

      reload();
    } catch (error) {
      console.error("Erro ao criar post:", error);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="form-create">
      <h2>What's on your mind?</h2>

      <div className="form-fields">
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Hello world"
          required
        />
      </div>

      <div className="form-fields">
        <label>Content</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Content here"
          required
        />
      </div>

      <div className="button-create">
        <button
          type="submit"
          disabled={isButtonDisabled}
          style={{
            opacity: isButtonDisabled ? 0.5 : 1,
            cursor: isButtonDisabled ? "not-allowed" : "pointer",
          }}
        >
          Create
        </button>
      </div>
    </form>
  );
}
