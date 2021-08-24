const Post = ({ post }:{post:any}) => {
  return(
    <div key={post.id}>
      <span>{post.id}</span>
      {" : "}
      <span className="cursor-pointer text-blue-500 border-b border-blue-500 hover:bg-gray-200">
        {post.title}
      </span>
    </div>
  );
}
export default Post;