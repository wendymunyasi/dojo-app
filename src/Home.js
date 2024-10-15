import { useState } from 'react';
import BlogList from './Bloglist';

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'Xander', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'Wolfe', id: 2 },
    { title: 'Web dev resources', body: 'lorem ipsum...', author: 'Xander', id: 3 },
  ]);

  return ( 
    <div className="home">
      <BlogList blogs={blogs} title="All blogs!" />
      <BlogList blogs={blogs.filter((blog) => blog.author === 'Xander')} title="Xander's blogs!" />
    </div>
  );
}

export default Home;