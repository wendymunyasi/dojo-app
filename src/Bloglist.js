const BlogList = (props) => {
  const blogs  = props.blogs;
  const title = props.title;
// you can destructure the props directly in the const
// and write what properties you want: i.e;
// const BlogList = ({blogs, title}) => {
// then don't  declare the const variables

  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}.</p>
        </div>
      ))}
    </div>
  );
}

export default BlogList;
