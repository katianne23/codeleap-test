import { IoTrashBinOutline } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";
import { api } from "../../api/api";
import "./style.css";
import { useState } from "react";
import DeletePost from "../DeletePost/DeletePost";
import EditPost from "../EditPost/EditPost";



export default function PostCard({ post, reload }) {
  const [showDelete, setShowDelete] = useState(false);
  const [showEdit, setShowEdit] = useState(false);

  async function deletePost() {
    await api.delete(`/${post.id}/`);
    reload();
    setShowDelete(false);
  }

  function formatRelativeTime(dateString) {
  const date = new Date(dateString);
  const now = new Date();
  const diffInSeconds = Math.floor((now - date) / 1000);
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  const diffInHours = Math.floor(diffInMinutes / 60);
  const diffInDays = Math.floor(diffInHours / 24);

  if (diffInDays > 0) {
    return diffInDays === 1 ? "1 day ago" : `${diffInDays} days ago`;
  } else if (diffInHours > 0) {
    return diffInHours === 1 ? "1 hour ago" : `${diffInHours} hours ago`;
  } else if (diffInMinutes > 0) {
    return diffInMinutes === 1 ? "1 minute ago" : `${diffInMinutes} minutes ago`;
  } else {
    return "just now";
  }
}

  return (
    <div className="post-card">

      {showDelete && (
        <DeletePost
          onCancel={()=>setShowDelete(false)}
          onConfirm={deletePost}
        />
      )}

      {showEdit && (
        <EditPost
          post={post}
          reload={reload}
          onCancel={()=>setShowEdit(false)}
        />
      )}
      <div className="container-title-card">
        <h3>{post.title}</h3>
        <div className="buttons">
          <button onClick={()=>setShowDelete(true)}>
            <IoTrashBinOutline />
          </button>
          <button onClick={()=>setShowEdit(true)}>
            <FaRegEdit />
          </button>
        </div>
      </div>

      <div className="card-infor">
        <span>@{post.username}</span>
        <span>{formatRelativeTime(post.created_datetime)}</span>
      </div>

      <div className="card-content">
        <p>{post.content}</p>
      </div>
    </div>
  );
}

