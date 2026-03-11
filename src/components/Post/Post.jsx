import { useState } from "react";
import CreatePost from "../CreatePost/CreatePost";
import PostList from "../PostList/PostList";
import "./styles.css";

export default function Post({ username }) {
  const [reloadTrigger, setReloadTrigger] = useState(0);
  const handleReload = () => {
    setReloadTrigger((prev) => prev + 1);
  };
  return (
    <section className="posts">
      <div className="posts-container-title">
        <h1>CodeLeap Network</h1>
      </div>
      <div className="posts-container">
        <CreatePost username={username} reload={handleReload} />
        <PostList
          key={reloadTrigger}
          username={username}
          reload={handleReload}
        />
      </div>
    </section>
  );
}
