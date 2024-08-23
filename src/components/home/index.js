import {Component} from "react";

import {Link} from "react-router-dom";

import './index.css';

class Home extends Component{

    render(){
        return(

            <div className="home-container">
                <h1 className="heading-for-home">Welcome to Mentor Booking Platform</h1>
                <img className="image-for-mentor" src="https://i.ibb.co/JnW1L1T/Whats-App-Image-2024-08-22-at-17-53-10-687e83b4.jpg" alt="mentors-image-not-found"/>
                
                <h2 className="description-for-home">Our mission is to help you find the best mentor for your career path</h2>
                <h2 className="description-for-home">We have a team of mentors who are experts in their respective fields</h2>
                <div>
                    <Link to="/book-sessions">
                    <button className="button-for-book">Book a session</button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Home;