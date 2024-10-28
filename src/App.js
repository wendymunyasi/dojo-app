import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './notFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes> {/* This component that makes sure that only one route
                      is rendered/ shows at any one time */}
            <Route exact path="/" element={<Home />}>
               {/* Home is the component that will be rendered */}
            </Route>
            <Route exact path="/create" element={<Create />}></Route>
            <Route exact path="/blogs/:id" element={<BlogDetails />}></Route>
            <Route exact path="*" element={<NotFound />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
