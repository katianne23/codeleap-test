import "./styles.css";

export default function DeletePost({ onCancel, onConfirm }) {
  return (
    <div className="modal-overlay">

      <div className="modal">

        <h3>Are you sure you want to delete this item?</h3>

        <div className="modal-buttons">

          <button className="cancel" onClick={onCancel}>
            Cancel
          </button>

          <button className="delete" onClick={onConfirm}>
            Delete
          </button>

        </div>

      </div>

    </div>
  );
}