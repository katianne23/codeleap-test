import { useState } from "react";
import { api } from "../../api/api";
import "./styles.css";

export default function EditPost({ post, reload, onCancel }) {
  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);

  async function updatePost() {
    await api.patch(`/${post.id}/`, {
      title,
      content,
    });

    reload();
    onCancel();
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3>Edit item</h3>

        <div className="form-fields">
          <label>Title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="input"
          />
        </div>
        <div className="form-fields">
          <label>Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="textarea"
          />
        </div>

        <div className="modal-buttons">
          <button className="cancel" onClick={onCancel}>
            Cancel
          </button>

          <button className="save" onClick={updatePost}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
