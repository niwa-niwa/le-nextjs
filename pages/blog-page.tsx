import Layout from "../components/Layout";
import Post from "../components/Post";
import { getAllPostsData } from "../lib/posts";

const Blog = ({posts}:{posts:any}) => {
  return (
    <Layout title="Blog">
      <ul className="m-10">
        {posts && posts.map((post:any)=><Post key={post.id} post={post} />)}
      </ul>
    </Layout>
  );
}
export default Blog;

export async function getStaticProps(){
  const posts:any = await getAllPostsData();
  return {
    props:{posts}
  };
}