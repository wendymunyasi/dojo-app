import { useState } from 'react';
import BlogList from './Bloglist';

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'Xander', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'Wolfe', id: 2 },
    { title: 'Web dev resources', body: 'lorem ipsum...', author: 'Xander', id: 3 },
  ]);

  const handleDelete = (id) => {
    // This doesn't change the original data but it returns a new filtered
    // array based on the original data
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  }

  return ( 
    <div className="home">
      {/* Create a prop called handleDelete and set it equal to handleDelete function */}
      {/* pass the props in Home.js */}
      <BlogList blogs={blogs} title="All blogs!" handleDelete={handleDelete}/>
      {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'Xander')} title="Xander's blogs!" /> */}
    </div>
  );
}

export default Home;