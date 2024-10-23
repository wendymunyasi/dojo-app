import { useState, useEffect } from 'react';
import BlogList from './Bloglist';

const Home = () => {
  // set initial value to null and we will update it by data fetched
  // using setBlogs function
  const [blogs, setBlogs] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // const [name, setName] = useState('Dante');

  // const handleDelete = (id) => {
  //   // This doesn't change the original data but it returns a new filtered
  //   // array based on the original data
  //   const newBlogs = blogs.filter((blog) => blog.id !== id);
  //   setBlogs(newBlogs);
  // }

  useEffect(() => {
    setTimeout(() => {
      fetch('http://localhost:8000/blogs')
        .then((res) => {
          if (!res.ok) {
            throw Error('Could not fetch data');
            // The error is caught by the catch block below
          }
          return res.json()
        })
        .then((data) => {
          setBlogs(data);
          setIsLoading(false);
          setError(null); // set it to null when we have data
        })
        .catch((err) => {
          setIsLoading(false); // set it to false when there is an error
          setError(err.message);
        });
    }, 1000); // fire after 1 second/ display loading for 1 s
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
      {error && <div>{error}</div>}  {/*output error if it exists*/}
      {/* Create a prop called handleDelete and set it equal to handleDelete function */}
      {/* pass the props in Home.js */}
      {isLoading && <div>Loading...</div> }
      {blogs && <BlogList blogs={blogs} title="All blogs!"/>}
      {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'Xander')} title="Xander's blogs!" /> */}
      {/* <button onClick={() => setName('Wendy')}>Change Name</button> */}
      {/* <p>{name}</p> */}
    </div>
  );
}

export default Home;