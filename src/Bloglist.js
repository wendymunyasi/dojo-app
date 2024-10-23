const BlogList = (props) => {
  const blogs  = props.blogs;
  const title = props.title;
  // const handleDelete = props.handleDelete;
// you can destructure the props directly in the const
// and write what properties you want: i.e;
// const BlogList = ({blogs, title, handleDelete}) => {
// then don't  declare the const variables

  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}.</p>
          {/* Define a function that will be called when the button is clicked
          and pass the blog.id as a parameter
          Declare the function in Home.js because that is where the state
          is */}
          {/* <button onClick={() => handleDelete(blog.id)}>Delete blog</button> */}
        </div>
      ))}
    </div>
  );
}

export default BlogList;
