const Navbar = () => {
  return ( 
    <nav className="navbar">
      <h1>The Dojo Blog</h1>
      <div className="links">
          <a href="/">Home</a>
          <a href="/create" style={{  // inline styling 
            color: 'white', // style is an object of key-value pairs
            backgroundColor: '#f1356d', // hence the use of second {}
            borderRadius: '8px'
          }} >New Blog</a>
      </div>
    </nav>
  );
}
 
export default Navbar;