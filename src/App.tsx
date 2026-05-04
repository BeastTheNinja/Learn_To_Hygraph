import { useFetchBlog } from "./hook/useFetchBlog";
import { BlogGraphQL } from "./query/BlogHygraph";
import type { BlogPost } from "./types/Blog";
import { RichText } from "@graphcms/rich-text-react-renderer";

function App() {
  const { data, loading, error } = useFetchBlog(BlogGraphQL);

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {String(error)}</p>}
      {data && (
        <div>
          {data?.blogs.map((blog: BlogPost) => (
            <div key={blog.headLine}>
              <h2>{blog.headLine}</h2>
              <p>By {blog.author}</p>
              <RichText content={blog.paragraph.raw} />
            </div>
          ))}
        </div>
      )}

    </>
  )
}
export default App
