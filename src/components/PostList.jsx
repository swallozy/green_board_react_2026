import PostItem from "./PostItem";

export default function PostList({ posts }) {
    return (
        <ul id="post-list" className="post-list">
            {posts.map((post) => <PostItem key={post.id} post={post} />)}
        </ul>
    );
}