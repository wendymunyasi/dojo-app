import { useState } from 'react';
import BlogList from './Bloglist';

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'Xander', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'Wolfe', id: 2 },
    { title: 'Web dev resources', body: 'lorem ipsum...', author: 'Vali', id: 3 },
  ]);

  return ( 
    <div className="home">
      <BlogList blogs={blogs} title="All blogs!" />
    </div>
  );
}

export default Home;