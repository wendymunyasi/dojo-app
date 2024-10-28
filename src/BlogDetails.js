import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const {id} = useParams(); // useParams() grabs route params from route
  // destructure the parameter in the const
  const {data:blog, isLoading, error} = useFetch('http://localhost:8000/blogs/' + id);
  const history = useNavigate();

  const handleDelete = () => {
    fetch('http://localhost:8000/blogs/' + blog.id, {
      method: 'DELETE'
    }).then(() => {
      history('/'); // navigate back to homepage
    })
  }

  return (
    <div className="blog-details">
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleDelete}>Delete this blog</button>
        </article>
      )}
    </div>
  );
}

export default BlogDetails;
