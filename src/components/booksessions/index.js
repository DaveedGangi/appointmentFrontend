import {Component} from "react";

import {Link} from "react-router-dom";

import './index.css';

class BookSessions extends Component{
    render(){
        return(
            <div className="book-sessions-container">
                <h1>Book Sessions</h1>

                <div>
                    <Link to="/add-mentors">
                    <button className="button" type="button">Add Mentor</button>
                    </Link>
                    <Link to="/available-mentors">
                    <button className="button" type="button">Available Mentors</button>
                    </Link>
                    <Link to="/add-student">
                    <button className="button" type="button">Add Student</button>
                    </Link>
                    <Link to="/available-students">
                    <button className="button" type="button">Available Students</button>
                    </Link>
                    <Link to="/add-appointment">
                    <button className="button" type="button">Add appointment</button>
                    </Link>
                    <Link to="/show-appointments">
                    <button className="button" type="button">Showing Appointments</button>
                    </Link>
                    <Link to="/show-all-payments">
                    <button className="button" type="button">Showing Payments</button>
                    </Link>
                </div>
                <br/>
                <br/>

                <Link to="/">
                <button className="button-home" type="button">Back to Home</button>
                </Link>
            </div>
        )
    }

}

export default BookSessions;