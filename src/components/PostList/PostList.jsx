import { useEffect, useState } from "react";
import { api } from "../../api/api";
import PostCard from "../PostCard/PostCard";

export default function PostList({ username, reload }) {
  const [posts, setPosts] = useState([]);
;

  async function loadPosts() {
    const response = await api.get("/");
    setPosts(response.data.results || []);
  }

  useEffect(() => {
    loadPosts();
  }, [reload]);

  return (
    <div>
      {posts.map((post) => (
        <PostCard
          key={post.id}
          post={post}
          reload={loadPosts}
          username={username}
        />
      ))}
    </div>
  );
}
