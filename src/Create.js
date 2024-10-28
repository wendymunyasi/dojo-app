import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('Trizah');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // prevents page from refreshing on submit
    const blog = {title, body, author};

    setIsLoading(true); // true when submitting a blog

    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(blog) // turn blog from obj to json string
    }).then(() => {
      console.log("New blog created!")
      setIsLoading(false); // FALSE when done submitting a blog
    })
  }

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)} // e is event, this picks
          // value from input and triggers the onChange function with setTitle
          // thus updates the title
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="Wendy">Wendy</option>
          <option value="Trizah">Trizah</option>
        </select>
        {!isLoading && <button>Add Blog</button>}
        {isLoading && <button disabled>Adding Blog</button>}
      </form>
    </div>
  );
}

export default Create;
