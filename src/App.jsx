import { useState } from "react";
import BoardFooter from "./components/BoardFooter";
import BoardHeader from "./components/BoardHeader";
import PostForm from './components/PostForm';
import PostList from "./components/PostList";
import "./style.css";

export default function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "첫 번째 게시글", authorNickname: "학생", createdDatetime: "2026-10-04", content: "우끼끼" },
    { id: 2, title: "두 번째 게시글", authorNickname: "강사", createdDatetime: "2026-10-04", content: "바나나" },
  ]);

  const [page, setPage] = useState("list");

  function addPracticePost() {
    const id = Date.now();
    setPosts((currentPosts) => [
      { id, title: `임시 게시글 ${currentPosts.length}`, authorNickname: "학생", createdDatetime: "2026-10-04" },
      ...currentPosts,
    ]);
  }

  function savePost(post) {
    setPosts((currentPosts) => [
      { id: Date.now(), ...post, authorNickname: "학생", createdDatetime: "2026-10-04" },
      ...currentPosts,
    ]);

    setPage("list");
  }

  return (
    <>
      <BoardHeader onWrite={() => setPage("write")} />
      {page === "list" && <main>
        
      </main>}
      {page === "write" && <main>
        <h1>글쓰기</h1>
        <PostForm onSave={savePost} onCancel={() => setPage("list")} />
      </main>}

      <BoardFooter />
    </>
  )
}