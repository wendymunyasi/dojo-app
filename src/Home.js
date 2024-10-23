import { useState, useEffect } from 'react';
import BlogList from './Bloglist';
import useFetch from './useFetch';

const Home = () => {
  // set initial value to null and we will update it by data fetched
  // using setBlogs function

  // const [name, setName] = useState('Dante');

  // const handleDelete = (id) => {
  //   // This doesn't change the original data but it returns a new filtered
  //   // array based on the original data
  //   const newBlogs = blogs.filter((blog) => blog.id !== id);
  //   setBlogs(newBlogs);
  // }
  const {data, isLoading, error} = useFetch('http://localhost:8000/blogs')
  // destructure the above props from useFetch



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
      {error && <div>{error}</div>}  {/*output error if it exists*/}
      {/* Create a prop called handleDelete and set it equal to handleDelete function */}
      {/* pass the props in Home.js */}
      {isLoading && <div>Loading...</div> }
      {data && <BlogList blogs={data} title="All blogs!"/>}
      {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'Xander')} title="Xander's blogs!" /> */}
      {/* <button onClick={() => setName('Wendy')}>Change Name</button> */}
      {/* <p>{name}</p> */}
    </div>
  );
}

export default Home;