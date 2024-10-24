import { useState, useEffect } from 'react';
/**
 * A hook to fetch a resource from a given URL.
 *
 * @returns an object with `data` and `error` properties, as well as a `loading` boolean.
 * `data` is the parsed JSON response from the URL, or `null` if there is no data yet.
 * `error` is an Error object if the fetch failed, or `null` if it succeeded.
 * `loading` is a boolean indicating whether the fetch is still in progress.
 */
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();
                              // JS function

    setTimeout(() => {
      fetch(url, {signal: abortController.signal})
        .then((res) => {
          if (!res.ok) {
            throw Error('Could not fetch data');
            // The error is caught by the catch block below
          }
          return res.json()
        })
        .then((data) => { // doesn't matter if you call this param data
          setData(data); // because it is local therefore won't clash with
          setIsLoading(false); // the data in const [data, setData]
          setError(null); // set it to null when we have data
        })
        .catch((err) => {
          if (err.name === 'AbortError') { // don't update state if error
            console.log('Fetch aborted'); // is an AbortError
          } else {
            setIsLoading(false); // set it to false when there is an error
            setError(err.message);
          }
        });
    }, 1000); // fire after 1 second/ display loading for 1 s

    return () => abortController.abort();  // This is a clean up function,
    // that returns when the component using useFetch hook unmounts

  }, [url]); // pass url as dependency so that when it changes the useEffect reruns

  return { // return value is an object - can be a string, array like
    // useState, or bool etc
    data,
    isLoading,
    error
  }
}

export default useFetch;
