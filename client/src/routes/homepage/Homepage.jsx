
import { Link } from 'react-router-dom';
import './homepage.css';
const Homepage = () => {

  
    return (
        <div className='homepage'>
        <div className="left">
            <h1>ASTRABOT</h1>
            <h2>Say Hello  to smarter, faster, and more efficient assistance</h2>
            <h3>Welcome to our AI chatbot service, where cutting-edge
             technology meets seamless interaction. 
                Our intelligent assistant is designed to provide you with quick, accurate,
                 and personalized responses,
                 making your experience both efficient and enjoyable.
                 Dive in and discover a new way of engaging with technology—smart, 
                 intuitive, and always ready to assist.</h3>

                 <Link to="/dashboard">Begin Your Journey</Link>
                 
        </div>
        <div className="terms">
        <img src="/logo1.png" alt="" />
        <div className="links">
          <Link to="/">Terms of Service</Link>
          <span>|</span>
          <Link to="/">Privacy Policy</Link>
        </div>
      </div>
        </div>
    );
}

export default Homepage;
