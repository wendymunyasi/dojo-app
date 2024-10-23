import { useState, useEffect } from 'react';
import BlogList from './Bloglist';

const Home = () => {
  // set initial value to null and we will update it by data fetched
  // using setBlogs function
  const [blogs, setBlogs] = useState(null);

  // const [name, setName] = useState('Dante');

  const handleDelete = (id) => {
    // This doesn't change the original data but it returns a new filtered
    // array based on the original data
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  }

  useEffect(() => {
    fetch('http://localhost:8000/blogs')
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
      })

  }, []);

  // useEffect(() => {
    // useEffect hook runs a function every render of the component
    // Used for things like fetching data or communication with a
    // sort of authentication service. Those are called side effects
    // in React.
    // The state is affected and that triggers a rerender which triggers
    // the function in useEffect to run which changes the state again
    // triggering a rerender again etc - LOOP
    // console.log("RUN USE EFFECT");
    // console.log(name);
  // }, [name]);   // [name] is a dependency array which is the second argument
                // of the useEffect hook to control where the useEffect hook runs

  return (
    <div className="home">
      {/* Create a prop called handleDelete and set it equal to handleDelete function */}
      {/* pass the props in Home.js */}
      {blogs && <BlogList blogs={blogs} title="All blogs!" handleDelete={handleDelete}/>}
      {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'Xander')} title="Xander's blogs!" /> */}
      {/* <button onClick={() => setName('Wendy')}>Change Name</button> */}
      {/* <p>{name}</p> */}
    </div>
  );
}

export default Home;